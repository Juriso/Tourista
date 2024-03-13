// SplashScreen.js

import React, { useEffect, useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './AppContext'; // Import the AppContext

const SplashScreen = () => {
  const navigation = useNavigation();
  const { splashShown, setSplashShown } = useContext(AppContext);

  useEffect(() => {
    if (!splashShown) {
      setTimeout(() => {
        navigation.replace('Home');
        setSplashShown(true);
      }, 3000);
    } else {
      navigation.replace('Home');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/tourista.gif')}
        style={styles.image}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change background color if needed
  },
  image: {
    width: 200, // Adjust image dimensions as needed
    height: 200,
    resizeMode: 'contain', // Adjust the resize mode as needed
  },
  text: {
    marginTop: 20, // Adjust spacing between image and text as needed
    fontSize: 18, // Adjust text size as needed
    fontWeight: 'bold', // Adjust font weight as needed
  },
});

export default SplashScreen;
