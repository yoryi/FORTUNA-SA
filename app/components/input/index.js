/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

function input({
  width,
  mode,
  title,
  value,
  focus,
  secure,
  maxLength,
  onKeyPress,
  placeholder,
  onChangeText,
  keyboardType,
  background,
}) {
  //State
  const [placeholderTextColor, setplaceholderTextColor] = useState('');
  const [backgroundColor, setbackgroundColor] = useState('');
  const [borderColor, setBorderColor] = useState('transparent');
  const [textColor, setTextColor] = useState('transparent');

  useEffect(() => {
    const rendeBorder = {
      dark: {
        default: COLORS.BLACK,
      },
      ligth: {
        default: COLORS.GRAY_SPACE,
      },
    };
    mode && setBorderColor(rendeBorder?.[mode]?.default);
  }, [title, mode]);

  useEffect(() => {
    const renderMode = {
      dark: COLORS.BLACK,
      ligth: COLORS.GRAY_SPACE,
    };
    mode && setbackgroundColor(renderMode?.[mode]);
  }, [mode]);

  useEffect(() => {
    const renderMode = {
      dark: COLORS.BLACK,
      ligth: COLORS.BLACK,
    };
    mode && setTextColor(renderMode?.[mode]);
  }, [mode]);

  useEffect(() => {
    const renderMode = {
      dark: COLORS.BLACK,
      ligth: COLORS.GRAY80,
    };
    mode && setplaceholderTextColor(renderMode?.[mode]);
  }, [mode]);

  const handleDisableInput = () => {
    const rendeBorder = {
      dark: {
        default: COLORS.DARKBLUE_PARKUP,
      },
      ligth: {
        default: COLORS.GRAY_SPACE,
      },
    };
    setBorderColor(rendeBorder?.[mode]?.default);
  };

  const handleActiveInput = () => {
    const rendeBorder = {
      dark: {
        default: COLORS.BLACK,
      },
      ligth: {
        default: COLORS.BLUE_BORDER,
      },
    };
    setBorderColor(rendeBorder?.[mode]?.default);
  };

  const renderUI = () => {
    return (
      <>
        {title && <Text style={styles.textTitle}>{title}</Text>}
        <View
          style={[
            styles.wraper,
            {
              borderColor,
              backgroundColor: background || backgroundColor,
              width,
            },
          ]}>
          <TextInput
            style={[styles.containerInput, {color: textColor}]}
            value={value}
            onBlur={handleDisableInput}
            onPressIn={handleActiveInput}
            placeholder={placeholder}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : null
            }
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCorrect={false}
            autoFocus={focus}
            secureTextEntry={secure}
            onTouchStart={onKeyPress}
            maxLength={maxLength}
          />
        </View>
      </>
    );
  };
  return renderUI();
}
export default input;
