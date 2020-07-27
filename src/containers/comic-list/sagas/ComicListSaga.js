import { call, put } from 'redux-saga/effects';
import * as comicListActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getComicList(api, { payload }) {
  const { search, t } = payload;
  let { page } = payload;
  const limit = 10;

  if (page) {
    page -= 1;
  }

  yield put(comicListActions.loading(true));

  const response = yield call(api.getComicList, search, page, limit);

  if (response && response.ok) {
    const { data: { results, total } } = response.data;
    const totalPages = Math.ceil(total / limit);

    yield put(comicListActions.addComics(results, total, totalPages));
  } else {
    yield put(alertActions.addAlert(t('Serviço temporariamente indisponível'), alertTypes.error));
  }

  yield put(comicListActions.loading(false));
}
