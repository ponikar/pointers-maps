import { useStore } from "../store";

export const useMapOptions = () => {
  return useStore((state) => state.mapOptions);
};

export const useMutateMapOptions = () => {
  return useStore((state) => state.updateOptions);
};
