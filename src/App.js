import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Warna} from './helpers/Warna';
import {Router} from './configs';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Warna.primary} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
