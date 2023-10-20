/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {useDispatch, useSelector} from 'react-redux';

//Components
import styles from './styles';
import {COLORS, IMAGES} from '../../constants';
import {Input, StatusBar} from '../../components';
import {fetchCategory} from '../../redux/feature/listCategory';
import {fetchResultCategory} from '../../redux/feature/resultCategory';

function DataTable() {
  const [filter, setFilters] = useState('');
  const [hideFilters, setHideFilters] = useState(false);

  const dispatch = useDispatch();
  const stateListCategory = useSelector(
    ({LIST_CATEGORY}) => LIST_CATEGORY?.list,
  );

  const stateCategory = useSelector(({CATEGORY}) => CATEGORY?.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    dispatch(fetchResultCategory('Cocktail'));
  }, []);

  const tableHead = ['ID Drink', 'Nombre', 'Fotografia'];
  const tableData = stateCategory?.drinks?.map(item => {
    return [item.idDrink, item.strDrink, item.strDrinkThumb];
  });

  const handlerOnFilter = () => setHideFilters(!hideFilters);
  const renderSearch = () => (
    <View style={styles.containerSearch}>
      <View style={styles.search}>
        <Input
          width={'80%'}
          mode={'ligth'}
          value={filter}
          keyboardType={'default'}
          onChangeText={setFilters}
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
            <TouchableOpacity key={index} style={styles.buttonSelect}>
              <Text style={styles.titleSelect}>{response?.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  const renderDataTable = () => (
    <ScrollView>
      <Table borderStyle={styles.containerDataTable}>
        <Row data={tableHead} />
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
