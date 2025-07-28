import React, { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router";
import Registration from "./Pages/Registration";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
    </>
  );
};

export default App;
