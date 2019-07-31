import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles, { indicator } from './styles';

class LoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
    isAuth: PropTypes.bool,
  }

  static defaultProps = {
    navigation: undefined,
    isAuth: false,
  }

  timerId = null;

  componentDidMount() {
    const { isAuth, navigation } = this.props;

    if (navigation) {
      this.timerId = setTimeout(
        () => navigation.navigate(isAuth ? 'App' : 'Auth'),
        2500,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) clearTimeout(this.timerId);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator {...indicator} />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
});

export default connect(mapStateToProps)(LoadingScreen);
