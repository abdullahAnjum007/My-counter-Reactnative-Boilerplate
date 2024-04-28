import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {BLACK, WHITE} from '../Colors';
import Customheader from '../Components/Customheader';
import {useNavigation} from '@react-navigation/native';
import {SHeight} from './StartScreen';
import Icons from 'react-native-vector-icons/Entypo';

const VenueDetails = () => {
  //for call
  const handleCallPress = () => {
    const phoneNumber = '0340-2582085';

    Linking.openURL(`tel:${phoneNumber}`);
  };
  // for message
  const handleMessagePress = () => {
    const phoneNumber = '0340-2582085';

    const message = 'Hi, there this is thomas hill';

    Linking.openURL(`sms:${phoneNumber}&body=${message}`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Customheader
          title={'Venues'}
          lefticon={'chevron-back'}
          onpress={() => navigation.goBack()}
        />
      </SafeAreaView>
      <ScrollView style={{alignSelf: 'center', margin: 10}}>
        <Image
          source={require('../../Assets/Image/venue.png')}
          style={{alignSelf: 'center'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>any name</Text>
            <Text style={{color: 'black'}}>addresss</Text>
            <Text style={{color: 'black', fontWeight: '700'}}>
              any price per day
            </Text>
            <View></View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={22} color={BLACK} />
            <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
              any rating
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Week Day Price
          </Text>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Rs. 100,000
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Week Day Price
          </Text>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Rs. 150,000
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            About
          </Text>
          <Text style={{color: 'black', fontSize: 17, marginVertical: 10}}>
            The Grand Ballroom is the epitome of elegance and sophistication,
            the perfect canvas for your fairytale wedding. With its opulent
            chandeliers, high ceilings, and luxurious decor, this venue sets the
            stage for a truly grand celebration. Located in the heart of the
            city, it offers both convenience and glamour, making it a coveted
            choice for discerning couples.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          // borderWidth: 1,
          position: 'absolute',
          bottom: 0,
          height: SHeight * 0.08,
          width: '100%',
          elevation: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={handleMessagePress}
          style={{
            backgroundColor: 'black',
            width: '55%',
            height: '70%',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icons name="message" size={29} color={WHITE} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 8,
            }}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCallPress}
          style={{
            borderWidth: 1,
            width: '30%',
            height: '70%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="call-outline" size={29} />
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              marginHorizontal: 8,
            }}>
            Call
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VenueDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
