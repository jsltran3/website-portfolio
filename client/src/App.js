import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About.js";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </NavBar>
      <p>test</p>
    </div>
  );
}

export default App;
