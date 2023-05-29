import React from 'react'
import FormularioBasico from "../Formulario/Formulario";
import Fondo from "../../Assets/fondo.png";
import './Header.scss'
const Header = () => {
  return (
      <header className="header">
      <figure className="header__figure">
        <img src={Fondo} alt="Ala de un avion" />
      </figure>
      <div className='header__container'> 
      <div className="header_text">
        <h4>Busca un nuevo destino y comienza la aventura</h4>
        <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
        <FormularioBasico/>
      </div>
      </div>
    </header>
  )
}

export default Header
