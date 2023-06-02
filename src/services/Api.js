import axios from 'axios';
//configuración inicial del axios

const API_BASE_URL = ' https://chartreuse-pewter-bumper.glitch.me/';

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

