import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PaymentButton.scss"
import { FaPaypal } from 'react-icons/fa';
const PaymentButton = () => {
  const [paypal,setpaypal]=useState(false)
  return (
    <div>
     <Link to="/datos-pago">
      <button disabled={paypal}
      >{FaPaypal}Pagar con PayPal</button>
    </Link>  </div>
    
   
  );
};

export default PaymentButton;
