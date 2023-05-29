import React, { useState, useEffect } from "react";
import "./Formulario.scss";
import { get } from "../../services/getdetails";
const Formulario = () => {
  const [destino, setDestino] = useState("");
  const [fechaIda, setFechaIda] = useState("");
  const [fechaVuelta, setFechaVuelta] = useState("");
  const [adultos, setAdultos] = useState(1);
  const [ninos, setNinos] = useState(0);
  const [bebes, setBebes] = useState(0);

  const handleAgregar = (tipo) => {
    switch (tipo) {
      case "adultos":
        setAdultos(adultos + 1);
        break;
      case "ninos":
        setNinos(ninos + 1);
        break;
      case "bebes":
        setBebes(bebes + 1);
        break;
      default:
        break;
    }
  };

  const handleEliminar = (tipo) => {
    switch (tipo) {
      case "adultos":
        if (adultos > 1) {
          setAdultos(adultos - 1);
        }
        break;
      case "ninos":
        if (ninos > 0) {
          setNinos(ninos - 1);
        }
        break;
      case "bebes":
        if (bebes > 0) {
          setBebes(bebes - 1);
        }
        break;
      default:
        break;
    }
  };
  const [viajeRedondo, setViajeRedondo] = useState(false);

  const handleSeleccionViaje = (esViajeRedondo) => {
    setViajeRedondo(esViajeRedondo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos enviados, como enviarlos a un servidor
    console.log("Destino:", destino);
    console.log("Fecha de Ida:", fechaIda);
    console.log("Fecha de Vuelta:", fechaVuelta);
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
    console.log("Adultos:", adultos);
    console.log("Niños:", ninos);
    console.log("Bebés:", bebes);
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
    console.log("Viaje Redondo:", viajeRedondo);
  };
  const [tech, handletech] = useState([]);
  const getLinks = async () => {
    const getlink = await get("destinos");
    handletech(getlink);
  };

  useEffect(() => {
    getLinks();
    console.log(tech);
  }, []);
  return (
    <nav className="navbar">
      <form onSubmit={handleSubmit}>
        <div className="navbar__opciones noborder">
          <button onClick={() => handleSeleccionViaje(true)}
          className={viajeRedondo ? "selected" : ""}
         >
            Viaje Redondo
          </button>
          <button onClick={() => handleSeleccionViaje(false)}
           className={!viajeRedondo ? "selected" : ""}
      >Sencillo</button>
        </div>
        <div className="navbar__origen noborder">
          <h4>Bogota</h4>
          <h6>Origen</h6>
        </div>
        <div className="navbar__destino">
          <label htmlFor="destino">---</label>
          <select
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
          >
            <option value="">Seleccione un destino</option>
            {tech.map((opcion) => (
              <option key={opcion.id} value={opcion.sitio}>
                {opcion.sitio}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fechaIda">Fecha de Ida:</label>
          <input
            type="date"
            id="fechaIda"
            value={fechaIda}
            onChange={(e) => setFechaIda(e.target.value)}
            required
          />
        </div>
        {viajeRedondo && (
          <div>
            <label htmlFor="fechaVuelta">Fecha de Vuelta:</label>
            <input
              type="date"
              id="fechaVuelta"
              value={fechaVuelta}
              onChange={(e) => setFechaVuelta(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Adultos:</label>
          <div>
            <button onClick={() => handleEliminar("adultos")}>-</button>
            <span>{adultos}</span>
            <button onClick={() => handleAgregar("adultos")}>+</button>
          </div>
        </div>
        <div>
          <label>Niños:</label>
          <div>
            <button onClick={() => handleEliminar("ninos")}>-</button>
            <span>{ninos}</span>
            <button onClick={() => handleAgregar("ninos")}>+</button>
          </div>
        </div>
        <div>
          <label>Bebés:</label>
          <div>
            <button onClick={() => handleEliminar("bebes")}>-</button>
            <span>{bebes}</span>
            <button onClick={() => handleAgregar("bebes")}>+</button>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </nav>
  );
};

export default Formulario;
