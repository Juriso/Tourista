// SignInPage.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from './SignInPageStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

const SignInPage = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccountPage');
  };

  const handleLogIn = async () => {
    try {
      // Check if the email exists in Firestore
      const userQuery = query(collection(firestore, 'users'), where('email', '==', email));
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        throw new Error('User not found');
      }
  
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      
      navigation.navigate('MainScreen');
    } catch (error) {
      console.error('Error signing in: ', error);
      if (error.message === 'User not found') {
        Alert.alert(
          'Error',
          'The email address provided is not registered. Please sign up first.'
        );
      } else {
        Alert.alert(
          'Error',
          'Incorrect email or password. Please try again.'
        );
      }
    }
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
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
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
