import React, { useState } from 'react';


const MaletasComponent = () => {
  const [hora1, setHora1] = useState('');
  const [hora2, setHora2] = useState('');

  const maletas = [
    { nombre: 'Maleta pequeña', costo: 10 },
    { nombre: 'Maleta mediana', costo: 20 },
    { nombre: 'Maleta grande', costo: 30 }
  ];

  const handleHora1Change = (event) => {
    setHora1(event.target.value);
  };

  const handleHora2Change = (event) => {
    setHora2(event.target.value);
  };

  return (
    <div>
      <h1>Capturar Horas</h1>
      <div>
        <label>Hora 1:</label>
        <input type="text" value={hora1} onChange={handleHora1Change} />
      </div>
      <div>
        <label>Hora 2:</label>
        <input type="text" value={hora2} onChange={handleHora2Change} />
      </div>
      <h2>Maletas para Hora 1:</h2>
      {maletas.map((maleta, index) => (
        <div key={index}>
          <p>Nombre: {maleta.nombre}</p>
          <p>Costo: {maleta.costo}</p>
        </div>
      ))}
      <h2>Maletas para Hora 2:</h2>
      {maletas.map((maleta, index) => (
        <div key={index}>
          <p>Nombre: {maleta.nombre}</p>
          <p>Costo: {maleta.costo}</p>
        </div>
      ))}
    </div>
  );
};

export default MaletasComponent;
