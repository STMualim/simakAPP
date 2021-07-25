import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Logo from '../assets/images/logo-color';
import {Button, Container, Gap, Input, LoadingScreen} from '../components';
import {Row, Col} from 'react-native-responsive-grid-system';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Url} from '../helpers/Url';
import SnackBar from 'react-native-snackbar-component';
import {Warna} from '../helpers/Warna';

const Login = ({navigation}) => {
  // State
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [visibleBar, setVisibleBar] = useState(false);
  const [pesanBar, setPesanBar] = useState('');

  // Set Auto Hide Bar
  const hideBar = waktu => {
    setTimeout(() => {
      setVisibleBar(false);
    }, waktu);
  };

  // Submit
  const submit = (values, actions) => {
    setLoadingScreen(true);
    axios
      .post(Url.api + 'login/proses', values)
      .then(res => {
        setSession(res.data);
        actions.resetForm();
        navigation.replace('Home');
        setLoadingScreen(false);
      })
      .catch(err => {
        setLoadingScreen(false);
        setPesanBar('Maaf, kamu belum terdaftar');
        setVisibleBar(true);
        hideBar(3000);
      });
  };

  // Set Session
  const setSession = async data => {
    try {
      const id = JSON.stringify(data);
      await AsyncStorage.setItem('siswa', id);
    } catch (e) {}
  };

  // Set Rules Validation
  const validRules = yup.object({
    tlpEmail: yup.string().required('No.Tlp./Email wajib diisi'),
    pin: yup.string().required('PIN wajib diisi'),
  });

  // Form Values
  const formValues = {
    tlpEmail: '',
    pin: '',
  };

  return (
    <Container>
      {loadingScreen == true && <LoadingScreen />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row>
          <Col xs={12} colStyles={{alignItems: 'center'}}>
            <Logo width={'50%'} />
          </Col>
        </Row>

        <Row rowStyles={{paddingHorizontal: 10}}>
          <Col xs={12}>
            {/* Form Login */}
            <Formik
              initialValues={formValues}
              validationSchema={validRules}
              onSubmit={(values, actions) => submit(values, actions)}>
              {props => (
                <View>
                  <Input
                    label="No.Tlp./Email"
                    value={props.values.tlpEmail}
                    onChangeText={props.handleChange('tlpEmail')}
                    autoFocus={true}
                    autoCapitalize="none"
                    error={props.errors.tlpEmail}
                    touch={props.touched.tlpEmail}
                  />
                  <Gap height={15} />
                  <Input
                    label="PIN 6 Digit Angka"
                    value={props.values.pin}
                    onChangeText={props.handleChange('pin')}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    maxLength={6}
                    error={props.errors.pin}
                    touch={props.touched.pin}
                    keyboardType="numeric"
                  />
                  <Gap height={20} />
                  <Button primary onPress={() => props.handleSubmit()}>
                    Login
                  </Button>
                </View>
              )}
            </Formik>
            {/* --Form Login */}
          </Col>
        </Row>
      </ScrollView>

      <SnackBar
        visible={visibleBar}
        textMessage={pesanBar}
        actionHandler={() => setVisibleBar(false)}
        actionText="OK, SIAP!"
        backgroundColor={Warna.softSecondary}
        accentColor={Warna.secondary}
        messageColor={Warna.secondary}
        actionStyle={styles.actionText}
      />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  actionText: {
    fontFamily: 'Montserrat-Bold',
  },
});
