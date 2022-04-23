import { Tooltip } from "@mantine/core";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LocationType } from "../../@types";
import { greatPlaceStyle } from "./marker-style";

interface MarkerProps extends LocationType {
  lat: number;
  lng: number;
}
export const Marker: FC<MarkerProps> = (props) => {
  return (
    <Link className="cursor-pointer" to={`/map/location/${props.id}`}>
      <Tooltip
        style={greatPlaceStyle}
        withArrow
        radius="lg"
        arrowSize={5}
        label={props.plan_title}
      >
        {props.marker}
      </Tooltip>
    </Link>
  );
};
