import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Placetostay from "./components/pages/placetostay/Placetostay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<Placetostay />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
