import { CSSProperties } from "@mantine/styles/lib/tss/types/css-object";

const K_WIDTH = 40;
const K_HEIGHT = 40;

export const greatPlaceStyle: CSSProperties = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  fontSize: "40px",
};
