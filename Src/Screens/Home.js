import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import JustButton from '../Components/JustButton';
import {decrement, increment} from '../Redux/CounterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  console.log(counter);
  return (
    <View style={styles.container}>
      <View style={styles.NumberContainer}>
        <Text style={{color: '#3498db', fontWeight: 'bold', fontSize: 24}}>
          {counter.value}
        </Text>
      </View>
      <Icon name="number" size={50} color="#3498db" />
      <View style={styles.buttonContainer}>
        <JustButton
          title={'+'}
          onPress={() => {
            dispatch(increment());
          }}
        />
        <JustButton
          title={'-'}
          onPress={() => {
            dispatch(decrement());
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
  NumberContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
