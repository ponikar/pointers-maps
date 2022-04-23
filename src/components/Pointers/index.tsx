import { FC } from "react";
import { usePointers } from "../../hooks/usePointers";
import { useStore } from "../../store";
import "./pointers.css";

export const Pointers: FC = () => {
  usePointers();

  const pointers = useStore((state) => state.pointers);
  return (
    <>
      {Object.keys(pointers)
        .map((k) => pointers[k])
        .map((c) => (
          <p
            style={{
              position: "absolute",
              left: c.x,
              top: c.y,
              fontSize: "50px",
            }}
            key={c.id}
          >
            {c.emoji}
          </p>
        ))}
    </>
  );
};
