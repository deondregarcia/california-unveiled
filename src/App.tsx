import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import HiddenGems from "./pages/HiddenGems/HiddenGems";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
      </Routes>
    </>
  );
}

export default App;
