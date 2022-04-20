import { State, StateSlice } from "../@types";

export const userState: StateSlice<
  "emoji" | "setEmoji" | "name" | "setName"
> = (set) => ({
  name: "",
  emoji: "",
  setEmoji: (e) => set(() => ({ emoji: e })),
  setName: (name) => set(() => ({ name })),
});
