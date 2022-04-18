import React, { useEffect, useState } from "react";
import { usePointers } from "../../hooks/usePointers";
import { useStore } from "../../store";
import "./pointers.css";
import GoogleMapReact from "google-map-react";
import { useSocket } from "../../hooks/useSocket";
import { PickedLocations } from "../PickedLocation";
import { Container } from "@mantine/core";
import { Search } from "../Search";
import { Marker } from "../Marker";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 20,
};

export const Pointers = () => {
  usePointers();
  const [mapOptions, setMapOptions] = useState(defaultProps);
  const setTempSelectedCords = useStore((state) => state.setTempSelectedCords);

  const markedLocations = useStore((state) => state.markedLocations);
  useEffect(() => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition((e) => {
        setMapOptions((old) => ({
          ...old,
          center: { lat: e.coords.latitude, lng: e.coords.longitude },
        }));
      });
    }
  }, []);

  const { onMapCredChange } = useSocket((opt) => {
    setMapOptions(opt);
  });
  const pointers = useStore((state) => state.pointers);
  return (
    <div className="w-full h-screen left-0 right-0 fixed">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.GOOGLE_API_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        zoom={mapOptions.zoom}
        center={mapOptions.center}
        yesIWantToUseGoogleMapApiInternals
        onClick={(e) => setTempSelectedCords({ lat: e.lat, lng: e.lng })}
        onChange={({ center, zoom }) => onMapCredChange({ center, zoom })}
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
