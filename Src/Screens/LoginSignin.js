import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../Colors';
import {SHeight, SWidth} from './StartScreen';
import CustomInput from '../Components/CustomInput';
import JustButton from '../Components/JustButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const LoginSignin = () => {
  const navigaiton = useNavigation();
  const handleLoginpress = () => {
    navigaiton.navigate('SignUp');
  };
  const SignInPress = () => {
    navigaiton.navigate('LocationPermit');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <StatusBar backgroundColor={BLACK} barStyle={'light-content'} />
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            //   backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            // height: SHeight * 0.4,
          }}>
          <Text style={styles.Text1}>Event Venue Finder</Text>
        </View>
        {/*  login signin wala section */}

        <View style={styles.section2}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '500',
              marginVertical: 10,
              color: BLACK,
            }}>
            Welcome to Wed Hive!
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                alignItems: 'center',
                color: BLACK,
                alignItems: 'center',
              }}>
              Don’t have an account?{''}
            </Text>
            <TouchableOpacity onPress={handleLoginpress}>
              <Text style={{color: 'grey', alignSelf: 'center'}}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignSelf: 'flex-start'}}>
            <Text
              style={{
                color: BLACK,
                fontSize: 20,
                fontWeight: 500,
                marginVertical: 15,
              }}>
              Login
            </Text>
          </View>
          <CustomInput placeholder={'Email, Phone & username'} />
          <CustomInput placeholder={'Password'} secureTextEntry={true} />
          <View style={{alignSelf: 'flex-start'}}>
            <Text
              style={{
                color: BLACK,
                fontSize: 20,
                fontWeight: 500,
                marginVertical: 15,
              }}>
              Forgot Password?
            </Text>
          </View>
          <JustButton
            onPress={SignInPress}
            title="Sign In"
            textColor="white"
            bgColor="grey"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginSignin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    height: SHeight,
    width: '100%',
    flexDirection: 'column',
  },
  Text1: {
    color: WHITE,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 60,
  },
  section2: {
    backgroundColor: WHITE,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
