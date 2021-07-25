import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../assets/images/logo-white.svg';
import {Warna} from '../helpers/Warna';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Url} from '../helpers/Url';

const Splash = ({navigation}) => {
  useEffect(() => {
    getSession();
  }, []);

  // Cek Session
  const getSession = async () => {
    try {
      const data = await AsyncStorage.getItem('siswa');
      const siswa = JSON.parse(data);
      if (data) {
        cekSession(siswa.id);
      } else {
        navigation.replace('Login');
      }
    } catch (err) {}
  };

  // Cek Login ke Server
  const cekSession = id => {
    const data = {
      id,
    };
    axios
      .get(Url.api + 'login/cek_login', {
        params: {
          id: id,
        },
      })
      .then(res => {
        navigation.replace('Home');
      })
      .catch(err => {
        navigation.replace('Login');
      });
  };

  return (
    <View style={styles.container}>
      <Logo width={'60%'} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna.primary,
  },
});
