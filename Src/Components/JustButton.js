// JustButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const JustButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default JustButton;
