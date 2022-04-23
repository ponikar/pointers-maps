import "./App.css";
import { LocationInfo } from "./components/LocationInfo";
import { Map } from "./components/Map";
import { MapFeature } from "./components/Map/MapFeature";
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
          {tempSelectedCords.lat && tempSelectedCords.lng && <SelectLocation />} */}
           <Map />
          <MapFeature />
        </>
      )}
    </>
  );
}

export default App;
