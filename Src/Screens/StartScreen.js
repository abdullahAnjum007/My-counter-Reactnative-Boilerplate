import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../Colors';
import {useNavigation} from '@react-navigation/native';

export const {height: SHeight, width: SWidth} = Dimensions.get('window');

const StartScreen = () => {
  const navigation = useNavigation();
  const handleOnpress = () => {
    navigation.navigate('loginSignin');
    // console.log('maroo mujhe maroo');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BLACK} barStyle={'light-content'} />
      <Text style={styles.Text1}>Event Venue Finder</Text>
      <View style={{marginVertical: 10}} />
      <Text style={styles.text2}>Your dream Event, one app away.</Text>
      <Text style={styles.text2}>Discover, connect, and create your day!</Text>
      <TouchableOpacity style={styles.BtnContainer} onPress={handleOnpress}>
        <Text style={styles.BtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: WHITE,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: WHITE,
    fontSize: 20,
    textAlign: 'center',
  },
  BtnContainer: {
    backgroundColor: WHITE,
    width: SWidth * 0.9,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 90,
  },
  BtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: BLACK,
  },
});
