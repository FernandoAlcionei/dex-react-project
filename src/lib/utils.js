export const getParamUrl = (name, location) => {
  const { search } = location;
  const params = new URLSearchParams(search);

  return params.get(name) || '';
};

export const getClasses = (classes) => classes.join(' ');

export const formatPrice = (value, currency) => {
  // LocaleString is not Working very well
  value.toLocaleString('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  });

  return `$ ${value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
