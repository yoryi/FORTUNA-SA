import React from 'react';
import Router from './router';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import NavigationRef from './navigateRef';
import {store} from './redux/stores/store';
import {NavigationContainer} from '@react-navigation/native';

LogBox.ignoreLogs(['createSlice.extraReducers']);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigator => NavigationRef.setNavigator(navigator)}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
