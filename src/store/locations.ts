import { useStore } from ".";
import { State, StateSlice } from "../@types";

export const locationState: StateSlice<
  | "tempSelectedCords"
  | "setTempSelectedCords"
  | "markedLocations"
  | "addMarkedLocation"
> = (set) => ({
  tempSelectedCords: {
    lat: null,
    lng: null,
  },
  setTempSelectedCords: (e) => set({ tempSelectedCords: e }),
  markedLocations: [],
  addMarkedLocation: (location) =>
    set((state) => ({ markedLocations: [...state.markedLocations, location] })),
});

export const useTempSelectedCords = () => {
  return useStore((state) => state.tempSelectedCords);
};

export const useMarkedLocation = () => {
  return useStore((state) => state.markedLocations);
};

export const useMutateLocations = () => {
  return useStore((state) => ({
    setTempSelectedCords: state.setTempSelectedCords,
    addMarkedLocation: state.addMarkedLocation,
  }));
};
