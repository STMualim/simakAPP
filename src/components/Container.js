import React from 'react';
import {SafeAreaView} from 'react-native';
import {Warna} from '../helpers/Warna';

const Container = props => {
  const styles = {
    flex: 1,
    backgroundColor: props.bgColor ? props.bgColor : Warna.white,
  };

  return <SafeAreaView style={styles}>{props.children}</SafeAreaView>;
};

export default Container;
