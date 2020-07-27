import { call, put } from 'redux-saga/effects';
import * as comicListActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getComicList(api, { payload }) {
  const { search, t, page } = payload;
  const limit = 10;

  yield put(comicListActions.loading(true));

  const response = yield call(api.getComicList, search, page, limit);

  if (response && response.ok) {
    const { data: { results, total } } = response.data;
    const totalPages = Math.ceil(total / limit);

    yield put(comicListActions.addComics(results, total, totalPages));
  } else {
    yield put(alertActions.addAlert(t('Service temporarily unavailable'), alertTypes.error));
  }

  yield put(comicListActions.loading(false));
}
