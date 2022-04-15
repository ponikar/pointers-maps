import { useEffect } from "react";
import { Emoji } from "../@types";
import { useStore } from "../store";
import { useId } from "./useId";
import io from "socket.io-client";

export const socket = io("ws://localhost:8000");

export const usePointers = () => {
  const updatePointer = useStore((state) => state.updatePointer);
  const deletePointer = useStore((state) => state.deletePointer);

  const { getId } = useId();

  useEffect(() => {
    let id = getId();
    document.addEventListener("mousemove", (e) => {
      // update users positions
      socket.emit("pointer", {
        emoji: "🤩",
        x: e.pageX,
        y: e.pageY,
        id,
      });
    });

    return () => document.removeEventListener("mousemove", () => {});
  }, []);

  useEffect(() => {
    socket.on("pointer", (e: Emoji) => {
      updatePointer(e.id, e);
    });

    socket.on("pointer_left", (e: Emoji["socketId"]) => {
      // remove that user
      deletePointer(e);
    });

    return () => {
      socket.off("pointer");
      socket.off("pointer_left");
      socket.disconnect();
    };
  }, []);
};
