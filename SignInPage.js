// SignInPage.js

import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const SignInPage = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have an Amazing Exploration!</Text>
      <View style={styles.content}>
        <Image
          source={require('./assets/images/getting-started-image.png')}
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <Text style={styles.signUpTitle}>Sign Up</Text>
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
          <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={() => console.log("Sign In Pressed")}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>Don't have an account? 
            <Text style={styles.createAccountLink}> Create Now</Text>
          </Text>
        </View>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 800,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#F8CE43', // Background color for the box background
    flexGrow: 1, // Allow the container to grow to fill the remaining space
    justifyContent: 'center', // Center children vertically
    borderTopLeftRadius: 30, // Round top left corner
    borderTopRightRadius: 30, // Round top right corner
    overflow: 'hidden', // Hide overflowing content
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Adjusted margin
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#F79F25',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
    elevation: 5, // Add elevation for shadow effect
  },
  signInButton: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountText: {
    textAlign: 'center',
    color: '#000',
    marginTop: 10, // Adjusted margin
  },
  createAccountLink: {
    color: '#DC622A',
  },
});

export default SignInPage;
