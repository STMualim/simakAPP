import React from 'react';
import {Text, View} from 'react-native';
import {Warna} from '../helpers/Warna';

const Badge = props => {
  const badgeStyles = {
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
      : Warna.white,
    borderColor: props.borderPrimary
      ? Warna.primary
      : props.borderSoftPrimary
      ? Warna.softPrimary
      : props.borderSecondary
      ? Warna.secondary
      : props.borderSoftSecondary
      ? Warna.softSecondary
      : props.borderGray
      ? Warna.gray
      : Warna.white,
    borderWidth: 1,
    paddingBottom: 1,
    paddingHorizontal: 5,
    height: 20,
    minWidth: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  };

  const badgeText = {
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
      : Warna.gray,
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
  };

  return (
    <View style={badgeStyles}>
      <Text style={badgeText}>{props.children}</Text>
    </View>
  );
};

export default Badge;
