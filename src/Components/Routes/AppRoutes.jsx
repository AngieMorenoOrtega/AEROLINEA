import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SeatsRender from "../../Pages/SeatsRender/SeatsRender.jsx";
import Home from "../../Pages/Home/Home.jsx";
import SeatAll from "../../Pages/SeatsRender/SeatsRender.jsx";
import MaletasComponent from "../../Pages/Maletas/Maletas.jsx";
import Layout from "../layout/Layaout.jsx";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={ <Home/> } />
            <Route path="Maletas" element={ <MaletasComponent/> } />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;