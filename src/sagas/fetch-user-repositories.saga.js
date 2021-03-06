import { put, call } from 'redux-saga/effects';

import { fetchFailed } from '../actions/fetch-failde';
import { setUserData } from '../actions/set-user-data';
import { fetchUserRepositoriesUrl } from '../constants/urls';

export function* fetchRepositories(action) {
  try {
    const response = yield call(fetch, fetchUserRepositoriesUrl(action.payload));
    yield put(setUserData(JSON.parse(response._bodyText)));
  } catch (e) {
    yield put(fetchFailed(e));
    return;
  }
}
