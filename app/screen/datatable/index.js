import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

//Components
import styles from './styles';
import {COLORS} from '../../constants';
import {StatusBar} from '../../components';

function DataTable() {
  const renderSearch = () => {};
  const renderFilters = () => {};
  const renderDataTable = () => {};

  const renderUI = () => (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <StatusBar mode={'dark'} backgroundColor={COLORS.WHITE} />
        <Text>Data Table</Text>
      </SafeAreaView>
    </View>
  );
  return renderUI();
}
export default DataTable;
