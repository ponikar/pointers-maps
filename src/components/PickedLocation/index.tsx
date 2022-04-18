import { Box, Card, Divider, Text } from "@mantine/core";
import React from "react";
import { useStore } from "../../store";
import { Location } from "./PickedLocation";
export const PickedLocations = () => {
  const locations = useStore((state) => state.markedLocations);
  return (
    <div
      style={{ border: "1px solid #dedede" }}
      className="fixed py-4 w-[20%] border-2 bg-white h-1/2 right-2 top-[50%] translate-y-[-50%]"
    >
      <div className="px-4">
        <Text size="lg" className="font-semibold">
          📌 Picked Location
        </Text>
      </div>
      <div
        // temp
        style={{ borderTop: "1px solid #dedede" }}
        className="h-[95%] mt-3"
      >
        <section className="overflow-y-auto max-h-full">
          {locations.map((location) => (
            <Location id={location.id} {...location} />
          ))}
        </section>
      </div>
    </div>
  );
};
