import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',//'column-reverse',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {
    overflow: 'visible',
  },
  contentMaskContainer: {
    overflow: 'hidden',
  },
});
