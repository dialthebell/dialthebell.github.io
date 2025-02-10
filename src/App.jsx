import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Camera from "./pages/Camera";
import Waiting from "./pages/Waiting";
import About from "./pages/About";
import Authority from "./pages/Authority";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/Waiting" element={<Waiting />} />
          <Route path="/About" element={<About />} />
          <Route path="/Authority" element={<Authority />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
