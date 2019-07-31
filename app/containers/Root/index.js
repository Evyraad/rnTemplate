import React, { Component } from 'react';
import { View } from 'react-native';

import Navigation from 'containers/Navigation/router';
import NavigationService from 'containers/Navigation/service';
import StatusBar from './components/StatusBar';
import styles from './styles';

class RootContainer extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigation);
  }

  shouldComponentUpdate() {
    return false;
  }

  setNavRef = (ref) => { this.navigation = ref; }

  render() {
    return (
      <View style={styles.container}>
        <Navigation ref={this.setNavRef} />
        <StatusBar />
      </View>
    );
  }
}

export default RootContainer;
