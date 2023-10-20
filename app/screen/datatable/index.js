/* eslint-disable eqeqeq */
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
  const [search, setSearch] = useState('');
  const [filter, setFilters] = useState(0);
  const [hideFilters, setHideFilters] = useState(false);
  const [fieldFilters, setFieldFilters] = useState('Ordinary Drink');

  const dispatch = useDispatch();
  const stateCategory = useSelector(({CATEGORY}) => CATEGORY?.category);
  const stateListCategory = useSelector(
    ({LIST_CATEGORY}) => LIST_CATEGORY?.list,
  );

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    dispatch(fetchResultCategory(fieldFilters));
  }, [filter]);

  const tableHead = ['ID Drink', 'Nombre', 'Fotografia'];
  const tableData = stateCategory?.drinks?.map(item => {
    return [item.idDrink, item.strDrink, item.strDrinkThumb];
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
                    index == filter ? COLORS.GREY_APP : COLORS.GREY_APP,
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
