import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

ProfileScreen = () => {
  [firstName, setFirstName] = useState('Julius Alvin');
  [lastName, setLastName] = useState('Baquiran');
  [email, setEmail] = useState('couchpotato@gmail.com');
  [phone, setPhone] = useState('09925585065');
  [password, setPassword] = useState('**********');

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicBackgroundContainer} />
        <Image style={styles.avatar} source={require('./assets/images/profile_pic.png')} />
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
         <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)} />
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
});
export default ProfileScreen;