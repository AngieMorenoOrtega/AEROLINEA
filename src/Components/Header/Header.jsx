import React, { useState } from 'react';
import FormularioBasico from "../Formulario/Formulario";
import Fondo from "../../Assets/fondo.png";
import './Header.scss'
import FormContext from '../createContext/createContext';
const Header = () => {
  const [formData, setFormData] = useState({
    origen: 'bogota',
    destino: '',
    fechaida: '',
    fechavuelto: '',
    adultos: '',
    niños: '',
    bebes: '',
    viajeredondo: '',
    // Otros campos del formulario
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
      <header className="header">
      <figure className="header__figure">
        <img src={Fondo} alt="Ala de un avion" />
      </figure>
      <div className='header__container'> 
      <div className="header_text">
        <h4>Busca un nuevo destino y comienza la aventura</h4>
        <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
        <FormContext.Provider value={{ formData, handleInputChange }}>
        <FormularioBasico/>
        </FormContext.Provider>
      </div>
      </div>
    </header>
  )
}

export default Header
