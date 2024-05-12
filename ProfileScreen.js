import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button } from 'react-native';
import { getFirestore, collection, addDoc, getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth, firestore } from './firebaseConfig';
import HomeScreen from './HomeScreen';

ProfileScreen = () => {
  [firstName, setFirstName] = useState('');
  [lastName, setLastName] = useState('');
  [email, setEmail] = useState('');
  [phone, setPhone] = useState('');
  [profilePicUrl, setProfilePicUrl] = useState('');
  // [password, setPassword] = useState('**********');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('User data:', userData);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          // setEmail(userData.email);
          setPhone(userData.phone);
          if (userData.profile_pic) {
            setProfilePicUrl(userData.profile_pic);
          }
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('No user signed in!');
      }
    };
    fetchUserData();
  }, []);


  handleUpdateUserInfo = async () => {
    try {
      // Add user data to Firestore 
      const userData = {
        firstName: firstName,
        lastName: lastName,
        // email: email,
        phone: phone,
  
      };
      await updateDoc(doc(firestore, 'users', auth.currentUser.uid), userData);
    } catch (error) {
      console.error('Error updating user info: ', error);
    }
  }

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicBackgroundContainer} />
        <Image style={styles.avatar} source={{uri: profilePicUrl}} />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
           value={firstName}
           onChangeText={text => setFirstName(text)}
            />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
           value={lastName}
           editable={true}
           onChangeText={text => setLastName(text)} />
         { /* <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)} /> */ }
         <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={text => setPhone(text)}
          keyboardType="phone-pad" />
        { /* <Text style={styles.label}>Password</Text>
         <TextInput
           style={styles.input}
          value={password}
           onChangeText={text => setPassword(text)}
           secureTextEntry /> */}
           <Button title="Submit" style={styles.submit} onPress={handleUpdateUserInfo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    height: 150,
  },
  profilePicBackgroundContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: 'orange',
    width: '100%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'pink',
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  submit: {
    marginTop: 20
  }
});
export default ProfileScreen;