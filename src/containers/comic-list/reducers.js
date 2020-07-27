import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  comics: [],
  totalResults: 0,
  totalPages: 0,
};

const clearReducer = () => ({ ...INITIAL_STATE });

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const addComics = (state = INITIAL_STATE, action) => ({
  ...state,
  comics: action.payload.comics,
  totalResults: action.payload.totalResults,
  totalPages: action.payload.totalPages,
});

export const comicListReducer = createReducer(INITIAL_STATE, {
  [types.CLEAR_REDUCER]: clearReducer,
  [types.LOADING]: loading,
  [types.ADD_COMICS]: addComics,
});
