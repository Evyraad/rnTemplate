import React, { Component } from 'react';
import { View } from 'react-native';

import Navigation from 'containers/Navigation/router';
import NavigationService from 'containers/Navigation/service';
import StatusBar from './components/StatusBar';
import styles from './styles';

class RootContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation ref={NavigationService.setNavigator} />
        <StatusBar />
      </View>
    );
  }
}

export default RootContainer;
