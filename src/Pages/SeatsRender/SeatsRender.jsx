import BoletosComponent from "../../Components/common/BoletosComponent/BoletosComponent.jsx";
import SeatSelector from "../../Components/Seat/Seat.jsx"
import  "./SeatsRender.scss"
import React from 'react'

const SeatsRender = () => {
  return (
    <div>
        <BoletosComponent/>
        <SeatSelector/>
        </div>
  )
}

export default SeatsRender
