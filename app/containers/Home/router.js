import { createBottomTabNavigator } from 'react-navigation';

import { colors } from 'theme';
import Settings from 'containers/Settings';
import Home from './index';

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: false,
      activeTintColor: colors.blue,
      tabStyle: { justifyContent: 'center' },
      style: { backgroundColor: colors.gray },
    },
  },
);
