import React from 'react';
import NavigateRef from '../../navigateRef';
import {useRoute} from '@react-navigation/native';
import {View, TouchableOpacity, Image} from 'react-native';

//Components
import styles from './styles';
import {COLORS, IMAGES} from '../../constants';
import {StatusBar} from '../../components';

function Preview() {
  const route = useRoute();
  const imagePreview = route.params?.payload;

  const handleNavigatePreview = () => NavigateRef.goBack();
  const renderTabBar = () => {
    return (
      <View style={styles.containerTabBar}>
        <TouchableOpacity
          style={styles.buttonClose}
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

  const renderPreview = () => {
    return (
      <View style={styles.containerPreview}>
        <View style={styles.containerImage}>
          <Image
            resizeMode={'contain'}
            style={styles.imagePreview}
            source={{uri: imagePreview?.data}}
          />
        </View>
      </View>
    );
  };

  const renderUI = () => {
    return (
      <View style={styles.wrapper}>
        <StatusBar mode={'ligth'} backgroundColor={COLORS.BLACK} />
        {renderTabBar()}
        {renderPreview()}
      </View>
    );
  };
  return renderUI();
}
export default Preview;
