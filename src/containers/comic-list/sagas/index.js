import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getComicList } from './ComicListSaga';
import Api from '../../../api';

const api = Api.create();

export const comicListSagas = [
  takeLatest(types.SAGA_COMIC_LIST, getComicList, api),
];
