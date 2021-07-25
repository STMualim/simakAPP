import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Col, Row} from 'react-native-responsive-grid-system';
import {Button, Container} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  // Clear Session
  const clearSession = async () => {
    try {
      await AsyncStorage.removeItem('siswa');
      navigation.replace('Login');
    } catch (err) {}
  };

  return (
    <Container>
      <Row rowStyles={styles.rowKeluar}>
        <Col xs={12}>
          <Button softGray onPress={() => clearSession()}>
            Keluar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rowKeluar: {
    padding: 10,
  },
});
