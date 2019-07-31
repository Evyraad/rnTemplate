import { takeLeading } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { Types as AuthTypes } from 'containers/Auth/redux';


/* ------------- Sagas ------------- */

import { logIn } from 'containers/Auth/saga';


/* ------------- Connect Types To Sagas ------------- */

const rootSaga = function* root() {
  yield takeLeading(AuthTypes.LOG_IN, logIn);
};

export default rootSaga;
