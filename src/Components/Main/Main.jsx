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
    <main className="main">
      <h4 id="h4" className="main__pago">Pago Seguro</h4>
      <div className="main__money">
        <div className="main__pay">
          <p>Tarjeta de credito, Tarjeta de debito y pago electronico</p>
          <div className="main__paymentMethod">
            <figure>
              <img src={Amex} alt="logo del banco Amex" />
              <img src={Paypal} alt="logo de paypal" />
              <img src={Invex} alt="Logo del banco Invex" />
              <img src={Mastercard} alt="Logo del banco Mastercard" />
              <img src={Visa} alt="Logo del banco Visa" />
            </figure>
          </div>
        </div>
        <div className="main__cashPayment">
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <div className="main__branchOffices">
            <figure>
              <img src={Oxxo} alt="sucursal de pago del Oxxo" />
              <img src={Eleven} alt="sucursal de pago Eleven" />
              <img src={Walmart} alt="sucursal de pago de Walmart" />
              <img src={Farmacias} alt="sucursal de pago de farmacias ahorro" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
