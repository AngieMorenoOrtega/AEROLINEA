import React from 'react';
import { Link } from 'react-router-dom';
import "./PaymentButton.scss"
import { FaPaypal } from 'react-icons/fa';
const PaymentButton = () => {
  return (
    <div>
     <Link to="/datos-pago">
      <button>{FaPaypal}Pagar con PayPal</button>
    </Link>  </div>
    
   
  );
};

export default PaymentButton;
