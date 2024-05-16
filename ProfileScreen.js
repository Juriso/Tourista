import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, collection, addDoc, getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth, firestore, storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import ref, uploadBytes, and getDownloadURL
import Toast from 'react-native-toast-message';
import { profile } from '@tensorflow/tfjs';
import { set } from 'firebase/database';

ProfileScreen = ({ navigation }) => {
  const isFocused = useIsFocused(); // Hook to check if screen is focused
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('https://firebasestorage.googleapis.com/v0/b/cloudfinalproj-85441.appspot.com/o/profile_pics%2Fno_profile_pic.png?alt=media');
  // [password, setPassword] = useState('**********');

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
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

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace('Splash'); // Navigate to login screen after logout
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };


  useEffect(() => {
    fetchUserData();
    if (isFocused) {
      fetchUserData();
    }
  }, []);


  handleUpdateUserInfo = async () => {
    if (firstName === "") {
      Toast.show({
        type: 'error',
        text1: 'Updating failed',
        text2: 'First name must not be empty',
      });
      return;
    }

    if (lastName === "") {
      Toast.show({
        type: 'error',
        text1: 'Updating failed',
        text2: 'Last name must not be empty',
      });
      return;
    }

    if (phone === "") {
      Toast.show({
        type: 'error',
        text1: 'Updating failed',
        text2: 'Phone number must not be empty',
      });
      return;
    }

    if (phone.match(/[^+\d]+/g) || (phone.charAt(0) === "0" && phone.length != 11) || (phone.substring(0, 3) === "+63" && phone.length != 13)) {
      Toast.show({
        type: 'error',
        text1: 'Updating failed',
        text2: 'Phone number must be valid',
      });
      return;
    }

    Toast.show({
      type: 'info',
      text1: 'Updating Info',
      text2: 'Updating Info. Please wait!',
    });
    try {
      // Add user data to Firestore 
      const userData = {
        firstName: firstName,
        lastName: lastName,
        // email: email,
        phone: phone,
  
      };
      await updateDoc(doc(firestore, 'users', auth.currentUser.uid), userData);
      Toast.show({
        type: 'success',
        text1: 'Updating done',
        text2: 'Updated info successfully!',
      });
    } catch (error) {
      console.error('Error updating user info: ', error);
      Toast.show({
        type: 'failed',
        text1: 'Updating failed',
        text2: 'Updating info failed',
      });
    }
  }

  const changeProfilePicture = async (imageUri) => {
    try {
      const uploadedImage = await uploadImageToFirebase(imageUri);
      console.log("Download URL in profile function: " + uploadedImage);
      if (uploadedImage) {
        const userData = {
          profile_pic: uploadedImage
        };
        await updateDoc(doc(firestore, 'users', auth.currentUser.uid), userData);
        Toast.show({
          type: 'success',
          text1: 'Profile Updated',
          text2: 'Profile picture updated successfully!',
        });
        setProfilePicUrl(uploadedImage);
      }
    } catch (error) {
      console.error('Error updating profile picture: ', error);
      Toast.show({
        type: 'error',
        text1: 'Upload Failed',
        text2: 'Failed to update the profile picture',
      });
    }
  }

  const uploadImageToFirebase = async (imageUri) => {
    Toast.show({
      type: 'info',
      text1: 'Uploading',
      text2: 'Uploading image. Please wait.',
    });
    try {
      const fileExtension = imageUri.split('.').pop();
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const storageRef = ref(storage, 'profile_pics/' + auth.currentUser.uid + "." + fileExtension ); // Use ref function with storage object
      await uploadBytes(storageRef, blob); // Upload the blob to the storage reference
      console.log('Image uploaded successfully!');
      const downloadUrl = await getDownloadURL(storageRef); // Get the download URL for the uploaded image
      console.log('Download URL:', downloadUrl);
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };


  const handleProfilePicPress = async () => {
    Alert.alert(
      'Change Profile Picture',
      'Choose an option',
      [
        {
          text: 'Gallery',
          onPress: () => chooseImageFromGallery(),
        },
        {
          text: 'Camera',
          onPress: () => takePhotoFromCamera(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const chooseImageFromGallery = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      changeProfilePicture(result.assets[0].uri);
    }
  };

  const takePhotoFromCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });


    if (!result.cancelled) {
      changeProfilePicture(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicBackgroundContainer} />
        <TouchableOpacity onPress={handleProfilePicPress}>
        <Image style={styles.avatar} source={{uri: profilePicUrl}} />
        </TouchableOpacity>
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
           <View style={styles.submitContainer}>
            <Button title="Submit" color="orange" onPress={handleUpdateUserInfo} />
          </View>
          <View style={styles.logout}>
            <Button title="Logout" color="orange" onPress={handleLogout} />
          </View>
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
    height: '75%',
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
    bottom: -75,
    borderWidth: 2,
    borderColor: "red"
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
  submitContainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: 125,
  },
  logout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
export default ProfileScreen;