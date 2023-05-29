import React from 'react';
import {boleto} from "../../Data/data.js"

const BoletosComponent = () => {

  return (
    
    <div>
      <section>
        <h1>Tu reservación</h1></section>
      <h2>Información del boleto:</h2>
      <ul><li className='gris'>Pasajeros 
        </li><li>{boleto.pasajeros} {boleto.tipo}
          </li></ul>
          <p className='gris'>Vuelo de Salida</p>
     <p className='negro'> {boleto.desde}</p>
      <p className='negro'>{boleto.hasta}</p>
      
      <p>Desde Retorno: {boleto.desderetorno}</p>
      <p>Hasta Retorno: {boleto.hastaretorno}</p>
      <p>Hora Retorno: {boleto.horaretorno}</p>
      <p>Intervalos Retorno: {boleto.intervalosretorno ? 'Sí' : 'No'}</p>
      <p>Fecha Retorno: {boleto.fecharetorno}</p>
      <p>Vuelo Regreso: {boleto.vueloregreso ? 'Sí' : 'No'}</p>
      
      <p>Hora: {boleto.hora}</p>
      <p>Intervalos: {boleto.intervalos ? 'Sí' : 'No'}</p>
      <p>Fecha: {boleto.fecha}</p>
      <p>Costo: {boleto.costo}</p>
    </div>
  );
};

export default BoletosComponent;
