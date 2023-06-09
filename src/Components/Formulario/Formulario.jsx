import React, { useState, useEffect } from "react";
import "./Formulario.scss";
import { get } from "../../services/getdetails";
import { SlArrowDown } from "react-icons/sl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import { values } from "lodash";

const Formulario = () => {
  const [tech, handletech] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getLinks();
  }, []);
 
    const handleSubmit = (values) => {
      setData([...data, values]);
    };
    console.log();
  const getLinks = async () => {
    const getlink = await get("destinos");
    const datosget=getlink.data
 
    handletech(getlink);
     const validarDestino = getlink.filter(item => 
   item.sitio === data.destino
     )   
     sessionStorage.setItem('idVuelo', JSON.stringify(validarDestino));
     console.log(validarDestino);
  }; 
  

 
  const handleAgregar = (tipo, setFieldValue, values) => {
    switch (tipo) {
      case "adultos":
        setFieldValue("adultos", values.adultos + 1);
        break;
      case "ninos":
        setFieldValue("ninos", values.ninos + 1);
        break;
      case "bebes":
        setFieldValue("bebes", values.bebes + 1);
        break;
      default:
        break;
    }
  };

  const handleEliminar = (tipo, setFieldValue, values) => {
    switch (tipo) {
      case "adultos":
        if (values.adultos > 1) {
          setFieldValue("adultos", values.adultos - 1);
        }
        break;
      case "ninos":
        if (values.ninos > 0) {
          setFieldValue("ninos", values.ninos - 1);
        }
        break;
      case "bebes":
        if (values.bebes > 0) {
          setFieldValue("bebes", values.bebes - 1);
        }
        break;
      default:
        break;
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
 

  return (
    <nav className="navbar">
      <Formik
        initialValues={{
          destino: "",
          fechaIda: "",
          fechaVuelta: "",
          adultos: 1,
          ninos: 0,
          bebes: 0,
          viajeRedondo: false,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="navbar">
            <div className="navbar__opciones noborder">
              <button
                type="button"
                onClick={() => setFieldValue("viajeRedondo", true)}
                className={values.viajeRedondo ? "selected" : ""}
              >
                Viaje Redondo
              </button>
              <button
                type="button"
                onClick={() => setFieldValue("viajeRedondo", false)}
                className={!values.viajeRedondo ? "selected" : ""}
              >
                Sencillo
              </button>
            </div>
            <div className="navbar__origen noborder">
              <h4>Bogota</h4>
              <h6>Origen</h6>
            </div>
            <div className="navbar__destino">
              <label htmlFor="destino">---</label>
              <Field
                as="select"
                id="destino"
                name="destino"
                required
              >
                <option value="">Seleccione un destino</option>
                {tech.map((opcion) => (
                  <option key={opcion.id} value={opcion.sitio}>
                    {opcion.sitio}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="destino" component="div" />
            </div>
            <div className="navbar__salida">
              <label htmlFor="fechaIda">Salida</label>
              <Field
                type="date"
                id="fechaIda"
                name="fechaIda"
                required
              />
              <ErrorMessage name="fechaIda" component="div" />
            </div>
            {values.viajeRedondo && (
              <div className="navbar__regreso">
                <label htmlFor="fechaVuelta">Fecha de Vuelta:</label>
                <Field
                  type="date"
                  id="fechaVuelta"
                  name="fechaVuelta"
                  required
                />
                <ErrorMessage name="fechaVuelta" component="div" />
              </div>
            )}
            <div>
              <div className="navbar__container">
                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                  <SlArrowDown />
                </button>
                <h5>Pasajeros</h5>
                <h6>1 Adulto</h6>
              </div>
              {isVisible && (
                <div className="navbar__pasajeros">
                  <div>
                    <label>Adultos:</label>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleEliminar("adultos", setFieldValue, values)}
                      >
                        -
                      </button>
                      <span>{values.adultos}</span>
                      <button
                        type="button"
                        onClick={() => handleAgregar("adultos", setFieldValue, values)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <label>Niños:</label>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleEliminar("ninos", setFieldValue, values)}
                      >
                        -
                      </button>
                      <span>{values.ninos}</span>
                      <button
                        type="button"
                        onClick={() => handleAgregar("ninos", setFieldValue, values)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <label>Bebés:</label>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleEliminar("bebes", setFieldValue, values)}
                      >
                        -
                      </button>
                      <span>{values.bebes}</span>
                      <button
                        type="button"
                        onClick={() => handleAgregar("bebes", setFieldValue, values)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="navbar__enviar">
            <button type="submit"
            onClick={handleClick}
            >Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </nav>
  );
};

export default Formulario;