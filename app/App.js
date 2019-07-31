import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { useScreens } from 'react-native-screens';

import createStore from './redux/index';
import rootSaga from './containers/Root/saga';
import RootContainer from './containers/Root/index';
import LoadingScreen from './containers/Auth/containers/LoadingScreen';


const { store, persistor } = createStore();
store.runSaga(rootSaga);

/* It helps to optimize the memory usage for screens
 * that are under the view stack and also simplify the native node hierarchy. */
useScreens();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<LoadingScreen />}>
      <RootContainer />
    </PersistGate>
  </Provider>
);

export default App;
