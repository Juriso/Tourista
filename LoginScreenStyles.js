// LoginScreenStyles.js

import { StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 800,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
    elevation: 5, // Add elevation for shadow effect
  },
  signInButton: {
    backgroundColor: '#F79F25',
    width: 300, // Set fixed width
  },
  createAccountButton: {
    backgroundColor: '#F79F25',
    width: 300, // Set fixed width
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
