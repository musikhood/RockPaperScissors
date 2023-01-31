import React from "react";
import "./App.scss";
import { Extra, Basic } from "./Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
}

export default App;
