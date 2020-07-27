import apisauce from 'apisauce';
import ApiConstants from './ApiConstants';

const { uri, auth, apis } = ApiConstants;

const getAuthentication = () => ({
  ts: auth.ts,
  apikey: auth.apikey,
  hash: auth.hash,
});

const removeEmptyProperties = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') removeEmptyProperties(obj[key]);
    else if (obj[key] == null || obj[key] === '') delete obj[key];
  });
};

const create = (baseURL = uri) => {
  const api = apisauce.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  });

  const getComicList = (title, offset, limit) => {
    const params = {
      ...getAuthentication(),
      formatType: 'comic',
      title,
      offset,
      limit,
    };

    removeEmptyProperties(params);

    return api.get(apis.comics, params);
  };

  const getComicDetails = (id) => {
    const params = { ...getAuthentication() };

    return api.get(`${apis.comics}/${id}`, params);
  };

  return {
    getComicList,
    getComicDetails,
  };
};

export default { create };
