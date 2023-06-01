import React from 'react';
import SeatSelectorReturn from './Seat24';
import Seat from './Seat23';
import { boleto } from "../../Data/data.js";
import PaymentButton from '../common/PaymentButton.js';

const SeatAll = ( allSeatsSelected ) => {
  const showComponent = boleto.vueloregreso;

const all=allSeatsSelected
console.log(all);
  return (
    <div>
      <Seat allSeatsSelected={allSeatsSelected} />
      {showComponent && <SeatSelectorReturn allSeatsSelected={allSeatsSelected} />}
      {showComponent && allSeatsSelected && (
        <PaymentButton allSeatsSelected={allSeatsSelected} />
      )}
    </div>
  );
};

export default SeatAll;
