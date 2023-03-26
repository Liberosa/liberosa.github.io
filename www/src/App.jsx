import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CurrencyConverter from "./CurrencyConverter";
import Header from "./Header";
import Resume from "./Resume";

function Dashboard() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<CurrencyConverter />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    );
  }

  export default App;