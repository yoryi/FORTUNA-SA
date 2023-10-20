import React from 'react';
import Module from './module';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DataTable'}
      screenOptions={{
        headerShown: false,
      }}>
      {Module.map((response, index) => (
        <Stack.Screen {...response} key={index} />
      ))}
    </Stack.Navigator>
  );
};
export default Root;
