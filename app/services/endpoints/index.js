import service from '../api';
async function searchCoctel(payload) {
  const url = '';
  const method = 'GET';
  const data = {};
  return service(url, method, data);
}

async function listCategory() {
  const url = '';
  const method = 'GET';
  const data = {};
  return service(url, method, data);
}
export default {searchCoctel, listCategory};
