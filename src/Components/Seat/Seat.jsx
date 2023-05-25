import React, { useEffect, useState } from 'react';
import './Seat.css';
import axios from 'axios';
const URL_API_IDA = "http://localhost:3000/seats2";
const URL_API_REGRESO="http://localhost:3000/seats"


const SeatSelector = () => {
  const [outboundSeats, setOutboundSeats] = useState([]);
  const [returnSeats, setReturnSeats] = useState([]);
  const [selectedOutboundSeats, setSelectedOutboundSeats] = useState([]);
  const [selectedReturnSeats, setSelectedReturnSeats] = useState([]);
  const [paymentButtonEnabled, setPaymentButtonEnabled] = useState(false);

 
    axios
      .get(URL_API_IDA)
      .then(response => {
        setOutboundSeats(response.data);
        console.log(response.results);
      })
      .catch(error => {
        console.error(error);
      });


    axios
      .get(URL_API_REGRESO)
      .then(response => {
        setReturnSeats(response.data);
        console.log(response.results);
      })
      .catch(error => {
        console.error(error);
      });


  const handleSeatClick = (seatId, flightType) => {
    if (flightType === 'outbound') {
      const seatIndex = selectedOutboundSeats.indexOf(seatId);
      let updatedSelectedSeats = [...selectedOutboundSeats];

      if (seatIndex > -1) {
        updatedSelectedSeats.splice(seatIndex, 1);
      } else {
        updatedSelectedSeats.push(seatId);
      }

      setSelectedOutboundSeats(updatedSelectedSeats);
    } else if (flightType === 'return') {
      const seatIndex = selectedReturnSeats.indexOf(seatId);
      let updatedSelectedSeats = [...selectedReturnSeats];

      if (seatIndex > -1) {
        updatedSelectedSeats.splice(seatIndex, 1);
      } else {
        updatedSelectedSeats.push(seatId);
      }

      setSelectedReturnSeats(updatedSelectedSeats);
    }
  };

  useEffect(() => {
    const requiredSeats = 2; // Cantidad de asientos requeridos para vuelo de ida y regreso

    if (
      selectedOutboundSeats.length === requiredSeats &&
      selectedReturnSeats.length === requiredSeats
    ) {
      setPaymentButtonEnabled(true);
    } else {
      setPaymentButtonEnabled(false);
    }
  }, [selectedOutboundSeats, selectedReturnSeats]);

  return (
    <div>
      <h2>Vuelo de Ida</h2>
      {outboundSeats.map((seat) => (
        <Seat
          key={seat.id}
          seat={seat}
          onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
          selected={selectedOutboundSeats.includes(seat.id)}
        />
      ))}

      <h2>Vuelo de Regreso</h2>
      {returnSeats.map((seat) => (
        <Seat
          key={seat.id}
          seat={seat}
          onClick={(seatId) => handleSeatClick(seatId, 'return')}
          selected={selectedReturnSeats.includes(seat.id)}
        />
      ))}

      <button disabled={!paymentButtonEnabled}>Pagar con PayPal</button>
    </div>
  );
};

const Seat = ({ seat, onClick, selected }) => {
  let seatColor;

  switch (seat.status) {
    case 'available':
      seatColor = 'green';
      break;
    case 'occupied':
      seatColor = 'red';
      break;
    case 'selected':
      seatColor = 'blue';
      break;
    default:
      seatColor = 'gray';
      break;
  }

  if (selected) {
    seatColor = 'yellow';
  }

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: seatColor,
        margin: '5px',
      }}
      onClick={() => onClick(seat.id)}
    ></div> // Cierre de la etiqueta div
  );
};
