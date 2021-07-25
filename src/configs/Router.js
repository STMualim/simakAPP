import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Home, Profile} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Router;
