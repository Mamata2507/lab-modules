import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import AllRoutes from "./routes/AllRoutes";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>
  )
};

export default App;
