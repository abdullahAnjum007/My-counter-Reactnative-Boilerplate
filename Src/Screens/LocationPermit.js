import {
  KeyboardAvoidingView,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BLACK, WHITE} from '../Colors';
import {SHeight} from './StartScreen';
import CustomInput from '../Components/CustomInput';
import Icon from 'react-native-vector-icons/AntDesign';
import JustButton from '../Components/JustButton';
import ModalCstm from '../Components/ModalCstm';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setToken} from '../Redux/Auth';

const LocationPermit = () => {
  //for state modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('State');

  const optionsButton1 = ['Option 1A', 'Option 1B', 'Option 1C'];
  const optionsButton2 = ['Option 2A', 'Option 2B', 'Option 2C'];

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSelectOption = option => {
    setSelectedOption(option);
  };
  // for City modal
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('City');
  const handleOpenModal2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const handleSelectOption2 = option => {
    setSelectedOption2(option);
  };

  //ask locaiton permition
  useEffect(() => {
    requestLocationPermission();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Locaition Permission',
          message: 'we needs access to your Location ',

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('milgae locaiton');
      } else {
        console.log('kahan he locaiton de');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.main}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Text style={styles.Text1}>Event Venue Finder</Text>
          </View>
          <View style={styles.Section2}>
            <Text style={{color: BLACK, fontWeight: 500, fontSize: 24}}>
              Location Permission
            </Text>
            <View style={{width: '100%', marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 500,
                  marginVertical: 20,
                }}>
                Enter State
              </Text>
              <TouchableOpacity
                onPress={() => handleOpenModal()}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'black', fontSize: 20}}>
                  {selectedOption}
                </Text>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 500,
                  marginVertical: 20,
                }}>
                Enter City
              </Text>
              <TouchableOpacity
                onPress={() => handleOpenModal2()}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'black', fontSize: 20}}>
                  {selectedOption2}
                </Text>
                <Icon name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <JustButton
              onPress={() => dispatch(setToken('your_auth_token_here'))}
              title="Apply"
              textColor="white"
              bgColor="grey"
            />
          </View>
          <ModalCstm
            visible={modalVisible}
            options={optionsButton1}
            onSelect={handleSelectOption}
            onClose={handleCloseModal}
          />
          <ModalCstm
            visible={modalVisible2}
            options={optionsButton2}
            onSelect={handleSelectOption2}
            onClose={handleCloseModal2}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LocationPermit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  Text1: {
    color: WHITE,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 60,
  },
  main: {
    width: '100%',
    height: SHeight,
    alignItems: 'center',
  },
  Section2: {
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});
