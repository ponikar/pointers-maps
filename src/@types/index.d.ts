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
