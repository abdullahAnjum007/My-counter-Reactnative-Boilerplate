import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default store;
