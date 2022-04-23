// @ts-nocheck

import create from "zustand";
import _omit from "lodash/omit";
import { mapOptionsState } from "./mapOptions";
import { userState } from "./user";
import { pointerState } from "./pointers";
import { locationState } from "./locations";
import { State } from "../@types";

export const useStore = create<State>((...args) => ({
  ...mapOptionsState(...args),
  ...userState(...args),
  ...pointerState(...args),
  ...locationState(...args),
}));
