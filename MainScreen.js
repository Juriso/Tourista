// MainScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator'; // Import the BottomTabNavigator component

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <BottomTabNavigator/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
