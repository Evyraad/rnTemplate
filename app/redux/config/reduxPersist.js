import { Platform } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import AsyncStorage from '@react-native-community/async-storage';

import persistenceTransform from '../helpers/persistenceTransform';

const persistKeys = [
  'auth.isAuth',
];

const storage = Platform.OS === 'ios'
  ? AsyncStorage
  : FilesystemStorage;
const transform = persistenceTransform(persistKeys);


/* More info here:
 *  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
 *  whitelist - Optionally, just specify the keys you DO want stored to */
const reduxPersist = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'template',
    storage,
    /*
        reducer keys that you do NOT want stored to persistence here
        blacklist: ['login', 'search', 'nav'],
    */
    whitelist: [
      'auth',
    ],
    transforms: [transform],
    stateReconciler: autoMergeLevel2,
  },
};

export default reduxPersist;
