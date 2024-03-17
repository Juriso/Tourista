// SignInPage.js

import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from './SignInPageStyles'; // Import the styles from the new file

const SignInPage = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const handleCreateAccount = () => {
    // Navigate to the CreateAccountPage when "Create Now" is pressed
    navigation.navigate('CreateAccountPage');
  };

  const handleLogIn = () => {
    // Navigate to the HomeScreen when "Log In" is pressed
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have an Amazing Exploration!</Text>
      <View style={styles.content}>
        <Image
          source={require('./assets/images/getting-started-image.png')}
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <Text style={styles.signUpTitle}>Log In</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={handleLogIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>
            Don't have an account?{' '}
            <Text style={styles.createAccountLink} onPress={handleCreateAccount}>Create Now</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInPage;
