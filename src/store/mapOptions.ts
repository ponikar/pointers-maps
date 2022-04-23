import { useStore } from ".";
import { StateSlice } from "../@types";

export const mapOptionsState: StateSlice<"mapOptions" | "updateOptions"> = (
  set
) => ({
  mapOptions: {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 20,
  },
  updateOptions: (options) =>
    set((state) => ({ mapOptions: { ...state.mapOptions, ...options } })),
});
