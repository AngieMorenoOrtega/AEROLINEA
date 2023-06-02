import axios from 'axios';
//configuración inicial del axios

<<<<<<< HEAD
const API_BASE_URL = 'https://chartreuse-pewter-bumper.glitch.me/';
=======
const API_BASE_URL = ' https://chartreuse-pewter-bumper.glitch.me/';
>>>>>>> 2a6bef2f663928455c17e65a30bd02175905297e

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

