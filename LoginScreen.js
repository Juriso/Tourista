// LoginScreen.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './LoginScreenStyles'; // Import the styles from the new file

const LoginScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Navigate to the SignInPage when Sign In button is pressed
    navigation.navigate('SignInPage');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccountPage');
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
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={(handleCreateAccount)}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
