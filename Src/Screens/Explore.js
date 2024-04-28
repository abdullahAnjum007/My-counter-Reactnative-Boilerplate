import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Customheader from '../Components/Customheader';
import {BLACK, WHITE} from '../Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Explore = () => {
  const [searchText, setSearchText] = useState('');
  const navigaiton = useNavigation();

  return (
    <>
      <Customheader
        title={'Explore'}
        lefticon={'chevron-back'}
        onpress={() => navigaiton.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={22} color={BLACK} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text>Explore</Text>
          {/* Add more content here */}
        </View>
      </View>
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: WHITE,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: BLACK,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  contentContainer: {
    // Add styles for your content container as needed
  },
});
