// @flow

import { put, delay } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import NavigationService from 'containers/Navigation/service';
import AuthActions from './redux';
import type { LogIn } from './types';

type LogInArgs = $Rest<LogIn, {| type: string |}>;

function* logIn(args: LogInArgs): Saga<void> {
  const { login, pass } = args;

  yield delay(1000);

  if (login !== 'user' || pass !== 'user') yield put(AuthActions.logInFailed());
  else {
    NavigationService.navigate('App');
    yield put(AuthActions.logInSuccess());
  }
}

export default {
  logIn,
};
