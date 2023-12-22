import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6172cfe5110a740017222e2b.mockapi.io',
});

export default api;
