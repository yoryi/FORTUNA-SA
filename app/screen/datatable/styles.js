import {StyleSheet} from 'react-native';
import {COLORS, RESPOSIVE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  iconFilters: {
    width: RESPOSIVE(3),
    height: RESPOSIVE(3),
  },
  buttonFilter: {
    height: 50,
    width: 50,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN_APP,
  },
  containerFilters: {
    height: 110,
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  containerInputs: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
