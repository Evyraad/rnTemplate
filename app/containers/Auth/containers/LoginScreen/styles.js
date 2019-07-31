import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from 'theme';

export default ScaledSheet.create({
  button: {
    marginTop: '15%',
    marginHorizontal: '22@s',
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
    marginBottom: '18@vs',
    marginHorizontal: '22@s',
    height: '46@vs',
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
    fontSize: fonts.size.input,
    color: colors.blue,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: '15%',
    paddingBottom: '20%',
    paddingHorizontal: '18@s',
  },
  title: {
    marginBottom: '28@vs',
    fontSize: fonts.size.h3,
    textAlign: 'center',
    color: colors.blue,
  },
});

export const indicator = {
  size: 'small',
  color: colors.gray_black,
};
