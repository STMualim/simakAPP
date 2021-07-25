import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Warna} from '../helpers/Warna';

const LoadingScreen = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={Warna.secondary} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(11, 105, 104, 0.9)',
    position: 'absolute',
    zIndex: 1,
  },
});
