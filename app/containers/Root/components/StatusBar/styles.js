import { StyleSheet } from 'react-native';
import { colors } from 'theme';
import { deviceType } from 'lib';
import addTransparency from 'lib/styleFix';

export const barColor = addTransparency(colors.gray, 0.15);

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    display: deviceType.isIphoneX ? 'none' : 'flex',
    height: 20,
    backgroundColor: colors.gray,
  },
});
