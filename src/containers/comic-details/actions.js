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

export function addComic(comic) {
  return {
    type: types.ADD_COMIC,
    payload: { comic },
  };
}

export function sagaComicDetails(id, t) {
  return {
    type: types.SAGA_COMIC_DETAILS,
    payload: { id, t },
  };
}
