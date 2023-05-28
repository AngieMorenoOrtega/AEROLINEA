// import React, { useEffect, useState } from 'react';
// import './Seat.scss';
// import { getabc1, getabc2, getdef1, getdef2 } from '../../services/getAsientos';
// import { numeros1 } from '../../Data/data';
// import { numeros2 } from '../../Data/data';
//  import "../../variables/variables.scss"

// const SeatSelector = () => {
//   const [showSeats1, setShowSeats1] = useState([]);
//   const [showSeats2, setShowSeats2] = useState([]);
//   const [showSeats3, setShowSeats3] = useState([]);
//   const [showSeats4, setShowSeats4] = useState([]);
//   const [selectedOutboundSeats, setSelectedOutboundSeats] = useState([]);
//   const [selectedReturnSeats, setSelectedReturnSeats] = useState([]);
//   const [paymentButtonEnabled, setPaymentButtonEnabled] = useState(false);
//   const [seatsData, setSeatsData] = useState([]);
//   const get1 = async () => {
//     const seatsGet1 = await getabc1('showSeats1');
//     setShowSeats1(seatsGet1);
//     setSeatsData(seatsGet1); 
//   }
//   const get2 = async () => {
//     const seatsGet2 = await getabc2('showSeats2');
//     setShowSeats2(seatsGet2);
//   }
//   const get3 = async () => {
//     const seatsGet3 = await getdef1('showSeats3');
//     setShowSeats3(seatsGet3);
//   }
//   const get4 = async () => {
//     const seatsGet4 = await getdef2('showSeats4');
//     setShowSeats4(seatsGet4);

//   }
//   useEffect(() => {
//     get1()
//     get2()
//     get3()
//     get4()

//   }, [])

//   const handleSeatClick = (seatId, flightType) => {
//     if (flightType === 'outbound') {
//       const seatIndex = selectedOutboundSeats.indexOf(seatId);
//       let updatedSelectedSeats = [...selectedOutboundSeats];

//       if (seatIndex > -1) {
//         updatedSelectedSeats.splice(seatIndex, 1);
//       } else {
//         updatedSelectedSeats.push(seatId);
//       }

//       setSelectedOutboundSeats(updatedSelectedSeats);
//     } else if (flightType === 'return') {
//       const seatIndex = selectedReturnSeats.indexOf(seatId);
//       let updatedSelectedSeats = [...selectedReturnSeats];

//       if (seatIndex > -1) {
//         updatedSelectedSeats.splice(seatIndex, 1);
//       } else {
//         updatedSelectedSeats.push(seatId);
//       }

//       setSelectedReturnSeats(updatedSelectedSeats);
//     }
//   };

// //   useEffect(() => {
// //     const requiredSeats = 2; // Cantidad de asientos requeridos para vuelo de ida y regreso

// //     if (
// //       selectedOutboundSeats.length === requiredSeats &&
// //       selectedReturnSeats.length === requiredSeats
// //     ) {
// //       setPaymentButtonEnabled(true);
// //     } else {
// //       setPaymentButtonEnabled(false);
// //     }
// //   }, [selectedOutboundSeats, selectedReturnSeats]);

//   return (
//     <div>
//       <h1>Selecciona tus asientos</h1>
//       <div className='letras'>
//         <button>A</button>
//         <button>B</button>
//         <button>C</button>
//         <div></div>
//         <button>D</button>
//         <button>E</button>
//         <button>F</button>
//       </div>
//       <div className='titulos'>
//         <h1>Salida rápida</h1>
//       </div>
//       <div className='principal'>
//         {showSeats1.map((seats, index) => (
//           <Seat
//             key={seats.id}
//             seat={seats}
//             onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
//             selected={selectedOutboundSeats.includes(seats.id)}
       
//           />
//         ))}
//         <div>
//           {numeros1.map((numbers) => (
//             <button>{numbers.nombre}</button>
//           ))}
//         </div>
//         {showSeats3.map((seats, index) => (
//           <Seat
//             key={seats.id}
//             seat={seats}
//             onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
//             selected={selectedOutboundSeats.includes(seats.id)}
       
//           />
//         ))}
//         <div className='titulos'>
//           <h1>Estandar</h1>
//         </div>
//         {showSeats2.map((seats, index) => (
//           <Seat
//             key={seats.id}
//             seat={seats}
//             onClick={(seatId) => handleSeatClick(seatId, 'return')}
//             selected={selectedOutboundSeats.includes(seats.id)}
     
//           />
//         ))}
//         <div>
//           {numeros2.map((numbers) => (
//             <button>{numbers.nombre}</button>
//           ))}
//         </div>
//         {showSeats4.map((seats, index) => (
//           <Seat
//             key={seats.id}
//             seat={seats}
//             onClick={(seatId) => handleSeatClick(seatId, 'return')}
//             selected={selectedOutboundSeats.includes(seats.id)}
       
//           />
//         ))}
//       </div>
//       <h2>Vuelo de Regreso</h2>
//       {/* {returnSeats.map((seat) => (
//         <Seat
//           key={seat.id}
//           seat={seat}
//           onClick={(seatId) => handleSeatClick(seatId, 'return')}
//           selected={selectedReturnSeats.includes(seat.id)}
//         />
//       ))} */}
//       {/* <button disabled={!paymentButtonEnabled}>Pagar con PayPal</button> */}
//     </div>
//   );
// };

// const Seat = ({ seat, onClick, selectedColor }) => {
//   let seatColor;

//   switch (seat.status) {
//     case 'available':
//       seatColor = 'gray';
//       break;
//     case 'occupied':
//       seatColor = 'gray';
//       break;
//     case 'selected':
//       seatColor = selectedColor;
//       break;
//     default:
//       seatColor = 'gray';
//       break;
//   }

//   return (
//     <div
//       className="seat"
//       style={{
//         width: '50px',
//         height: '50px',
//         backgroundColor: seatColor,
//         margin: '5px',
//       }}
//       onClick={() => onClick(seat.id)}
//     ></div>
//   );
// };

// export default SeatSelector;
import React, { useEffect, useState } from 'react';
import './Seat.scss';
import { getabc1, getabc2, getdef1, getdef2 } from '../../services/getAsientos';
import { numeros1 } from '../../Data/data';
import { numeros2 } from '../../Data/data';
import { selectedColor } from  "../../variables/variables.scss"
const SeatSelector = () => {
  const [showSeats1, setShowSeats1] = useState([]);
  const [showSeats2, setShowSeats2] = useState([]);
  const [showSeats3, setShowSeats3] = useState([]);
  const [showSeats4, setShowSeats4] = useState([]);
  const [selectedOutboundSeats, setSelectedOutboundSeats] = useState([]);
  const [selectedReturnSeats, setSelectedReturnSeats] = useState([]);
  const [paymentButtonEnabled, setPaymentButtonEnabled] = useState(false);
  const [seatsData, setSeatsData] = useState([]);
 

  const get1 = async () => {
    const seatsGet1 = await getabc1('showSeats1');
    setShowSeats1(seatsGet1);
    setSeatsData(seatsGet1); 
  }

  const get2 = async () => {
    const seatsGet2 = await getabc2('showSeats2');
    setShowSeats2(seatsGet2);
  }

  const get3 = async () => {
    const seatsGet3 = await getdef1('showSeats3');
    setShowSeats3(seatsGet3);
  }

  const get4 = async () => {
    const seatsGet4 = await getdef2('showSeats4');
    setShowSeats4(seatsGet4);
  }

  useEffect(() => {
    get1();
    get2();
    get3();
    get4();
  }, []);
  const handleSeatClick = (seatId, flightType) => {
    if (flightType === 'outbound') {
      const seatIndex = selectedOutboundSeats.indexOf(seatId);
      let updatedSelectedSeats = [...selectedOutboundSeats];
  
      // Verificar si el asiento está ocupado y evitar la selección
      const isSeatOccupied = showSeats1.find(seat => seat.id === seatId)?.status === 'occupied';
      if (isSeatOccupied) {
        return; // No se realiza ninguna acción si el asiento está ocupado
      }
  
      if (seatIndex > -1) {
        updatedSelectedSeats.splice(seatIndex, 1);
      } else {
        updatedSelectedSeats.push(seatId);
      }
  
      setSelectedOutboundSeats(updatedSelectedSeats);
    } else if (flightType === 'return') {
      const seatIndex = selectedReturnSeats.indexOf(seatId);
      let updatedSelectedSeats = [...selectedReturnSeats];
  
      // Verificar si el asiento está ocupado y evitar la selección
      const isSeatOccupied = showSeats1.find(seat => seat.id === seatId)?.status === 'occupied';
      if (isSeatOccupied) {
        return; // No se realiza ninguna acción si el asiento está ocupado
      }
  
      if (seatIndex > -1) {
        updatedSelectedSeats.splice(seatIndex, 1);
      } else {
        updatedSelectedSeats.push(seatId);
      }
  
      setSelectedReturnSeats(updatedSelectedSeats);
    }
  };
  
  return (
    <div>
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
      <div className='segundo'>
      <div >
        {showSeats1.map((seats, index) => (
          <Seat
            key={seats.id}
            seat={seats}
            onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
            className="principal"
            selected={selectedOutboundSeats.includes(seats.id)}
            selectedOutboundSeats={selectedOutboundSeats}
            selectedReturnSeats={selectedReturnSeats}
            selectedColor="#9D257E" 
          />
        ))}
        <div className='numeros'>
          {numeros1.map((numbers) => (
            <button>{numbers.nombre}</button>
          ))}
        </div>
        {showSeats3.map((seats, index) => (
          <Seat
            key={seats.id}
            seat={seats}
            onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
            className="principal"
            selected={selectedOutboundSeats.includes(seats.id)}
            selectedOutboundSeats={selectedOutboundSeats}
            selectedReturnSeats={selectedReturnSeats}
            selectedColor="#9D257E"
          />
        ))}
        </div>
        <div className='titulos'>
          <h1>Estandar</h1>
        </div>
        <div className="segundo">
        {showSeats2.map((seats, index) => (
          <Seat
            key={seats.id}
            seat={seats}
            onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
            className="principal"
            selected={selectedOutboundSeats.includes(seats.id)}
            selectedOutboundSeats={selectedOutboundSeats}
            selectedReturnSeats={selectedReturnSeats}
            selectedColor="#9D257E"
          
          />
        ))}
        <div>
          {numeros2.map((numbers) => (
            <button>{numbers.nombre}</button>
          ))}
        </div>
        {showSeats4.map((seats, index) => (
          <div className="principal">
              <Seat
            key={seats.id}
            seat={seats}            onClick={(seatId) => handleSeatClick(seatId, 'outbound')}
           
            selected={selectedOutboundSeats.includes(seats.id)}
            selectedOutboundSeats={selectedOutboundSeats}
            selectedReturnSeats={selectedReturnSeats}
            selectedColor="#9D257E"
          />
          </div>
        
        ))}
      </div>
      </div>
      <h2>Vuelo de Regreso</h2>
    </div>
  );
};

  // if (selectedOutboundSeats.includes(seat.id) || selectedReturnSeats.includes(seat.id)) {
  //  seatColor=selectedColor 
  // } else {
  //   switch (seat.status) {
  //     case 'available':
  //       seatColor = 'gray';
  //       break;
  //     case 'occupied':
  //       seatColor = 'gray';
  //       break;
  //     default:
  //       seatColor = 'gray';
  //       break;
  //   }
  // }
  const Seat = ({ seat, onClick, selectedColor, selectedOutboundSeats, selectedReturnSeats }) => {
    let seatStyle = {
      width: '50px',
      height: '50px',
      backgroundColor: 'gray',
      margin: '5px',
      borderRadius: '5px',
    };
  
    if (selectedOutboundSeats.includes(seat.id) || selectedReturnSeats.includes(seat.id)) {
      seatStyle.backgroundColor = selectedColor; // Cambia el fondo al color seleccionado
    } else if (seat.status === 'available') {
      seatStyle.backgroundColor = 'white'; // Cambia el fondo a blanco para asientos disponibles
      seatStyle.border = `2px solid ${selectedColor}`; // Aplica el borde con el color seleccionado
    }
  
    return (
      <div  className="seat">
      <div
        className="seat container"
        style={seatStyle}
        onClick={() => onClick(seat.id)}
      ></div>        
      </div>

    );
  };
  

export default SeatSelector;

