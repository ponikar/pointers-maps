import {
  getFirestore,
  doc,
  collection,
  updateDoc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { app } from ".";
import { Emoji } from "../@types";

const db = getFirestore(app);

const rooms = collection(db, "rooms");
export const updateCordsToDb = async (cord: Emoji) => {
  const d = doc(rooms, cord.id);
  const ref = await getDoc(d);
  if (ref.exists()) {
    updateDoc(d, { [cord.id]: cord });
  } else {
    setDoc(d, { [cord.id]: cord });
  }
};

export const onCollectionUpdate = (cb: (e: Emoji) => void, ownId: string) => {
  return onSnapshot(rooms, (ref) => {
    ref.docs.forEach((s) => {
      if (s.id !== ownId) {
        const d = { ...s.data(), id: s.id } as Emoji;
        cb(d);
      }
    });
  });
};
