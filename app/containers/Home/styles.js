import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import addTransparency from 'lib/styleFix';
import { colors } from 'theme';

const dimensions = Dimensions.get('window');
const scaleType = dimensions.width <= 320 ? 's' : 'ms';

export default ScaledSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingTop: '30@vs',
  },
  column: {
    justifyContent: 'center',
  },
  ball: {
    margin: '4@s',
    height: `78@${scaleType}`,
    width: `78@${scaleType}`,
    backgroundColor: addTransparency(colors.blue, 0.4),
    borderRadius: '39@ms',
  },
});
