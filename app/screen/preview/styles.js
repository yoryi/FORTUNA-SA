import {StyleSheet} from 'react-native';
import {COLORS, RESPOSIVE} from '../../constants';

const styles = StyleSheet.create({
  containerTabBar: {
    height: 60,
    padding: 15,
    paddingLeft: 30,
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

  //Container Preview
  containerPreview: {
    height: '100%',
    width: '100%',
    paddingTop: '30%',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  containerImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
    backgroundColor: COLORS.GREY_APP,
  },
  imagePreview: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});

export default styles;
