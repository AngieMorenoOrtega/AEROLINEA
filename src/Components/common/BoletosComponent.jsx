import React from 'react';
import {boleto} from "../../Data/data.js"

const BoletosComponent = () => {

  return (
    <div>
      <h2>Información del boleto:</h2>
      <p>Pasajeros: {boleto.pasajeros}</p>
      <p>Tipo: {boleto.tipo}</p>
      <p>Desde Retorno: {boleto.desderetorno}</p>
      <p>Hasta Retorno: {boleto.hastaretorno}</p>
      <p>Hora Retorno: {boleto.horaretorno}</p>
      <p>Intervalos Retorno: {boleto.intervalosretorno ? 'Sí' : 'No'}</p>
      <p>Fecha Retorno: {boleto.fecharetorno}</p>
      <p>Vuelo Regreso: {boleto.vueloregreso ? 'Sí' : 'No'}</p>
      <p>Desde: {boleto.desde}</p>
      <p>Hasta: {boleto.hasta}</p>
      <p>Hora: {boleto.hora}</p>
      <p>Intervalos: {boleto.intervalos ? 'Sí' : 'No'}</p>
      <p>Fecha: {boleto.fecha}</p>
      <p>Costo: {boleto.costo}</p>
    </div>
  );
};

export default BoletosComponent;
