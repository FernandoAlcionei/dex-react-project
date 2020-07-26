import * as types from './actionTypes';

export function clearReducer() {
  return { type: types.CLEAR_REDUCER };
}

export function addAlert(title, type, timeout = 5000) {
  return {
    type: types.ADD_ALERT,
    payload: {
      alert: {
        id: new Date().getTime(),
        title,
        timeout,
        type,
      },
    },
  };
}

export function deleteAlert(id) {
  return {
    type: types.DELETE_ALERT,
    payload: { id },
  };
}
