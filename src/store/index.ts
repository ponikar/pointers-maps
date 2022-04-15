import create from "zustand";
import { Emoji, PointersState } from "../@types";
import _omit from "lodash/omit";
interface State {
  pointers: PointersState["pointers"];

  updatePointer: (id: string, cord: Emoji) => void;

  deletePointer: (id: Emoji["socketId"]) => void;
}

export const useStore = create<State>((set) => ({
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
}));
