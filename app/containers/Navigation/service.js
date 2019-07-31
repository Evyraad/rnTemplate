// @flow
/* It allows use navigation actions any were in code and you don't need
 * to integrated with Redux (as it recommended developers of react-navigation).
 */

import { NavigationActions } from 'react-navigation';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

let navigator;

const setNavigator = (nav: NavigationScreenProp<NavigationState>) => {
  if (nav) navigator = nav;
};

const navigate = (routeName: string, params: Object) => {
  if (navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    navigator.dispatch(action);
  }
};

export default {
  setNavigator,
  navigate,
};
