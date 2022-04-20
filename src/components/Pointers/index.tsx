import React, { useCallback, useEffect, useState } from "react";
import { usePointers } from "../../hooks/usePointers";
import { useStore } from "../../store";
import "./pointers.css";
import GoogleMapReact from "google-map-react";
import { useSocket } from "../../hooks/useSocket";
import { PickedLocations } from "../PickedLocation";
import { Container } from "@mantine/core";
import { Search } from "../Search";
import { Marker } from "../Marker";
import { useMapOptions, useMutateMapOptions } from "../../store/mapOptions";
import { State } from "../../@types";

export const Pointers = () => {
  usePointers();
  const mapOptions = useMapOptions();
  const updateMapOptions = useMutateMapOptions();
  const setTempSelectedCords = useStore((state) => state.setTempSelectedCords);

  const markedLocations = useStore((state) => state.markedLocations);
  useEffect(() => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition((e) => {
        updateMapOptions({
          center: { lat: e.coords.latitude, lng: e.coords.longitude },
        });
      });
    }
  }, []);

  const { onMapCredChange } = useSocket((opt) => {
    updateMapOptions(opt);
  });

  const updateCurrentLocation = useCallback((options: State["mapOptions"]) => {
    updateMapOptions(options);
    onMapCredChange(options);
  }, []);
  const pointers = useStore((state) => state.pointers);
  return (
    <div className="w-full h-screen left-0 right-0 fixed">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_MAP_KEY }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        zoom={mapOptions.zoom}
        center={mapOptions.center}
        yesIWantToUseGoogleMapApiInternals
        onClick={(e) => setTempSelectedCords({ lat: e.lat, lng: e.lng })}
        onChange={({ center, zoom }) => updateCurrentLocation({ center, zoom })}
      >
        {markedLocations.map((location) => (
          <Marker
            lat={location.map.lat}
            lng={location.map.lng}
            key={location.id}
            {...location}
          />
        ))}
      </GoogleMapReact>
      {Object.keys(pointers)
        .map((k) => pointers[k])
        .map((c) => (
          <p
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              fontSize: "50px",
            }}
            key={c.id}
          >
            {c.emoji}
          </p>
        ))}

      <Container
        style={{ position: "relative", width: "100%", height: "100%" }}
        p="lg"
      >
        <Search />
        <PickedLocations />
      </Container>
    </div>
  );
};
