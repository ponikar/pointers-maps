// @ts-nocheck

import create from "zustand";
import _omit from "lodash/omit";
import { userState } from "./user";
import { pointerState } from "./pointers";
import { locationState } from "./locations";
import { State } from "../@types";
import { mapOptionsState } from "./mapOptions";

export const useStore = create<State>((...args) => ({
  ...userState(...args),
  ...pointerState(...args),
  ...locationState(...args),
  ...mapOptionsState(...args),
}));
