// CreateAccountPage.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import styles from './CreateAccountPageStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { firestore, auth } from './firebaseConfig';

const CreateAccountPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Send email verification
      await sendEmailVerification(auth.currentUser);
  
      // Notify user that account is successfully created
      Alert.alert(
        'Account Created',
        'Your account has been successfully created. Please check your email for verification.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SignInPage') // Navigate to SignInPage
          }
        ],
        { cancelable: false }
      );

      // Save user data to Firestore after successful email verification
      await addDoc(collection(firestore, 'users'), {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
    } catch (error) {
      console.error('Error creating account: ', error);
      Alert.alert(
        'Error',
        'An error occurred while creating your account. Please try again later.'
      );
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
        <View style={styles.nameContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            placeholderTextColor="#aaa"
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput2]}
            placeholder="Last Name"
            placeholderTextColor="#aaa"
            onChangeText={(text) => setLastName(text)}
          />
        </View>
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
        <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.createAccountText}>Already have an account? 
          <Text style={styles.SignInLink} onPress={() => navigation.navigate('SignInPage')}> Log In</Text>
        </Text>
      </View>
    </View>
  </View>
  );
};

export default CreateAccountPage;
