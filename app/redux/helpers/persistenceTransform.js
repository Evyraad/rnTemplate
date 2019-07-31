import Immutable from 'seamless-immutable';
import { createTransform } from 'redux-persist';
import _ from 'lodash';

// change this Immutable object into a JS object
const convertToJs = state => state.asMutable({ deep: true });

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = raw => (
  Immutable.isImmutable(raw) ? convertToJs(raw) : raw
);

// convert this JS object into an Immutable object
const toImmutable = raw => Immutable(raw);

// the transform interface that redux-persist is expecting
export default filterKeys => createTransform(
  // transform state coming from redux on its way to being serialized and stored
  (state, key) => {
    let keys = [];
    if (filterKeys) {
      keys = filterKeys.map(k => (
        k.indexOf(`${key}.`) !== -1 ? k.replace(`${key}.`, '') : ''
      ));
    }
    if (_.without(keys, '').length === 0) return fromImmutable(state);
    return fromImmutable(_.pick(state, keys));
  },
  // transform state coming from storage, on its way to be rehydrated into redux
  state => toImmutable(state),
);
