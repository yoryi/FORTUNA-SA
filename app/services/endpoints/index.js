import service from '../api';
async function searchCoctel() {
  const url = '/api/json/v1/1/search.php?f=a';
  return service(url);
}

async function listCategory() {
  const url = '/api/json/v1/1/list.php?c=list';
  return service(url);
}

async function resultCategory(payload) {
  const url = `/api/json/v1/1/filter.php?c=${payload}`;
  return service(url);
}
export default {searchCoctel, listCategory, resultCategory};
