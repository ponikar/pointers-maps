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
