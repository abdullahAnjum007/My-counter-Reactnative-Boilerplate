import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BLACK, WHITE} from '../Colors';
import MainNavigation from '../Navigation/MainNavigation';

const RealSplash = () => {
  return (
    <View style={styles.realcontainer}>
      <Text style={styles.realtext}>Event Venue Finder</Text>
    </View>
  );
};

const Splash = () => {
  const [isSplash, setisSplash] = useState(true);
  //   const timeoutId = setTimeout(() => {
  //     setisSplash(false);
  //   }, 3000);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setisSplash(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return isSplash ? <RealSplash /> : <MainNavigation />;
};

export default Splash;

const styles = StyleSheet.create({
  realcontainer: {
    flex: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  realtext: {
    color: WHITE,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
