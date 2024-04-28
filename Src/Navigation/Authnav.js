import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../Screens/StartScreen';
import LoginSignin from '../Screens/LoginSignin';
import SignUp from '../Screens/SignUp';
import LocationPermit from '../Screens/LocationPermit';

const Stack = createNativeStackNavigator();
const Authnav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginSignin"
        component={LoginSignin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationPermit"
        component={LocationPermit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authnav;

const styles = StyleSheet.create({});
