import axios from 'axios';
const config = axios.create({
  baseURL: 'https://www.thecocktaildb.com',
});
export default config;
