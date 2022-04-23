import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LocationInfo } from "./components/LocationInfo";
import { Map } from "./components/Map";
import { MapFeature } from "./components/Map/MapFeature";
import { PickEmoji } from "./components/PickEmoji";
import { Pointers } from "./components/Pointers";
import { SelectLocation } from "./components/SelectLocation";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PickEmoji />} />
          <Route path="/map" element={<Map />}>
            <Route path="pick" element={<SelectLocation />} />
            <Route path="location/:id" element={<LocationInfo />} />
          </Route>
        </Routes>
      </Router>
      <Pointers />
      <MapFeature />
    </>
  );
}

export default App;
