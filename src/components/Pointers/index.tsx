import React, { useEffect, useState } from "react";
import { usePointers } from "../../hooks/usePointers";
import { useStore } from "../../store";
import "./pointers.css";
import GoogleMapReact from "google-map-react";
import { useSocket } from "../../hooks/useSocket";
import { PickedLocations } from "../PickedLocation";
import { Container } from "@mantine/core";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 16,
};

export const Pointers = () => {
  usePointers();
  const [mapOptions, setMapOptions] = useState(defaultProps);

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
  const myEmoji = useStore((state) => state.emoji);
  const pointers = useStore((state) => state.pointers);
  return (
    <div className="w-full h-screen left-0 right-0 fixed">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        zoom={mapOptions.zoom}
        center={mapOptions.center}
        onChange={({ center, zoom }) => onMapCredChange({ center, zoom })}
      ></GoogleMapReact>
      <div
        className="emoji_area"
        style={{
          cursor: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${myEmoji}</text></svg>")
    16 0,
  auto`,
        }}
      >
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
          <PickedLocations />
        </Container>
      </div>
    </div>
  );
};
