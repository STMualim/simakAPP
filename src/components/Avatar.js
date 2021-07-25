import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Warna} from '../helpers/Warna';

const Avatar = props => {
  // Avatar
  const avatar = str => {
    const first = str.charAt(0).toUpperCase();
    const second = str.charAt(1).toUpperCase();
    return first + second;
  };

  const style = {
    width: props.lg ? 80 : 55,
    height: props.lg ? 80 : 55,
    borderRadius: 100 / 2,
    backgroundColor: Warna.primary,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={style}>
      <Text
        style={{
          color: Warna.white,
          fontSize: props.lg ? 30 : 20,
          fontFamily: 'Montserrat-Medium',
        }}>
        {avatar(props.nama)}
      </Text>
    </View>
  );
};

export default Avatar;
