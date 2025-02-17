import axios from "axios";
console.log('VITE_BASE_API', import.meta.env.VITE_BASE_URL)
const url = import.meta.env.VITE_BASE_URL || 'http://localhost:5000'
console.log("url: ", url)
//const API_URL = `http://localhost:5000/api-v1`;
const API_URL = new URL('api-v1', url)
console.log(API_URL)

const api = axios.create({
  baseURL: API_URL,
});

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

export default api;
