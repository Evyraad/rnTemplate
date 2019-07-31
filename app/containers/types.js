// @flow

export type Store = {
  getState: Function,
  dispatch: Function,
};

export type Action = {};

export type State = {};

/* ------------- Common ------------- */

type Style = number | boolean | Object;
export type StyleObj = Style | Array<Style>;
