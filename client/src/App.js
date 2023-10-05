import { Routes, Route } from "react-router-dom";
import React from "react";
import HomeLayoutHOC from "./HOC/HomeHoc";
import Temp from "./Components/Temp";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayoutHOC/>}  />
      </Routes>
    </>
  );
}

export default App;