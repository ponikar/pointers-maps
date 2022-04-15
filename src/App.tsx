import "./App.css";
import { usePointers } from "./hooks/usePointers";
import { useStore } from "./store";
function App() {
  usePointers();

  const pointers = useStore((state) => state.pointers);
  return (
    <div>
      <p>Cords</p>
      {Object.keys(pointers)
        .map((k) => pointers[k])
        .map((c) => (
          <p style={{ position: "absolute", left: c.x, top: c.y }} key={c.id}>
            {c.emoji}
          </p>
        ))}
    </div>
  );
}

export default App;
