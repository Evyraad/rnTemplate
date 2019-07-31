// @flow

/* ------------- State ------------- */

export type State = {
  isAuth: boolean,
  logining: boolean,
  loginFailed: boolean,
};

/* ------------- Actions ------------- */

export type LogIn = {
  +type: 'LOG_IN',
  login: string,
  pass: string,
};

export type LogInSuccess = { +type: 'LOG_IN_SUCCESS' };

export type LogInFailed = { +type: 'LOG_IN_AILED' };

export type LogOut = { +type: 'LOG_OUT' };
