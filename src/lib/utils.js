/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
export const getParamUrl = (name, location) => {
  const { search } = location;
  const params = new URLSearchParams(search);

  return params.get(name) || '';
};

export const getClasses = (classes) => classes.join(' ');

export const convertUriParamsToObject = (urlParams) => (urlParams ? (
  JSON.parse(`{"${decodeURI(urlParams).replace('?', '').replace(/"/g, '\\"').replace(/&/g, '","')
    .replace(/=/g, '":"')}"}`)
) : {});

export const convertObjectToUriParams = (params) => {
  const str = [];
  for (const p in params) {
    if (params.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(params[p])}`);
    }
  }
  return `?${str.join('&')}`;
};
