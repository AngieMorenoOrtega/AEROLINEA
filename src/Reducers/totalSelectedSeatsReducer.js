// Importa las dependencias necesarias

// Define el selector para obtener totalSelectedSeats
export const selectTotalSelectedSeats = (state) => state.totalSelectedSeats;

// Define el estado inicial
const initialState = [];

// Define el reducer
const totalSelectedSeatsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define los casos de acción según sea necesario
    default:
      return state;
  }
};

export default totalSelectedSeatsReducer;
