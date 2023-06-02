import React from 'react';
import { boleto } from "../../../Data/data.js"
import "./BoletosComponent.scss"

const BoletosComponent = () => {

  return (

<div>
  <section className='section'>
    <h1 className='background'>Tu reservación</h1>

  <ul>
    <li id="pasajeros1">Pasajeros</li>
    <li id="pasajeros">{boleto.pasajeros} {boleto.tipo}</li>
  </ul>
  <p className='gris'>Vuelo de Salida</p>
  <ul>
    <li className='negro'>{boleto.desde}</li>
    <li>__</li>
    <li className='negro'>{boleto.hasta}</li>
  </ul>
  <ul className='negrita'>
    <li>{boleto.hora1}</li>
    <li>{boleto.hora2}</li>
  </ul>
  <p>{boleto.fecha}</p>
  <p className='gris'>Vuelo de Regreso</p>
  <ul>
    <li className='negro'>{boleto.desderetorno}</li>
    <li>__</li>
    <li className='negro'>{boleto.hastaretorno}</li>
  </ul>
  <ul className='negrita'>
    <li>{boleto.horaretorno1}</li>
    <li>{boleto.horaretorno2}</li>
  </ul>
  <p >{boleto.fecharetorno}</p>
  {/* <p>Vuelo Regreso: {boleto.vueloregreso ? 'Sí' : 'No'}</p> */}

  {/* <p>Intervalos Retorno: {boleto.intervalosretorno ? 'Sí' : 'No'}</p> */}

  </section>

<section className='section'> 
 <h1 className='background'>Costo de vuelo</h1>
  <ul>
    <li>Total</li>
    <li id="pasajeros">${boleto.costo}</li>
  </ul>
  </section>  
 
</div>
  )
};

export default BoletosComponent;
