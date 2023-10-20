import axios from 'axios';
const config = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
});
export default config;
