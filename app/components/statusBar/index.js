/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import styles from './styles';

function statusBar({mode, backgroundColor, ...props}) {
  const [barStyle, setBarStyle] = useState('default');

  useEffect(() => {
    const renderMode = {
      dark: 'dark-content',
      ligth: 'light-content',
    };
    return setBarStyle(renderMode[mode]);
  }, [mode]);

  const renderUI = () => {
    return (
      <View style={[styles.statusBar, {backgroundColor}]}>
        <SafeAreaView>
          <StatusBar
            animated={true}
            translucent
            barStyle={barStyle}
            backgroundColor={backgroundColor}
            {...props}
          />
        </SafeAreaView>
      </View>
    );
  };
  return renderUI();
}
export default statusBar;
