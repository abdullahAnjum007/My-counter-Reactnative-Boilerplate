import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {BLACK} from '../Colors';

const CustomInput = ({placeholder, secureTextEntry, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 40,

    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    // marginBottom: 10,
    width: '99%',
    // fontSize: 20,
    height: 49,
    color: BLACK,
  },
});

export default CustomInput;
