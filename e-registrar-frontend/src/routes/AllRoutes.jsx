import React from "react";
import {Routes, Route} from "react-router-dom";

import {HomePage} from "../pages/Home/HomePage";
import {StudentPage} from "../pages/Student/Student";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/student" element={<StudentPage/>}/>
    </Routes>
  )
};
