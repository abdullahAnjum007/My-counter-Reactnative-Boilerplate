import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Customheader from '../Components/Customheader';
import Icon from 'react-native-vector-icons/Ionicons';
import {BLACK, WHITE} from '../Colors';
import {useNavigation} from '@react-navigation/native';

const citiesInPakistan = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Bahawalpur',
  'Sargodha',
  'Gujrat',
  'Jhang',
  'Sukkur',
  'Larkana',
  'Sheikhupura',
  'Rahim Yar Khan',
  'Mardan',
];

const Location = () => {
  const navigaiton = useNavigation();
  const [selectedOption, setselectedOption] = useState(null);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.item,
        {
          backgroundColor: selectedOption === item ? 'black' : 'white',
          borderColor: selectedOption === item ? 'white' : 'black',
        },
      ]}
      onPress={() => {
        setselectedOption(item);
      }}>
      <Text style={{color: selectedOption === item ? 'white' : 'black'}}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Customheader
        title={'Locaiton'}
        lefticon={'chevron-back'}
        onpress={() => navigaiton.goBack()}
      />
      <SafeAreaView style={styles.main}>
        <View style={styles.SearcBar}>
          <Icon name="search" size={22} color={BLACK} />
          <Text style={{marginHorizontal: 10}}>
            {selectedOption ? selectedOption : 'Search'}
          </Text>
        </View>
        <FlatList
          data={citiesInPakistan}
          renderItem={renderItem}
          keyExtractor={item => item}
          extraData={selectedOption} // Ensure the FlatList re-renders when the selectedCity changes
        />
      </SafeAreaView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  SearcBar: {
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  container: {
    backgroundColor: WHITE,
    flex: 1,
  },
  main: {
    width: '100%',
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
