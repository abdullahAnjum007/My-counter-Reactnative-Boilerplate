// JustButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const JustButton = ({onPress, title, textColor, bgColor}) => {
  const buttonStyle = {
    backgroundColor: bgColor || '#3498db', // Use provided bgColor or default to '#3498db'
  };

  const textStyle = {
    color: textColor || '#fff', // Use provided textColor or default to '#fff'
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    width: '90%',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default JustButton;
