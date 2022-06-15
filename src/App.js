import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
