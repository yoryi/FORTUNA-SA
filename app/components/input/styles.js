import {StyleSheet} from 'react-native';
import {CONTAINER, COLORS} from '../../constants';

const styles = StyleSheet.create({
  wraper: {
    height: CONTAINER.INPUT_APP,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
  },
  containerInput: {
    width: '90%',
    height: '100%',
  },
  textTitle: {
    paddingBottom: '3%',
    color: COLORS.WHITE,
    paddingLeft: '2%',
    fontSize: 11,
  },
});
export default styles;
