import { Tooltip } from "@mantine/core";
import React, { FC } from "react";
import { LocationType } from "../../@types";
import { greatPlaceStyle } from "./marker-style";

interface MarkerProps extends LocationType {
  lat: number;
  lng: number;
}
export const Marker: FC<MarkerProps> = (props) => {
  return (
    <button className="cursor-pointer" onClick={() => console.log("sdsd")}>
      <Tooltip
        style={greatPlaceStyle}
        withArrow
        radius="lg"
        arrowSize={5}
        label={props.plan_title}
      >
        {props.marker}
      </Tooltip>
    </button>
  );
};
