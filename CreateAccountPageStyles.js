// CreateAccountPageStyles.js

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
    backgroundColor: '#F8CE43',
    flexGrow: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  createAccountButton: {
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
    marginTop: 10,
  },
  SignInLink: {
    color: '#DC622A',
    textDecorationLine: 'underline',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  halfInput: {
    flex: 1,
    marginRight: 5, // Adjust margin to ensure equal size
  },
  halfInput2: {
    flex: 1,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  passwordInput: {
    backgroundColor: '#fff',
    padding: 15,
    paddingLeft: 40, // Adjust to accommodate the icon
    borderRadius: 5,
  },
  passwordToggleIcon: {
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: [{ translateY: -50 }], // Center vertically
    width: 24, // Adjust the width as needed
    height: 24, // Adjust the height as needed
    resizeMode: 'contain',
  },
});

export default styles;
