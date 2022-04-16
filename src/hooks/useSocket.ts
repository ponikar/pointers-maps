import React, { useEffect } from "react";
import { socket } from "./usePointers";

export const useSocket = (cb: (options: any) => void) => {
  const onMapCredChange = (e: any) => {
    socket.emit("map_changed", e);
  };

  useEffect(() => {
    socket.on("on_map_changed", cb);
  }, []);

  return { onMapCredChange };
};
