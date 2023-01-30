import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import  Category from "./components/category"
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
