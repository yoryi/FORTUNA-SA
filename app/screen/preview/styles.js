import {StyleSheet} from 'react-native';
import {COLORS, RESPOSIVE} from '../../constants';

const styles = StyleSheet.create({
  containerTabBar: {
    height: 60,
    padding: 10,
    paddingLeft: 25,
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  buttonClose: {
    height: RESPOSIVE(2.5),
    width: RESPOSIVE(2.5),
  },
  iconClose: {
    height: RESPOSIVE(2.5),
    width: RESPOSIVE(2.5),
  },
});

export default styles;
