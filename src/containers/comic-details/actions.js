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

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    payload: { product },
  };
}

export function sagaProductDetails(id, t) {
  return {
    type: types.SAGA_PRODUCT_DETAILS,
    payload: { id, t },
  };
}

export function sagaBuyProduct(id, t) {
  return {
    type: types.SAGA_BUY_PRODUCT,
    payload: { id, t },
  };
}
