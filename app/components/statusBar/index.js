/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

function statusBar({mode, backgroundColor}) {
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
      <StatusBar
        animated={true}
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    );
  };
  return renderUI();
}
export default statusBar;
