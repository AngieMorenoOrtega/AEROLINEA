import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Seat from "../Seat/Seat.jsx";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Seat/>}>
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