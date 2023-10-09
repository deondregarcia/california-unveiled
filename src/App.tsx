import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// pages
import Landing from "./pages/Landing";
import Sightseeing from "./pages/Sightseeing/Sightseeing";
import Nature from "./pages/Nature/Nature";
import TypicalTourist from "./pages/TypicalTourist/TypicalTourist";
import HiddenGems from "./pages/HiddenGems/HiddenGems";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sightseeing" element={<Sightseeing />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/typical-tourist" element={<TypicalTourist />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
