// @flow

import type { Action, Store } from 'containers/types';

const crashReporter = (store: Store) => (next: Function) => (
  (action: Action) => {
    try {
      return next(action);
    } catch (error) {
      console.error(error, {
        extra: {
          action,
          store: store.getState(),
        },
      });
    }
  }
);

export default crashReporter;
