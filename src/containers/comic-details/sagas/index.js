import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getComicDetails, buyComic } from './ComicDetailsSaga';
import Api from '../../../api';

const api = Api.create();

export const comicDetailsSagas = [
  takeLatest(types.SAGA_COMIC_DETAILS, getComicDetails, api),
  takeLatest(types.SAGA_BUY_COMIC, buyComic),
];
