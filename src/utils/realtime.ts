import { EffectCallback } from "react";
import { Emoji } from "../@types";
import { onCollectionUpdate, updateCordsToDb } from "../firebase/firestore";
import { getId } from "../hooks/useId";

export const broadcastCords = (cords: Emoji) => {
  updateCordsToDb(cords);
};

export const onOtherCordsChange = (
  callback: (cords: Emoji) => void
): EffectCallback => {
  return onCollectionUpdate(callback, getId());
};
