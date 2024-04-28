import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Customheader from '../Components/Customheader';
import {BLACK, WHITE} from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    pic: 'image1.jpg',
    name: 'Restaurant 1',
    address: '123 Main St, City, Country',
    price: '$$',
    rating: 4.5,
    phoneNumber: '+1234567890',
  },
  {
    pic: 'image2.jpg',
    name: 'Restaurant 2',
    address: '456 Elm St, City, Country',
    price: '$$$',
    rating: 3.0,
    phoneNumber: '+1987654321',
  },
  {
    pic: 'image2.jpg',
    name: 'Restaurant 3',
    address: '456 Elm St, City, Country',
    price: '$$$',
    rating: 4.4,
    phoneNumber: '+1987654321',
  },
  {
    pic: 'image2.jpg',
    name: 'Restaurant 4',
    address: '456 Elm St, City, Country',
    price: '$$$',
    rating: 4.2,
    phoneNumber: '+1987654321',
  },
];

const Venues = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const handleitemPress = () => navigation.navigate('VD');
  //bhai function smjho component samjho tmhari mrzi
  const RenderItem = ({item}) => (
    <TouchableOpacity
      style={{alignSelf: 'center', margin: 10}}
      onPress={handleitemPress}>
      <Image source={require('../../Assets/Image/venue.png')} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{color: 'black'}}>{item.address}</Text>
          <Text style={{color: 'black', fontWeight: '700'}}>
            {item.price} per day
          </Text>
          <View></View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={22} color={BLACK} />
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  //ye main he uper wala bss component he
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Customheader
          title={'Venues'}
          lefticon={'chevron-back'}
          onpress={() => navigation.goBack()}
        />
      </SafeAreaView>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={22} color={BLACK} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Venues;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: BLACK,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
