import { StyleSheet } from 'react-native';
import addTransparency from 'lib/styleFix';
import { colors } from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 5,
    width: 100,
    height: 300,
    backgroundColor: addTransparency(colors.blue, 0.4),
  },
});
