import React from 'react';
import {Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {Warna} from '../helpers/Warna';

const Button = props => {
  const btnStyles = {
    backgroundColor: props.primary
      ? Warna.primary
      : props.softPrimary
      ? Warna.softPrimary
      : props.secondary
      ? Warna.secondary
      : props.softSecondary
      ? Warna.softSecondary
      : props.gray
      ? Warna.gray
      : props.softGray
      ? Warna.softGray
      : Warna.white,
    padding: props.sm ? 8 : 12,
    borderRadius: 25,
    alignItems: 'center',
  };

  const btnText = {
    color: props.primary
      ? Warna.white
      : props.softPrimary
      ? Warna.primary
      : props.secondary
      ? Warna.white
      : props.softSecondary
      ? Warna.secondary
      : props.gray
      ? Warna.white
      : props.softGray
      ? Warna.gray
      : Warna.gray,
    fontFamily: 'Montserrat-Bold',
    fontSize: props.sm ? 12 : 16,
  };

  const rippleColor = props.primary
    ? Warna.white
    : props.softPrimary
    ? Warna.primary
    : props.secondary
    ? Warna.white
    : props.softSecondary
    ? Warna.secondary
    : props.gray
    ? Warna.white
    : props.softGray
    ? Warna.gray
    : Warna.gray;

  return (
    <Ripple
      style={btnStyles}
      rippleContainerBorderRadius={25}
      rippleColor={rippleColor}
      {...props}>
      <Text style={btnText}>{props.children}</Text>
    </Ripple>
  );
};

export default Button;
