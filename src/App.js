import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import First from "./components/Onboarding/First";
import Second from "./components/Onboarding/Second";
import Third from "./components/Onboarding/Third";
import Fourth from "./components/Onboarding/Fourth";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<First />} />
      <Route exact path="/second" element={<Second />} />
      <Route exact path="/third" element={<Third />} />
      <Route exact path="/fourth" element={<Fourth />} />
    </Routes>
  );
}

export default App;
