import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CurrencyConverter from "./CurrencyConverter";
import Header from "./Header";
import Resume from "./Resume";
import NoMatch from "./NoMatch";

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
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="resume" element={<Resume />} />
          <Route path="nomatch" element={<NoMatch />} />
        </Route>
      </Routes>
    );
  }

  export default App;