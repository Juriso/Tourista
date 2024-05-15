// SignInPage.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert, Modal, Button } from 'react-native';
import styles from './SignInPageStyles';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { firestore, db } from './firebaseConfig';


const SignInPage = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccountPage');
  };

  const handleLogIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser.emailVerified) {
        Alert.alert(
          'Email not verified',
          'The email registered hasn\'t verified yet.\nNo email received? Check your spam folder or click "Resend" to send it again',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed')
            },
            {
              text: 'Resend',
              onPress: () => {
                sendEmailVerification(auth.currentUser);
                signOut(auth.currentUser);
              }
            }
          ]
        );
        return;
      }

      const userQuery = query(collection(firestore, 'users'), where('email', '==', email));
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) {
        Alert.alert(
          'User not found',
          'The email address provided is not registered. Do you want to create an account?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            {
              text: 'Create Account',
              onPress: () => navigation.navigate('CreateAccountPage')
            }
          ]
        );
        return;
      }

      const user = auth.currentUser;
      let userType;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
           userType = userData.user_type;
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('No user signed in!');
      }

      if (userType === 'admin') {
        navigation.navigate('Admin');
      } else {
        navigation.navigate('MainScreen');
      }

    } catch (error) {
      console.error('Error signing in: ', error);
      if (error.code.match('auth/invalid-credential') || error.code.match('auth/user-not-found') || error.code.match('auth/missing-password')) {
        Alert.alert(
          'Incorrect Credentials',
          'The email or password provided is incorrect. Please try again.'
        );
      } else {
        Alert.alert(
          'Error',
          'An error occurred while signing in. Please try again later.'
        );
      }
    }
  };      

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      Alert.alert(
        'Password Reset Email Sent',
        'Please check your email inbox for further instructions.'
      );
      setShowForgotPasswordModal(false);
    } catch (error) {
      console.error('Error sending password reset email: ', error);
      Alert.alert(
        'Error',
        'An error occurred while sending password reset email. Please try again later.'
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
            <TouchableOpacity onPress={() => setShowForgotPasswordModal(true)} style={styles.forgotPasswordLinkContainer}>
              <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
            </TouchableOpacity>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showForgotPasswordModal}
        onRequestClose={() => setShowForgotPasswordModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Forgot Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              onChangeText={(text) => setResetEmail(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Button title="Cancel" onPress={() => setShowForgotPasswordModal(false)} />
              <Button title="Reset Password" onPress={handleForgotPassword} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignInPage;
