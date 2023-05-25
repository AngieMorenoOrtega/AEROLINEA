import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
 import './Formulario.scss';

// const validationSchema = Yup.object().shape({
//   origen: Yup.string()
//     .required('El nombre de ciudad es obligatorio'),
//   age: Yup.number()
//     .positive('La edad debe ser un número positivo')
//     .integer('La edad debe ser un número entero')
//     .required('La edad es obligatoria'),
//   email: Yup.string()
//     .email('El correo debe ser válido')
//     .required('El correo es obligatorio'),
//   password: Yup.string()
//     .min(8, 'La contraseña debe tener al menos 8 caracteres')
//     .required('La contraseña es obligatoria'),
//   phone: Yup.string()
//     .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
//     .min(10, 'El teléfono debe tener al menos 10 caracteres')
//     .max(10, 'El teléfono no debe tener más de 10 caracteres')
//     .required('El teléfono es obligatorio'),
//   address: Yup.string(),
// });



const FormularioViaje = () => {
  const [tipoViaje, setTipoViaje] = useState('');

  const handleViajeRedondo = () => {
    setTipoViaje('redondo');
  };

  const handleViajeSencillo = () => {
    setTipoViaje('sencillo');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción con el tipo de viaje seleccionado
    console.log('Tipo de Viaje:', tipoViaje);
  };

  return (
    <div className='traveloption'>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleViajeRedondo}>Viaje Redondo</button>
        <button type="button" onClick={handleViajeSencillo}>Viaje Sencillo</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioViaje;
