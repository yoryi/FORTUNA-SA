import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

//Components
import styles from './styles';
import {COLORS, IMAGES} from '../../constants';
import {Input, StatusBar} from '../../components';

function DataTable() {
  const [filter, setFilters] = useState('');
  const [hideFilters, setHideFilters] = useState(false);

  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd'],
  ];

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
      <ScrollView horizontal>
        <TouchableOpacity style={styles.buttonSelect}>
          <Text style={styles.titleSelect}>Filtros</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  const renderDataTable = () => (
    <View style={{paddingTop: 10, flex: 1}}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} />
        <Rows data={tableData} />
      </Table>
    </View>
  );

  const renderUI = () => {
    return (
      <TouchableWithoutFeedback
        accessible={false}
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <StatusBar mode={'ligth'} backgroundColor={COLORS.BLACK} />
          {renderSearch()}
          {hideFilters && renderFilters()}
          {renderDataTable()}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return renderUI();
}
export default DataTable;
