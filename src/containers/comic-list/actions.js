import * as types from './actionTypes';

export function clearReducer() {
  return { type: types.CLEAR_REDUCER };
}

export function loading(loadingView) {
  return {
    type: types.LOADING,
    payload: { loading: loadingView },
  };
}

export function addComics(comics) {
  return {
    type: types.ADD_PRODUCTS,
    payload: { comics },
  };
}

export function sagaProductList(search, t) {
  return {
    type: types.SAGA_PRODUCT_LIST,
    payload: { search, t },
  };
}
