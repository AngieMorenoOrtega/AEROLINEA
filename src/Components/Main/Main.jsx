import React from "react";
import "./Main.scss";
import "../../styledglobal/StyledGlobal.scss"
import Amex from "../../Assets/amex.png";
import Paypal from "../../Assets/paypal.png";
import Invex from "../../Assets/invex.png";
import Mastercard from "../../Assets/Mastercard.png";
import Visa from "../../Assets/Visa.png";
import Oxxo from "../../Assets/oxxo.png";
import Eleven from "../../Assets/eleven.png";
import Walmart from "../../Assets/Walmart.png";
import Farmacias from "../../Assets/farmacias.png";
function Main() {
  return (
    <nav className="navbar">
      <h4>Pago Seguro</h4>
      <div className="navbar__money">
        <div className="navbar__pay">
          <p>Tarjeta de credito, Tarjeta de debito y pago electronico</p>
          <div className="navbar__paymentMethod">
            <figure>
              <img src={Amex} alt="logo del banco Amex" />
              <img src={Paypal} alt="logo de paypal" />
              <img src={Invex} alt="Logo del banco Invex" />
              <img src={Mastercard} alt="Logo del banco Mastercard" />
              <img src={Visa} alt="Logo del banco Visa" />
            </figure>
          </div>
        </div>
        <div className="navbar__cashPayment">
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <div className="navbar__branchOffices">
            <figure>
              <img src={Oxxo} alt="sucursal de pago del Oxxo" />
              <img src={Eleven} alt="sucursal de pago Eleven" />
              <img src={Walmart} alt="sucursal de pago de Walmart" />
              <img src={Farmacias} alt="sucursal de pago de farmacias ahorro" />
            </figure>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Main;
