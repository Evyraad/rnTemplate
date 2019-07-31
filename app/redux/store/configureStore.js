import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import crashReporterMiddleware from '../middleware/crashReporter';

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* --------- Cresh Reporter Middleware ---------- */
  middleware.push(crashReporterMiddleware);


  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);


  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  );
  /* eslint-enable */

  const store = {
    ...createStore(rootReducer, composeEnhancers(...enhancers)),
    runSaga: sagaMiddleware.run,
  };
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
