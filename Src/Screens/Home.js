import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Customheader from '../Components/Customheader';
import Icon from 'react-native-vector-icons/Ionicons';
import {BLACK, WHITE} from '../Colors';
import {useNavigation} from '@react-navigation/native';

const data = [
  {key: '1', image: require('../../Assets/Image/Group.png')},
  {key: '2', image: require('../../Assets/Image/Group.png')},
  {key: '3', image: require('../../Assets/Image/Group.png')},
  {key: '4', image: require('../../Assets/Image/Group.png')},
  // Add more data items as needed
];
const data2 = [
  {key: '1', image: require('../../Assets/Image/Rectangle.png')},
  {key: '2', image: require('../../Assets/Image/Rectangle.png')},
  {key: '3', image: require('../../Assets/Image/Rectangle.png')},
  {key: '4', image: require('../../Assets/Image/Rectangle.png')},
  // Add more data items as needed
];
//recomended
const Recomended = ({item}) => {
  return (
    <>
      <TouchableOpacity style={{alignSelf: 'center', marginHorizontal: 10}}>
        <Image source={item.image} />
      </TouchableOpacity>
    </>
  );
};

//venues near me
const Venues = ({item}) => {
  return (
    <TouchableOpacity style={styles.cards}>
      <Image style={styles.cardImage} source={item.image} />
      <View style={{padding: 10}}>
        <Text style={{fontWeight: 'bold', color: BLACK}}>
          The Grand Ballroom
        </Text>
        <Text style={{color: BLACK}}>3476 Conifer Drive</Text>
        <Text style={{fontWeight: 'bold', color: BLACK}}>₹ 10,000 per day</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const navigaiton = useNavigation();
  const handleLocaitonPress = () => {
    navigaiton.navigate('Location');
  };
  const HandleSeeAllpress = () => navigaiton.navigate('Venues');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Customheader
          title={'EVF'}
          onpress={handleLocaitonPress}
          rightIcon={'location'}
        />
      </SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.SearcBar}>
          <Icon name="search" size={22} color={BLACK} />
          <Text style={{marginHorizontal: 10}}>Search</Text>
        </View>
        <Text style={styles.Heading}>Recomended</Text>
        <FlatList
          horizontal
          data={data}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Recomended item={item} />}
          keyExtractor={item => item.key}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.Heading}>Venues near you</Text>
          <TouchableOpacity
            onPress={() => {
              HandleSeeAllpress();
            }}>
            <Text style={styles.Heading}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Venues item={item} />}
          keyExtractor={item => item.key}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.Heading}>Catering Services</Text>
          <TouchableOpacity
            onPress={() => {
              HandleSeeAllpress();
            }}>
            <Text style={styles.Heading}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={data2}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Venues item={item} />}
          keyExtractor={item => item.key}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  SearcBar: {
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  Heading: {
    fontSize: 20,
    color: BLACK,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  main: {
    padding: 10,
    marginBottom: 60,
  },
  cards: {
    margin: 10,
    width: 170,
    // height: 260,
    // borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardImage: {
    marginTop: 9,
    alignSelf: 'center',
    resizeMode: 'cover',
    aspectRatio: 0.9,
    borderRadius: 5,
  },
});
