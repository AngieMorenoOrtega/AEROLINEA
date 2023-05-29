
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import './Seat.scss';
import { getabc1, getabc2, getdef1, getdef2, getabc1r, getabc2r, getdef1r, getdef2r } from '../../services/getAsientos';
import { numeros1 } from '../../Data/data';
import { numeros2 } from '../../Data/data';
import { boleto } from "../../Data/data.js"


const SeatSelector = () => {

  const cantidadPasajeros = boleto.pasajeros
  const [showSeats1, setShowSeats1] = useState([]);
  const [showSeats2, setShowSeats2] = useState([]);
  const [showSeats3, setShowSeats3] = useState([]);
  const [showSeats4, setShowSeats4] = useState([]);
  const [showSeats5, setShowSeats5] = useState([]);
  const [showSeats6, setShowSeats6] = useState([]);
  const [showSeats7, setShowSeats7] = useState([]);
  const [showSeats8, setShowSeats8] = useState([]);
  const [selectedSeats1, setSelectedSeats1] = useState([]); // Selecciones de asientos del array 1
  const [selectedSeats2, setSelectedSeats2] = useState([]); // Selecciones de asientos del array 2
  const [selectedSeats3, setSelectedSeats3] = useState([]); // Selecciones de asientos del array 3
  const [selectedSeats4, setSelectedSeats4] = useState([]); // Selecciones de asientos del array 4
  const [selectedSeats5, setSelectedSeats5] = useState([]); // Selecciones de asientos del array 5
  const [selectedSeats6, setSelectedSeats6] = useState([]); // Selecciones de asientos del array 6
  const [selectedSeats7, setSelectedSeats7] = useState([]); // Selecciones de asientos del array 7
  const [selectedSeats8, setSelectedSeats8] = useState([]); // Selecciones de asientos del array 8
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
    setSeatsData(seatsGet2);
  }

  const get3 = async () => {
    const seatsGet3 = await getdef1('showSeats3');
    setShowSeats3(seatsGet3);
  }

  const get4 = async () => {
    const seatsGet4 = await getdef2('showSeats4');
    setShowSeats4(seatsGet4);
  }
  const get5 = async () => {
    const seatsGet5 = await getabc1r('showSeats5');
    setShowSeats5(seatsGet5);
  };

  const get6 = async () => {
    const seatsGet6 = await getabc2r('showSeats6');
    setShowSeats6(seatsGet6);
  };

  const get7 = async () => {
    const seatsGet7 = await getdef1r('showSeats7');
    setShowSeats7(seatsGet7);
  };

  const get8 = async () => {
    const seatsGet8 = await getdef2r('showSeats8');
    setShowSeats8(seatsGet8);
  };
  useEffect(() => {
    get1();
    get2();
    get3();
    get4();
    get5(); // Obtener los asientos de regreso
    get6();
    get7();
    get8();
  }, []);
  //   const handleSeatClick = (seatId, flightType, cantidadPasajeros) => {
  //     let selectedSeats;
  //     let setSelectedSeats;
  //     console.log(cantidadPasajeros);

  //     switch (flightType) {
  //       case 'outbound':
  //         selectedSeats = selectedSeats1;
  //         setSelectedSeats = setSelectedSeats1;
  //         break;
  //       case 'outbound2':
  //         selectedSeats = selectedSeats2;
  //         setSelectedSeats = setSelectedSeats2;
  //         break;
  //       case 'outbound3':
  //         selectedSeats = selectedSeats3;
  //         setSelectedSeats = setSelectedSeats3;
  //         break;
  //       case 'outbound4':
  //         selectedSeats = selectedSeats4;
  //         setSelectedSeats = setSelectedSeats4;
  //         break;
  //       case 'return':
  //         selectedSeats = selectedSeats5; // Utilizar las variables de estado correspondientes a los asientos de regreso
  //         setSelectedSeats = setSelectedSeats5;
  //         break;
  //       case 'return2':
  //         selectedSeats = selectedSeats6;
  //         setSelectedSeats = setSelectedSeats6;
  //         break;
  //       case 'return3':
  //         selectedSeats = selectedSeats7;
  //         setSelectedSeats = setSelectedSeats7;
  //         break;
  //       case 'return4':
  //         selectedSeats = selectedSeats8;
  //         setSelectedSeats = setSelectedSeats8;
  //         break;
  //       default:
  //         selectedSeats = [];
  //         setSelectedSeats = () => {};
  //     }
  //     const isSeatOccupied = seatsData.find((seat) => seat.id === seatId)?.status === 'occupied';

  //     if (isSeatOccupied) {
  //       return;
  //     }

  //      const totalSelectedSeats1 = [
  //       ...selectedSeats1,
  //       ...selectedSeats2,
  //       ...selectedSeats3,
  //       ...selectedSeats4,
  //     ];
  //     const totalSelectedSeats2 = [
  //       ...selectedSeats5,
  //       ...selectedSeats6,
  //       ...selectedSeats7,
  //       ...selectedSeats8,
  //     ];


  //     if (selectedSeats.includes(seatId)) {
  //       const updatedSelectedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seatId);
  //       setSelectedSeats(updatedSelectedSeats);
  //       console.log(updatedSelectedSeats);
  //     } else {
  //       if (totalSelectedSeats.length === cantidadPasajeros) {
  //         Swal.fire({
  //           title: "¡Todos los asientos seleccionados!",
  //           text: "Has seleccionado todos los asientos permitidos.",
  //           icon: "success",
  //           confirmButtonText: "Aceptar"
  //         });
  //         return;
  //       }

  //       const updatedSelectedSeats = [...selectedSeats, seatId];
  //       setSelectedSeats(updatedSelectedSeats);
  //     }
  //   };


  //   useEffect(() => {
  //     const contenedorAsientosRegreso = document.getElementById('contenedor-asientos-regreso');
  //     if (contenedorAsientosRegreso) {
  //       // El elemento existe, puedes acceder a él y realizar las modificaciones necesarias
  //       contenedorAsientosRegreso.innerHTML = '¡Asientos de regreso disponibles!';
  //     }
  //   }, []);


  // // Verifica el valor de la propiedad 'vueloregreso'
  // if (boleto.vueloregreso) {
  //   // Si el valor es true, muestra el contenedor de asientos de regreso
  //   contenedorAsientosRegreso.style.display = 'block';
  // } else {
  //   // Si el valor es false, oculta el contenedor de asientos de regreso
  //   contenedorAsientosRegreso.style.display = 'none';
  // }
  const handleSeatClick = (seatId, flightType, cantidadPasajeros) => {
    let selectedSeats;
    let setSelectedSeats;
    let totalSelectedSeats;

    switch (flightType) {
      case 'outbound':
      case 'outbound2':
      case 'outbound3':
      case 'outbound4':
        selectedSeats = getSelectedSeatsByFlightType(flightType);
        setSelectedSeats = setSelectedSeatsByFlightType(flightType);
        totalSelectedSeats = calculateTotalSelectedSeatsByFlightType('outbound');
        console.log(selectedSeats);
        break;
      case 'return':
      case 'return2':
      case 'return3':
      case 'return4':
        selectedSeats = getSelectedSeatsByFlightType(flightType);
        setSelectedSeats = setSelectedSeatsByFlightType(flightType);
        totalSelectedSeats = calculateTotalSelectedSeatsByFlightType('return');
        break;
      default:
        selectedSeats = [];
        setSelectedSeats = () => { };
        totalSelectedSeats = [];
    }

    const isSeatOccupied = seatsData.find((seat) => seat.id === seatId)?.status === 'occupied';

    if (isSeatOccupied) {
      return;
    }

    if (selectedSeats.includes(seatId)) {
      const updatedSelectedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seatId);
      setSelectedSeats(updatedSelectedSeats);
      console.log(updatedSelectedSeats);
    } else {
      if (totalSelectedSeats.length === cantidadPasajeros) {
        Swal.fire({
          title: '¡Todos los asientos seleccionados!',
          text: 'Has seleccionado todos los asientos permitidos.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        return;
      }

      const updatedSelectedSeats = [...selectedSeats, seatId];
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  const getSelectedSeatsByFlightType = (flightType) => {
    switch (flightType) {
      case 'outbound':
        return selectedSeats1;
      case 'outbound2':
        return selectedSeats2;
      case 'outbound3':
        return selectedSeats3;
      case 'outbound4':
        return selectedSeats4;
      case 'return':
        return selectedSeats5;
      case 'return2':
        return selectedSeats6;
      case 'return3':
        return selectedSeats7;
      case 'return4':
        return selectedSeats8;
      default:
        return [];
    }
  };

  const setSelectedSeatsByFlightType = (flightType) => {
    switch (flightType) {
      case 'outbound':
        return setSelectedSeats1;
      case 'outbound2':
        return setSelectedSeats2;
      case 'outbound3':
        return setSelectedSeats3;
      case 'outbound4':
        return setSelectedSeats4;
      case 'return':
        return setSelectedSeats5;
      case 'return2':
        return setSelectedSeats6;
      case 'return3':
        return setSelectedSeats7;
      case 'return4':
        return setSelectedSeats8;
      default:
        return () => { };
    }
  };

  const calculateTotalSelectedSeatsByFlightType = (flightType) => {
    switch (flightType) {
      case 'outbound':
        return [...selectedSeats1, ...selectedSeats2, ...selectedSeats3, ...selectedSeats4];
      case 'return':
        return [...selectedSeats5, ...selectedSeats6, ...selectedSeats7, ...selectedSeats8];
      default:
        return [];
    }
  };


  return (
    <div className='allcomponent'>
      <section className='all'><div>
          <h1>Vuelo de Salida</h1>
          <h4>Fecha</h4>
          <h5>D a H</h5>
      </div>
      
        <button>
          Cambiar vuelo
        </button>
      </section>
      <h1 id="select">Selecciona tus asientos</h1>
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
      <div >
        <div className='segundo'>
          <div className='primero'>
            {showSeats1.map((seats, index) => (
              <Seat
                key={seats.id}
                seat={seats}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound', cantidadPasajeros)}
                selected={selectedSeats1.includes(seats.id)}
                selectedOutboundSeats={selectedSeats1}
                selectedReturnSeats={selectedSeats1}
                selectedColor="#9D257E"
                disabled

              />
            ))}
          </div>

          <div className='numeros'>
            {numeros1.map((numbers) => (
              <button>{numbers.nombre}</button>
            ))}
          </div>
          <div className='primero'>
            {showSeats3.map((seats, index) => (
              <Seat
                key={seats.id}
                seat={seats}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound3', cantidadPasajeros)}

                selected={selectedSeats3.includes(seats.id)}
                selectedOutboundSeats={selectedSeats3}
                selectedReturnSeats={selectedSeats3}
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
            {showSeats2.map((seats, index) => (
              <Seat
                key={seats.id}
                seat={seats}
                onClick={(seatId) => handleSeatClick(seatId, 'outbound2', cantidadPasajeros)}
                className="principal"
                selected={selectedSeats2.includes(seats.id)}
                selectedOutboundSeats={selectedSeats2}
                selectedReturnSeats={selectedSeats2}
                selectedColor="#9D257E"
                disabled

              />
            ))}
          </div>

          <div className='numeros'>
            {numeros2.map((numbers) => (
              <button>{numbers.nombre}</button>
            ))}
          </div>


          <div className="primero">
            {showSeats4.map((seats, index) => (<Seat
              key={seats.id}
              seat={seats} onClick={(seatId) => handleSeatClick(seatId, 'outbound4', cantidadPasajeros)}
              selected={selectedSeats4.includes(seats.id)}
              selectedOutboundSeats={selectedSeats4}
              selectedReturnSeats={selectedSeats4}
              selectedColor="#9D257E"
            />))}
          </div>


        </div>
      </div>
      <div id="contenedor-asientos-regreso">


        <h2 >Vuelo de Regreso</h2><h1 id="select">Selecciona tus asientos</h1>
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
        <div >
          <div className='segundo'>
            <div className='primero'>
              {showSeats5.map((seats, index) => (
                <Seat
                  key={seats.id}
                  seat={seats}
                  onClick={(seatId) => handleSeatClick(seatId, 'return', cantidadPasajeros)}
                  selected={selectedSeats1.includes(seats.id)}
                  selectedOutboundSeats={selectedSeats1}
                  selectedReturnSeats={selectedSeats1}
                  selectedColor="#9D257E"
                  disabled

                />
              ))}
            </div>

            <div className='numeros'>
              {numeros1.map((numbers) => (
                <button>{numbers.nombre}</button>
              ))}
            </div>
            <div className='primero'>
              {showSeats7.map((seats, index) => (
                <Seat
                  key={seats.id}
                  seat={seats}
                  onClick={(seatId) => handleSeatClick(seatId, 'return3', cantidadPasajeros)}

                  selected={selectedSeats3.includes(seats.id)}
                  selectedOutboundSeats={selectedSeats3}
                  selectedReturnSeats={selectedSeats3}
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
              {showSeats6.map((seats, index) => (
                <Seat
                  key={seats.id}
                  seat={seats}
                  onClick={(seatId) => handleSeatClick(seatId, 'return2', cantidadPasajeros)}
                  className="principal"
                  selected={selectedSeats2.includes(seats.id)}
                  selectedOutboundSeats={selectedSeats2}
                  selectedReturnSeats={selectedSeats2}
                  selectedColor="#9D257E"
                  disabled

                />
              ))}
            </div>

            <div className='numeros'>
              {numeros2.map((numbers) => (
                <button>{numbers.nombre}</button>
              ))}
            </div>


            <div className="primero">
              {showSeats8.map((seats, index) => (<Seat
                key={seats.id}
                seat={seats} onClick={(seatId) => handleSeatClick(seatId, 'return4')}
                selected={selectedSeats4.includes(seats.id)}
                selectedOutboundSeats={selectedSeats4}
                selectedReturnSeats={selectedSeats4}
                selectedColor="#9D257E"
              />))}
            </div>


          </div>
        </div> </div>
    </div>
  );
};


const Seat = ({ seat, onClick, selectedColor, selectedOutboundSeats, selectedReturnSeats }) => {
  let seatStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'gray',
    borderRadius: '5px',
  };

  if (selectedOutboundSeats.includes(seat.id) || selectedReturnSeats.includes(seat.id)) {
    seatStyle.backgroundColor = selectedColor; // Cambia el fondo al color seleccionado
  } else if (seat.status === 'available') {
    // let i=0;
    // const r=cantidadPasajeros;

    // for (i=0;i<r; i++)


    seatStyle.backgroundColor = 'white'; // Cambia el fondo a blanco para asientos disponibles
    seatStyle.border = `2px solid ${selectedColor}`;
    // Aplica el borde con el color seleccionado
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


export default SeatSelector;

