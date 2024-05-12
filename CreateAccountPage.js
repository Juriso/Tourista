import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { collection, addDoc, doc, setDoc} from 'firebase/firestore'; 
import { Snackbar } from 'react-native-paper';
import { firestore, auth } from './firebaseConfig';
import styles from './CreateAccountPageStyles';
import { navigate } from './SignInPage'; // Import navigate function from your navigation file

const CreateAccountPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false); // New state variable
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    // Track requirements
    let requirements = [];
    if (!/(?=.*[A-Z])/.test(password)) {
      requirements.push('uppercase character');
    }
    if (!/(?=.*\d)/.test(password)) {
      requirements.push('number');
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      requirements.push('special character');
    }
    if (password.length < 8) {
      requirements.push('8 characters');
    }
    
    if (requirements.length === 0) {
      return true; // All requirements met
    } else {
      return `Password is missing: ${requirements.join(', ')}`;
    }
  };

  // Function to handle password input change
  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(isValidPassword(text)); // Update isPasswordValid state
  };

  const handleCreateAccount = async () => {
    // Check for missing fields
    const missingFields = [];
    if (!firstName) missingFields.push('First Name');
    if (!lastName) missingFields.push('Last Name');
    if (!email) missingFields.push('Email');
    if (!password) missingFields.push('Password');
  
    if (missingFields.length > 0) {
      // Construct error message specifying missing fields
      const errorMessage = `Please fill out the following field(s): ${missingFields.join(', ')}.`;
      setSnackbarMessage(errorMessage);
      setSnackbarVisible(true);
      return;
    }
  
    // Check for valid email format
    if (!isValidEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarVisible(true);
      return;
    }
  
    // Check for valid password format
    const passwordValidationResult = isValidPassword(password);
    if (typeof passwordValidationResult === 'string') {
      // Password requirements not met
      setSnackbarMessage(passwordValidationResult);
      setSnackbarVisible(true);
      return;
    }
  
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Get the user ID from the user credential 
      const userId = userCredential.user.uid;
  
      // Send email verification
      await sendEmailVerification(auth.currentUser);
  
      // Display success message
      setSnackbarMessage('Your account has been successfully created. Please check your email for verification.');
      setSnackbarVisible(true);
  
      // Add user data to Firestore 
      const userData = {
        firstName,
        lastName,
        email,
        phone: ""
      };
      await setDoc(doc(firestore, 'users', userId), userData);
      // Navigate to SignInPage upon successful account creation
      navigation.navigate('SignInPage'); // Updated navigation here
    } catch (error) {
      console.error('Error creating account: ', error);
      if (error.code === 'auth/email-already-in-use') {
        setSnackbarMessage('The email address is already in use. Please use a different email.');
      } else {
        setSnackbarMessage('An error occurred while creating your account. Please try again later.');
      }
      setSnackbarVisible(true);
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
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              onChangeText={handlePasswordChange} // Pass the handler function
            />
            <TouchableOpacity
              style={styles.passwordToggle}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                source={showPassword ? require('./assets/images/hide-password.png') : require('./assets/images/show-password.png')}
                style={styles.passwordToggleIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>Already have an account? 
            <Text style={styles.SignInLink} onPress={() => navigation.navigate('SignInPage')}> Log In</Text>
          </Text>
        </View>
      </View>
      <Snackbar
         visible={snackbarVisible}
         onDismiss={() => setSnackbarVisible(false)}
         duration={Snackbar.DURATION_SHORT}
        >
        {snackbarMessage}
        </Snackbar>
    </View>
  );
};

export default CreateAccountPage;
