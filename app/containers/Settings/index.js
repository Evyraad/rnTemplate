import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import AuthActions from 'containers/Auth/redux';
import { colors } from 'theme';
import styles from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  logOut: PropTypes.func.isRequired,
};

class Home extends Component {
  logOut = () => {
    const { navigation, logOut } = this.props;

    navigation.navigate('Auth');
    logOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="log out"
          color={colors.gray_black}
          onPress={this.logOut} />
      </View>
    )
  }
}

Home.propTypes = propTypes

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ logOut: AuthActions.logOut }, dispatch)
});

export default connect(null, mapDispatchToProps)(Home);
