// store.js
import { configureStore } from '@reduxjs/toolkit';
import totalSelectedSeatsReducer from './reducers/totalSelectedSeatsReducer.js'; // Importa tu archivo de reducer

const store = configureStore({
  reducer: {
    totalSelectedSeats: totalSelectedSeatsReducer, // Agrega tu reducer al objeto reducer
  },
});

export default store;
