import React, { useState } from 'react';

const FormularioViaje = () => {
  const [viajeRedondo, setViajeRedondo] = useState(false);

  const handleSeleccionViaje = (esViajeRedondo) => {
    setViajeRedondo(esViajeRedondo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
    console.log('Viaje Redondo:', viajeRedondo);
  };

  return (
    <div>
      <h2>Formulario de Viaje</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Viaje:</label>
          <button onClick={() => handleSeleccionViaje(false)}>Sencillo</button>
          <button onClick={() => handleSeleccionViaje(true)}>Viaje Redondo</button>
        </div>
        {viajeRedondo && (
          <div>
            <label>Pregunta para Viaje Redondo:</label>
            <input type="text" placeholder="Respuesta para Viaje Redondo" />
          </div>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioViaje;
