import { Tooltip } from "@mantine/core";
import React, { FC } from "react";
import { greatPlaceStyle } from "./marker-style";

interface MarkerProps {
  lat: number;
  lng: number;

  text: string;
}

export const Marker: FC<MarkerProps> = () => {
  return (
    <Tooltip
      style={greatPlaceStyle}
      withArrow
      radius="lg"
      arrowSize={5}
      label="😃 Sunday Lunch"
    >
      🍔
    </Tooltip>
  );
};
