import config from './config';
const api = async (url, method, data) => {
  return config({url, method, data})
    .then(response => response)
    .catch(_ => false);
};
export default api;
