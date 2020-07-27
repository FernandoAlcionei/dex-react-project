import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getComicDetails } from './ComicDetailsSaga';
import Api from '../../../api';

const api = Api.create();

export const comicDetailsSagas = [
  takeLatest(types.SAGA_COMIC_DETAILS, getComicDetails, api),
];
