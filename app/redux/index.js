import { persistCombineReducers } from 'redux-persist';

import { reducer as auth } from 'containers/Auth/redux';

import configureStore from './store/configureStore';
import reduxPersist from './config/reduxPersist';

/* ------------- Assemble The Reducers with ReduxPersist ------------- */

export const reducers = persistCombineReducers(reduxPersist.storeConfig, {
  auth,
});

export default () => configureStore(reducers);
