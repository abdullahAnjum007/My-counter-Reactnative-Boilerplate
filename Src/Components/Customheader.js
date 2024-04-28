import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Customheader = ({title, onpress, rightIcon, lefticon}) => {
  return (
    <View style={styles.container}>
      {lefticon ? (
        <TouchableOpacity onPress={onpress}>
          <Icon name={lefticon} size={25} color={BLACK} />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Text style={styles.headerText}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onpress}>
          <Icon name={rightIcon} size={25} color={BLACK} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Customheader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: BLACK,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
