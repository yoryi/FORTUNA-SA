import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

//Components
import styles from './styles';
import {COLORS} from '../../constants';
import {StatusBar} from '../../components';

function DataTable() {
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

  const renderSearch = () => (
    <View>
      <Text>Search</Text>
    </View>
  );

  const renderFilters = () => (
    <View>
      <Text>Filtros</Text>
    </View>
  );

  const renderDataTable = () => (
    <View>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} />
        <Rows data={tableData} />
      </Table>
    </View>
  );

  const renderUI = () => (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <StatusBar mode={'dark'} backgroundColor={COLORS.WHITE} />
        {renderSearch()}
        {renderFilters()}
        {renderDataTable()}
      </SafeAreaView>
    </View>
  );
  return renderUI();
}
export default DataTable;
