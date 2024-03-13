// LoginScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SignInPage from './SignInPage'; // Import the SignInPage component

const LoginScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Navigate to the SignInPage when Sign In button is pressed
    navigation.navigate('SignInPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have an Amazing Exploration!</Text>
      <View style={styles.content}>
        <Image
          source={require('./assets/images/getting-started-image.png')}
          style={styles.image}
        />
        <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={() => console.log("Create Account Pressed")}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'K2D-Bold',
    fontWeight: 'bold',
    color: '#F79F25',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 800,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
    elevation: 5, // Add elevation for shadow effect
  },
  signInButton: {
    backgroundColor: '#F79F25',
    width: 200, // Set fixed width
  },
  createAccountButton: {
    backgroundColor: '#F79F25',
    width: 200, // Set fixed width
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
