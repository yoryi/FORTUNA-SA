/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import NavigateRef from '../../navigateRef';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, Row, Rows} from 'react-native-table-component';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

//Components
import styles from './styles';
import {COLORS, IMAGES} from '../../constants';
import {Input, StatusBar} from '../../components';
import {fetchCategory} from '../../redux/feature/listCategory';
import {fetchResultDrinks} from '../../redux/feature/resultDrinks';
import {fetchResultCategory} from '../../redux/feature/resultCategory';

function DataTable() {
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState(0);
  const [hideDrink, setHideDrink] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);
  const [fieldFilters, setFieldFilters] = useState('Ordinary Drink');

  //Selectors
  const dispatch = useDispatch();
  const stateCategory = useSelector(({CATEGORY}) => CATEGORY?.category);
  const stateListDrink = useSelector(({DRINKS}) => DRINKS?.drinks);
  const stateListCategory = useSelector(
    ({LIST_CATEGORY}) => LIST_CATEGORY?.list,
  );

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    dispatch(fetchResultCategory(fieldFilters));
    filter && setHideDrink(false);
  }, [filter]);

  useEffect(() => {
    search && dispatch(fetchResultDrinks(search));
  }, [search]);

  useEffect(() => {
    if (search) {
      const delay = setTimeout(() => {
        dispatch(fetchResultDrinks(search));
        setHideDrink(true);
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [search]);

  const handleNavigatePreview = payload =>
    NavigateRef.navigate('Preview', {payload});
  const VisualizerImage = payload => {
    return (
      <TouchableOpacity
        onPress={() => handleNavigatePreview(payload)}
        style={styles.containerVisualize}>
        <Text style={styles.titleVisualize}>Visualizar</Text>
      </TouchableOpacity>
    );
  };

  const tableHead = ['ID Drink', 'Nombre', 'Fotografia'];
  const dataToMap = hideDrink ? stateListDrink?.drinks : stateCategory?.drinks;
  const tableData = dataToMap?.map(item => {
    const rowData = [item.idDrink, item.strDrink, item.strDrinkThumb];
    rowData[2] = <VisualizerImage data={item.strDrinkThumb} />;
    return rowData;
  });

  const handlerOnFilter = () => setHideFilters(!hideFilters);
  const handlerOnSelectFilter = (data, index) => {
    setFilters(index);
    setFieldFilters(data?.strCategory);
  };

  const renderSearch = () => (
    <View style={styles.containerSearch}>
      <View style={styles.search}>
        <Input
          width={'80%'}
          mode={'ligth'}
          value={search}
          keyboardType={'default'}
          onChangeText={setSearch}
          background={COLORS.GREY_APP}
          placeholder={'Buscar Nombre Coctel'}
        />
        <TouchableOpacity style={styles.buttonFilter} onPress={handlerOnFilter}>
          <Image
            source={IMAGES.FILTERS}
            style={styles.iconFilters}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFilters = () => (
    <View style={styles.containerFilters}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stateListCategory?.drinks?.map((response, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlerOnSelectFilter(response, index)}
              style={[
                styles.buttonSelect,
                {
                  backgroundColor:
                    index == filter ? COLORS.GREEN_APP : COLORS.GREY_APP,
                },
              ]}>
              <Text style={styles.titleSelect}>{response?.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  const renderDataTable = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerTitleDataTitle}>
        <Text style={styles.titleDataTitle}>Lista Cocteles</Text>
      </View>
      <Table borderStyle={styles.containerDataTable}>
        <Row data={tableHead} style={styles.headTable} />
        <Rows data={tableData} />
      </Table>
    </ScrollView>
  );

  const renderUI = () => {
    return (
      <View style={styles.wrapper}>
        <StatusBar mode={'ligth'} backgroundColor={COLORS.BLACK} />
        {renderSearch()}
        {hideFilters && renderFilters()}
        {renderDataTable()}
      </View>
    );
  };
  return renderUI();
}
export default DataTable;
