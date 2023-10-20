import React from 'react';
import NavigateRef from '../../navigateRef';
import {View, TouchableOpacity, Image} from 'react-native';

//Components
import styles from './styles';
import {COLORS, IMAGES} from '../../constants';
import {StatusBar} from '../../components';

function Preview() {
  const handleNavigatePreview = () => NavigateRef.goBack();
  const renderTabBar = () => {
    return (
      <View style={styles.containerTabBar}>
        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={handleNavigatePreview}>
          <Image
            source={IMAGES.CLOSE}
            style={styles.iconClose}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderPreview = () => {};

  const renderUI = () => {
    return (
      <View style={styles.wrapper}>
        <StatusBar mode={'ligth'} backgroundColor={COLORS.BLACK} />
        {renderTabBar()}
      </View>
    );
  };
  return renderUI();
}
export default Preview;
