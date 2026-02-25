import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import Companies from "./pages/Companies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </>
  );
};

export default App;
