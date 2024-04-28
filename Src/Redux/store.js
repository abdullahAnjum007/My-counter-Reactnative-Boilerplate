import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import authReducer from './Auth';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: authReducer,
  },
});

export default store;
