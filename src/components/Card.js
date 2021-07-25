import React from 'react';
import {View} from 'react-native';
import {Warna} from '../helpers/Warna';

const Card = props => {
  const styles = {
    backgroundColor: props.bgColor ? props.bgColor : Warna.white,
    width: 'auto',
    padding: props.nopadding ? 0 : 10,
    borderRadius: 8,
    elevation: props.noShadow ? 0 : 3,
  };

  return <View style={styles}>{props.children}</View>;
};

export default Card;
