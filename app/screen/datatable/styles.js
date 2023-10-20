import {StyleSheet} from 'react-native';
import {COLORS, RESPOSIVE} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  iconFilters: {
    width: RESPOSIVE(2.5),
    height: RESPOSIVE(2.5),
  },
  buttonFilter: {
    padding: 5,
    borderRadius: 10,
    width: RESPOSIVE(6),
    height: RESPOSIVE(6),
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
    padding: 10,
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
    paddingLeft: 5,
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
  containerTitleCompany: {
    paddingBottom: 10,
  },
  titleCompany: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  headTable: {
    height: 50,
    backgroundColor: COLORS.GREY_APP,
  },
});

export default styles;
