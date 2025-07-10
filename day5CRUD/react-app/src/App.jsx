import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import Update from "./components/Update";
import View from "./components/View";
import Home from "./components/Home";

const App = () => {


 return(
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/update/:id" element={<Update/>}/>
   <Route path="/view/:id" element={<View/>}/>
  </Routes>
 )
};

export default App;
