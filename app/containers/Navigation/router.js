import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from 'containers/Auth/containers/LoadingScreen';
import AuthStack from 'containers/Auth/router';
import AppStack from 'containers/Home/router';

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: LoadingScreen },
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNavigator);
