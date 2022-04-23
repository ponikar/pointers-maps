import { StateCreator } from "zustand";

export interface PointersState {
  pointers: Record<string, Emoji>;
}

export interface Emoji {
  emoji: string;
  x: number;
  y: number;
  id: string;

  socketId: string;
}

export interface LocationType {
  id?: string;
  plan_title: string;
  marker: string;
  date: string;

  map: {
    lng: number;
    lat: number;
  };
  duration: string;
  comment?: string;
}

export type NewLocation = Pick<
  LocationType,
  Exclude<keyof LocationType, "id" | "map">
>;

export interface State {
  pointers: PointersState["pointers"];

  mapOptions: {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };

  updateOptions: (opt: Partial<State["mapOptions"]>) => void;

  updatePointer: (id: string, cord: Emoji) => void;

  deletePointer: (id: Emoji["socketId"]) => void;

  emoji: string;

  name: string;

  setName: (name: string) => void;

  setEmoji: (e: string) => void;
  tempSelectedCords: {
    lng: number | null;
    lat: number | null;
  };
  setTempSelectedCords: (e: State["tempSelectedCords"]) => void;

  markedLocations: LocationType[];

  addMarkedLocation: (e: LocationType) => void;

  deleteMarkedLocation: (e: LocationType["id"]) => void;
}

export type StateSlice<K extends keyof State> = StateCreator<Pick<State, K>>;
