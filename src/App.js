import React from "react";
import "./styles.css";
import Navbar from "./nav/Navbar";
import Dashboard from "./dashboard/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}
