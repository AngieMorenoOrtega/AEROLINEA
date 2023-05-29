import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App/App.js";

import Seat from "../Seat/Seat.jsx";
import SeatsRender from "../../Pages/SeatsRender/SeatsRender.jsx"
import BoletosComponent from "../common/BoletosComponent.jsx";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SeatsRender/>}>
            {/* <Route index element={<Home />}/> */}
            {/* <Route path="destination" element={<Destination/>} />
            <Route path="crew" element={<Crew/>} />
            <Route path="technology" element={<Technology/>} />    */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;