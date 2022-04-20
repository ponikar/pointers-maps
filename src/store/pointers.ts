import { StateSlice } from "../@types";
import _omit from "lodash/omit";
import { useStore } from ".";
export const pointerState: StateSlice<
  "pointers" | "updatePointer" | "deletePointer"
> = (set) => ({
  pointers: {},
  updatePointer: (id, cords) =>
    set((state) => ({ pointers: { ...state.pointers, [id]: cords } })),

  deletePointer: (socketId) =>
    set((state) => {
      const ids = Object.keys(state.pointers);

      const pointers = state.pointers;
      let userid = null;

      for (let i = 0; i < ids.length; i++) {
        const pointer = state.pointers[ids[i]];
        if (pointer.socketId === socketId) {
          userid = pointer.id;
          break;
        }
      }

      if (userid) {
        return { pointers: _omit(state.pointers, userid) };
      }

      return { pointers };
    }),
});

export const usePointerState = () => {
  return useStore((state) => state.pointers);
};

export const usePointerMutate = () => {
  return useStore((state) => ({
    updatePointer: state.updatePointer,
    deletePointer: state.deletePointer,
  }));
};
