import React from 'react';
import { boleto } from "../../../Data/data.js"
import "./BoletosComponent.scss"

const BoletosComponent = () => {

  return (

<div>
  <section className='section'>
    <h1 className='background'>Tu reservación</h1>
    <h2>Información del boleto:</h2>
  <ul>
    <li className='gris'>Pasajeros</li>
    <li>{boleto.pasajeros} {boleto.tipo}</li>
  </ul>
  <p className='gris'>Vuelo de Salida</p>
  <ul>
    <li className='negro'>{boleto.desde}</li>
    <li>__</li>
    <li className='negro'>{boleto.hasta}</li>
  </ul>
  <ul>
    <li>{boleto.hora1}</li>
    <li>{boleto.hora2}</li>
  </ul>
  <p className='negrita'>{boleto.fecha}</p>
  <p className='gris'>Vuelo de Regreso</p>
  <ul>
    <li className='negro'>{boleto.desderetorno}</li>
    <li>__</li>
    <li className='negro'>{boleto.hastaretorno}</li>
  </ul>
  <ul>
    <li>{boleto.horaretorno1}</li>
    <li>{boleto.horaretorno2}</li>
  </ul>
  <p className='negrita'>{boleto.fecharetorno}</p>
  {/* <p>Vuelo Regreso: {boleto.vueloregreso ? 'Sí' : 'No'}</p> */}

  {/* <p>Intervalos Retorno: {boleto.intervalosretorno ? 'Sí' : 'No'}</p> */}

  </section>
  <h1 className='background'>Costo de vuelo</h1>
   <p className='negrita'>Costo: {boleto.costo}</p>
<section className='section'>
  </section>  
 
</div>
  )
};

export default BoletosComponent;
