
import React from 'react';
import SeatSelectorReturn from "../../Components/Seat/Seat24"
import Seats from '../../Components/Seat/Seat23'; 
import { boleto } from "../../Data/data.js";
import PaymentButton from "../../Components/common/PaymentButton"


const SeatAll = ({ allSeatsSelected }) => {
  const showComponent = boleto.vueloregreso;

  return (
    <div>
      <Seats></Seats>
      {showComponent && <SeatSelectorReturn />}
      {<PaymentButton allSeatsSelected={allSeatsSelected} />}
    </div>
  );
};


export default SeatAll;