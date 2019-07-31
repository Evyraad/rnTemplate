import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import AuthActions from 'containers/Auth/redux';
import { colors } from 'theme';
import styles from './styles';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    logOut: PropTypes.func.isRequired,
  }

  logOut = () => {
    const { navigation, logOut } = this.props;

    navigation.navigate('Auth');
    logOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="log out"
          color={colors.gray_black}
          onPress={this.logOut}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({}, {
    logOut: AuthActions.logOut,
  }), dispatch),
});

export default connect(null, mapDispatchToProps)(Home);
