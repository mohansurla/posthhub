import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
