import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles, { indicator } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  isPersist: PropTypes.bool,
  isAuth: PropTypes.bool,
};

const defaultProps = {
  navigation: undefined,
  isPersist: false,
  isAuth: false,
};

class LoadingScreen extends Component {
  timerId = null;

  componentDidMount() {
    const { isAuth, navigation, isPersist } = this.props;

    if (!isPersist) {
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

LoadingScreen.propTypes = propTypes;
LoadingScreen.defaultProps = defaultProps;

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
});

export default connect(mapStateToProps)(LoadingScreen);
