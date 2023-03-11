import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Dashboard from "../components/Dashboard";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
      </Routes>
    </Router>
  );
}

export default Index;
