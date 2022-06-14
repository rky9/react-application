import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
