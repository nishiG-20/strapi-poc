import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Category from "./components/category";
import Navbar from "./components/navbar";
import ArticleInfo from "./components/aricleInfo";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showArticleInfo" element={<ArticleInfo />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
