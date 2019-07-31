// @flow

import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import type { State } from './types';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  logIn: ['login', 'pass'],
  logInSuccess: null,
  logInFailed: null,
  logOut: null,
});

export { Types };
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE: State = Immutable({
  isAuth: false,
  logining: false,
  loginFailed: false,
});

/* ------------- Reducers ------------- */
const logInSuccess = (state: State) => ({
  ...state,
  isAuth: true,
  logining: false,
  loginFailed: false,
});

const logIn = (state: State) => ({
  ...state,
  isAuth: false,
  logining: true,
  loginFailed: false,
});

const logInFailed = (state: State) => ({
  ...state,
  isAuth: false,
  logining: false,
  loginFailed: true,
});

const logOut = () => ({ ...INITIAL_STATE });

/* ------------- Hookup Reducers To Types ------------- */
export const HANDLERS = {
  LOG_IN: logIn,
  LOG_IN_SUCCESS: logInSuccess,
  LOG_IN_FAILED: logInFailed,
  LOG_OUT: logOut,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
