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
      {/* <Link to="/">basic</Link>
      <Link to="/extra">extra</Link> */}
    </div>
  );
}

export default App;
