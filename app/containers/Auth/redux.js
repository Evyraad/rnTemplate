// @flow

import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import type { State } from './types';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  logIn: ['login', 'pass'],
  logInFailed: null,
  logInSuccess: null,
  logOut: null,
});

export { Types };
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE: State = Immutable({
  isAuth: false,
  loginFailed: false,
  logining: false,
});

/* ------------- Reducers ------------- */
const logInSuccess = (state: State) => ({
  ...state,
  isAuth: true,
  loginFailed: false,
  logining: false,
});

const logIn = (state: State) => ({
  ...state,
  isAuth: false,
  loginFailed: false,
  logining: true,
});

const logInFailed = (state: State) => ({
  ...state,
  isAuth: false,
  loginFailed: true,
  logining: false,
});

const logOut = () => ({ ...INITIAL_STATE });

/* ------------- Hookup Reducers To Types ------------- */
export const HANDLERS = {
  LOG_IN: logIn,
  LOG_IN_FAILED: logInFailed,
  LOG_IN_SUCCESS: logInSuccess,
  LOG_OUT: logOut,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
