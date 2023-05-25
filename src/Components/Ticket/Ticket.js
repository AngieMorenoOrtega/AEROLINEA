import React from 'react';
import { Link } from 'react-router-dom';

const PaymentButton = () => {
  return (
    <Link to="/datos-pago">
      <button>Pagar con PayPal</button>
    </Link>
  );
};

export default PaymentButton;
