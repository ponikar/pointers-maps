import { useStore } from ".";
import { State, StateSlice } from "../@types";

export const locationState: StateSlice<
  "markedLocations" | "addMarkedLocation" | "deleteMarkedLocation"
> = (set) => ({
  markedLocations: [],
  addMarkedLocation: (location) =>
    set((state) => ({ markedLocations: [...state.markedLocations, location] })),
  deleteMarkedLocation: (id) =>
    set((state) => ({
      markedLocations: state.markedLocations.filter((loc) => loc.id !== id),
    })),
});

export const useTempSelectedCords = () => {
  return useStore((state) => state.tempSelectedCords);
};

export const useMarkedLocation = () => {
  return useStore((state) => state.markedLocations);
};

export const useMutateLocations = () => {
  return useStore((state) => ({
    addMarkedLocation: state.addMarkedLocation,
    deleteMarkedLocation: state.deleteMarkedLocation,
  }));
};
