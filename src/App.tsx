import "./App.css";
import { PickEmoji } from "./components/PickEmoji";
import { Pointers } from "./components/Pointers";
import { useStore } from "./store";
function App() {
  const myEmoji = useStore((state) => state.emoji);
  return (
    <>
      {!myEmoji ? (
        <PickEmoji />
      ) : (
        <>
          <Pointers />
        </>
      )}
    </>
  );
}

export default App;
