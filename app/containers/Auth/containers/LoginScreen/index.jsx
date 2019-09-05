import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  ScrollView,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Actions from 'containers/Auth/redux';
import { colors } from 'theme';
import styles, { indicator } from './styles';

const propTypes = {
  logIn: PropTypes.func.isRequired,
  logining: PropTypes.bool,
  loginFailed: PropTypes.bool,
};

const defaultProps = {
  logining: false,
  loginFailed: false,
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      pass: '',
    };

    this.onChangeLogin = this.onChange.bind(this, 'login');
    this.onChangePass = this.onChange.bind(this, 'pass');
  }

  onChange(type, value) {
    this.setState({ [type]: value });
  }

  submit = () => {
    const { logIn } = this.props;
    const { login, pass } = this.state;

    logIn(login, pass);
  }

  renderIndicator() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.props.logining) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator {...indicator} />
      </View>
    );
  }

  renderError() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.props.loginFailed) return null;
    return <Text style={styles.err}>try again</Text>;
  }

  render() {
    const { logining } = this.props;
    const { login, pass } = this.state;
    const disabled = logining || !login.trim().length || !pass.trim().length;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            value={login}
            onChangeText={this.onChangeLogin}
            editable={!logining}
            placeholder="login"
            style={styles.input}
            placeholderTextColor={colors.blue}
            autoCapitalize="none"
          />
          <TextInput
            value={pass}
            onChangeText={this.onChangePass}
            editable={!logining}
            placeholder="password"
            style={styles.input}
            placeholderTextColor={colors.blue}
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.button}>
            <Button
              title="submit"
              onPress={this.submit}
              color={colors.gray_black}
              disabled={disabled}
            />
            {this.renderIndicator()}
          </View>
        </ScrollView>
        {this.renderError()}
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = ({ auth }) => ({
  logining: auth.logining,
  loginFailed: auth.loginFailed,
});

const mapDispatchToProps = {
  logIn: Actions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
