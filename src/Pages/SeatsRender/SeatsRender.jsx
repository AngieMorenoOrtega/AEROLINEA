
import React from 'react';
import SeatSelectorReturn from "../../Components/Seat/Seat24"
import Seats from '../../Components/Seat/Seat23'; 
import { boleto } from "../../Data/data.js";
import PaymentButton from "../../Components/common/PaymentButton"


const SeatAll = ( allSeatsSelected ) => {
  const showComponent = boleto.vueloregreso;

const all=allSeatsSelected
console.log(all);
  return (
    <div>
      <Seats allSeatsSelected={allSeatsSelected} />
      {showComponent && <SeatSelectorReturn allSeatsSelected={allSeatsSelected} />}
      {showComponent && allSeatsSelected && (
        <PaymentButton allSeatsSelected={allSeatsSelected} />
      )}
    </div>
  );
};

export default SeatAll;