import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {BLACK} from '../Colors';
import Explore from '../Screens/Explore';
import Chat from '../Screens/Chat';

const Tab = createBottomTabNavigator();
const BottomNavigaiton = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: BLACK,
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),

          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="search" size={size} color={color} />
          ),

          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="chatbox" size={size} color={color} />
          ),

          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="person" size={size} color={color} />
          ),

          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigaiton;

const styles = StyleSheet.create({});
