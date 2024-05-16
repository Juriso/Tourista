import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE799',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    marginTop: 5,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#F79F25',
  },
  buttonText: {
    color: '#2D2D2D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonMargin: {
    marginTop: 20,
  },
  infoButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#2D2D2D',
    marginBottom: 20,
  },
  closeModalButton: {
    backgroundColor: '#F79F25',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeModalButtonText: {
    color: '#2D2D2D',
    fontSize: 16,
  },
});
