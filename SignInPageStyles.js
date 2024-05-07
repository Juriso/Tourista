// SignInPageStyles.js

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
    marginTop: 10,
  },
  createAccountLink: {
    color: '#DC622A',
    textDecorationLine: 'underline',
  },
  forgotPasswordLinkContainer: {
    alignSelf: 'flex-end',
  },
  forgotPasswordLink: {
    color: '#DC622A',
    textDecorationLine: 'underline',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalView: {
    backgroundColor: '#F8CE43', // Background color for the modal box
    borderRadius: 10, // Rounded corners
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  modalButton: {
    backgroundColor: '#DC622A', // Change button color to blend with modal box
    paddingVertical: 12, // Adjust button height
    paddingHorizontal: 30, // Adjust button width
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
