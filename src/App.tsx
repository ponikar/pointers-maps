import "./App.css";
import { PickEmoji } from "./components/PickEmoji";
import { Pointers } from "./components/Pointers";
import { SelectLocation } from "./components/SelectLocation";
import { useStore } from "./store";
function App() {
  const myEmoji = useStore((state) => state.emoji);
  const tempSelectedCords = useStore((state) => state.tempSelectedCords);
  return (
    <>
      {!myEmoji ? (
        <PickEmoji />
      ) : (
        <>
          <Pointers />
          {tempSelectedCords.lat && tempSelectedCords.lng && <SelectLocation />}
        </>
      )}
    </>
  );
}

export default App;
