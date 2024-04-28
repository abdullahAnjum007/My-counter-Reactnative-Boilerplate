import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import BottomNavigaiton from './BottomNavigaiton';
import Authnav from './Authnav';
import Location from '../Screens/Location';
import {useDispatch, useSelector} from 'react-redux';
import Venues from '../Screens/Venues';
import VenueDetails from '../Screens/VenueDetails';

const Stack = createNativeStackNavigator();
const NoAuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNAv"
        component={BottomNavigaiton}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Venues"
        component={Venues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VD"
        component={VenueDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.auth.token);
  console.log('neeshani', authToken);
  // const authTokens = false;
  return <>{authToken ? <NoAuthScreens /> : <Authnav />}</>;
};

export default MainNavigation;

const styles = StyleSheet.create({});
