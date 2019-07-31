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

class Login extends Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logining: PropTypes.bool,
    loginFailed: PropTypes.bool,
  }

  static defaultProps = {
    logining: false,
    loginFailed: false,
  }

  constructor() {
    super();
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

    // this.props.navigation.navigate('App');
    logIn(login, pass);
  }

  renderIndicator = () => {
    if (!this.props.logining) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator {...indicator} />
      </View>
    );
  }

  renderError = () => {
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
          />
          <TextInput
            value={pass}
            onChangeText={this.onChangePass}
            editable={!logining}
            placeholder="password"
            style={styles.input}
            placeholderTextColor={colors.blue}
            secureTextEntry
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

const mapStateToProps = ({ auth }) => ({
  logining: auth.logining,
  loginFailed: auth.loginFailed,
});

const mapDispatchToProps = {
  logIn: Actions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
