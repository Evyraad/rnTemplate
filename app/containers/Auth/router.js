import { createStackNavigator } from 'react-navigation';

import { colors } from 'theme';
import LoginScreen from './containers/LoginScreen';

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { header: null },
    },
  }, {
    initialRouteName: 'Login',
    navigationOptions: { header: null },
    cardStyle: {
      backgroundColor: colors.gray,
    },
  },
);
