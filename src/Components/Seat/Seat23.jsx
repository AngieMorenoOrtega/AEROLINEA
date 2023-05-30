import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import './Seat.scss';
import { getabc1, getabc2, getdef1, getdef2 } from '../../services/getAsientos';
import { numeros1, numeros2 } from '../../Data/data';
import { boleto } from "../../Data/data.js";
import { useNavigate } from 'react-router-dom';

const Seats = () => {
//   const navigate = useNavigate();
//   const [showComponent, setShowComponent] = useState(false);

// const handleClickReturn = () => {
//   if (vueloRetorno===true) {
//     navigate('/otra-ruta');
//   } else {
//     setShowComponent(true);
//   }
// }

// return (
//   <div>
//     <button onClick={handleClick}>Mostrar componente</button>
//     {showComponent && <OtroComponente />}
//   </div>
// );
  const vueloRetorno=boleto.vueloregreso;
  const cantidadPasajeros = boleto.pasajeros;
  const [showSeats1, setShowSeats1] = useState([]);
  const [showSeats2, setShowSeats2] = useState([]);
  const [showSeats3, setShowSeats3] = useState([]);
  const [showSeats4, setShowSeats4] = useState([]);
  const [selectedSeats1, setSelectedSeats1] = useState([]);
  const [selectedSeats2, setSelectedSeats2] = useState([]);
  const [selectedSeats3, setSelectedSeats3] = useState([]);
  const [selectedSeats4, setSelectedSeats4] = useState([]);

  
  useEffect(() => {
    const getSeats = async (getFunction, setShowFunction) => {
      const seats = await getFunction();
      setShowFunction(seats);
    };

    getSeats(getabc1, setShowSeats1);
    getSeats(getabc2, setShowSeats2);
    getSeats(getdef1, setShowSeats3);
    getSeats(getdef2, setShowSeats4);
  }, []);

  const handleSeatClick = (seatId, section) => {
    let selectedSeats, setSelectedSeats;
  
    if (section === 'outbound') {
      selectedSeats = selectedSeats1;
      setSelectedSeats = setSelectedSeats1;
    } else if (section === 'outbound2') {
      selectedSeats = selectedSeats2;
      setSelectedSeats = setSelectedSeats2;
    } else if (section === 'outbound3') {
      selectedSeats = selectedSeats3;
      setSelectedSeats = setSelectedSeats3;
    } else if (section === 'outbound4') {
      selectedSeats = selectedSeats4;
      setSelectedSeats = setSelectedSeats4;
    }
  
    const isSeatOccupied = selectedSeats.includes(seatId);
  
    if (isSeatOccupied) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      const totalSelectedSeats =
        selectedSeats1.length +
        selectedSeats2.length +
        selectedSeats3.length +
        selectedSeats4.length;
  
      if (totalSelectedSeats < cantidadPasajeros) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Cannot select more seats than the number of passengers',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  };
  
  

  return (
    <div>
       <section className='all'><div>
          <h1>Vuelo de Salida</h1>
          <h4>Fecha</h4>
          <h5>D a H</h5>
      </div>
      
        <button>
          Cambiar vuelo
        </button>
      </section>
      <h1>Selecciona tus asientos</h1>
      <div className='letras'>
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <div></div>
        <button>D</button>
        <button>E</button>
        <button>F</button>
      </div>
      <div className='titulos'>
        <h1>Salida rápida</h1>
      </div>
      <div>
        <div className='segundo'>
          <div className='primero'>
            {showSeats1.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
                selectedSeats={selectedSeats1}
                selectedColor="#9D257E"
              />
            ))}
          </div>

          <div className='numeros'>
            {numeros1.map((number) => (
              <button key={number.id}>{number.nombre}</button>
            ))}
          </div>
          <div className='primero'>
            {showSeats3.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound3')}
                selectedSeats={selectedSeats3}
                selectedColor="#9D257E"
              />
            ))}
          </div>
        </div>
        <div className='titulos'>
          <h1>Estandar</h1>
        </div>
        <div className="segundo">
          <div className='primero'>
            {showSeats2.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound2')}
                className="principal"
                selectedSeats={selectedSeats2}
                selectedColor="#9D257E"
              />
            ))}
          </div>
          <div className='numeros'>
            {numeros2.map((number) => (
              <button key={number.id}>{number.nombre}</button>
            ))}
          </div>
          <div className="primero">
            {showSeats4.map((seat) => (
              <Seat
                key={seat.id}
                seat={seat}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound4')}
                selectedSeats={selectedSeats4}
                selectedColor="#9D257E"
              />
            ))}
          </div>
        </div>
      </div>
   
    </div>
  );
};

const Seat = ({ seat, onClick, selectedSeats, selectedColor }) => {
  let seatStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'gray',
    borderRadius: '5px',
  };

  if (selectedSeats.includes(seat.id)) {
    seatStyle.backgroundColor = selectedColor; // Change the background color to the selected color
  } else if (seat.status === 'available') {
    seatStyle.backgroundColor = 'white'; // Change the background color to white for available seats
    seatStyle.border = `2px solid ${selectedColor}`; // Apply the border with the selected color
  }

  return (
    <div className="seat">
      <div
        className="seat container"
        style={seatStyle}
        onClick={() => onClick(seat.id)}
      ></div>
    </div>
  );
};

export default Seats;
