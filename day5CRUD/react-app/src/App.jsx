import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Update from "./Components/Update";
import View from "./components/view";

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
