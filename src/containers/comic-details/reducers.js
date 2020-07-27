import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  comic: {},
};

const clearReducer = () => ({ ...INITIAL_STATE });

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const addComic = (state = INITIAL_STATE, action) => ({
  ...state,
  comic: action.payload.comic,
});

export const comicDetailsReducer = createReducer(INITIAL_STATE, {
  [types.CLEAR_REDUCER]: clearReducer,
  [types.LOADING]: loading,
  [types.ADD_COMIC]: addComic,
});
