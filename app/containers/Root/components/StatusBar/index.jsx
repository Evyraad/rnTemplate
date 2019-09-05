import React from 'react';
import { StatusBar, Platform, View } from 'react-native';

import styles, { barColor } from './styles';

const CustomStatusBar = () => {
  if (Platform.OS === 'ios') return <View style={styles.statusBar} />;

  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor={barColor}
      translucent
    />
  );
};

export default React.memo(CustomStatusBar);
