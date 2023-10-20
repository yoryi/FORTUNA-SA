import React from 'react';
import {View} from 'react-native';
import {RESPOSIVE} from '../../constants';

function space({size}) {
  return <View style={{height: RESPOSIVE(size)}} />;
}
export default space;
