import { StyleSheet } from 'react-native';
import { colors, fonts } from 'theme';

export default StyleSheet.create({
  button: {
    marginTop: '15%',
    marginHorizontal: 22,
  },
  container: {
    flex: 1,
  },
  err: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '6%',
    textAlign: 'center',
    color: colors.pink,
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 18,
    marginHorizontal: 22,
    height: 46,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
    fontSize: fonts.size.input,
    color: colors.blue,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: '15%',
    paddingBottom: '20%',
    paddingHorizontal: 18,
  },
  title: {
    marginBottom: 28,
    fontSize: fonts.size.h3,
    textAlign: 'center',
    color: colors.blue,
  },
});

export const indicator = {
  size: 'small',
  color: colors.gray_black,
};
