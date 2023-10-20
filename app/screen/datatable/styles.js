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
  buttonSelect: {
    height: 40,
    minWidth: 100,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREY_APP,
  },
  titleSelect: {
    color: COLORS.BLACK,
  },
  containerSearch: {
    height: 110,
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  containerFilters: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDataTable: {
    borderWidth: 1.3,
    borderColor: COLORS.GREY_APP,
  },
  containerVisualize: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleVisualize: {
    color: COLORS.GREEN_APP,
  },
  containerTitleDataTitle: {
    paddingLeft: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleDataTitle: {
    fontSize: 17,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});

export default styles;
