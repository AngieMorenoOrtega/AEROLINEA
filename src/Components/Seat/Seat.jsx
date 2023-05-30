import React from 'react'
import SeatSelectorReturn from './Seat24'
import Seat from './Seat23'
import { boleto } from "../../Data/data.js";
import PaymentButton from '../common/PaymentButton.js';


const SeatAll = () => {
  const showComponent=boleto.vueloregreso
  return (
    <div>
  {showComponent &&<Seat></Seat>}
  {!showComponent && <SeatSelectorReturn></SeatSelectorReturn> }   
   <PaymentButton></PaymentButton>
    </div>

  )
}

export default SeatAll