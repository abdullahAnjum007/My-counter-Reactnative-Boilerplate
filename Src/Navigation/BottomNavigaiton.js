import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomNavigaiton = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigaiton;

const styles = StyleSheet.create({});
