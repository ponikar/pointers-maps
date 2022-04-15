import { useEffect } from "react";
import { nanoid } from "nanoid";

export const getId = () => localStorage.getItem("__tab") || "";

const setId = () => localStorage.setItem("__tab", nanoid());
export const useId = () => {
  useEffect(() => {
    if (!getId()) {
      setId();
    }
  }, []);

  return { getId };
};
