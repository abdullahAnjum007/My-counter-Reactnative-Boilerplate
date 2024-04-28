import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './Src/Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './Src/Redux/store';
import Splash from './Src/Screens/Splash';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <MainNavigation /> */}
        <Splash />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
