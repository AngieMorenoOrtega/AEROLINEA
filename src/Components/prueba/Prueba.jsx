import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

const Prueba = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Mostrar / Ocultar</button>
        {isVisible && <div>¡Objeto visible!</div>}
      </div>
    </div>
  );
};

export default Prueba;
