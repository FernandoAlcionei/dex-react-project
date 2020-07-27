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

export function addComics(comics, totalResults, totalPages) {
  return {
    type: types.ADD_COMICS,
    payload: { comics, totalResults, totalPages },
  };
}

export function sagaComicList(search, page, t) {
  return {
    type: types.SAGA_COMIC_LIST,
    payload: { search, page, t },
  };
}
