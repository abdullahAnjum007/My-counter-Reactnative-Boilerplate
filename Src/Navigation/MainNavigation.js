import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import BottomNavigaiton from './BottomNavigaiton';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNAv"
        component={BottomNavigaiton}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
