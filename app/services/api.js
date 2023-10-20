import config from './config';
const api = async url => {
  return config
    .get(url)
    .then(response => response)
    .catch(error => {
      console.error('Axios Error:', error);
    });
};

export default api;
