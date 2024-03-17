// CreateAccountPage.js

import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from './CreateAccountPageStyles'; // Import the stylesheet

const CreateAccountPage = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const handleSignInPage = () => {
    // Navigate to the SignInPage when "Log In" is pressed
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
        <View style={styles.formContainer}>
          <View style={styles.nameContainer}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="First Name"
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={[styles.input, styles.halfInput2]}
              placeholder="Last Name"
              placeholderTextColor="#aaa"
            />
          </View>
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
          <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={() => console.log("Create Account Pressed")}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>Already have an account? 
            <Text style={styles.SignInLink} onPress={handleSignInPage}> Log In</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreateAccountPage;
