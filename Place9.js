import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BookingScreen from './BookingScreen'; 

const Place9 = ({ route }) => {
  const navigation = useNavigation();

  const { placeName } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/Santo.jpg')} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{placeName}</Text>
          <Text style={styles.description}>
          Santo Domingo Church, formally known as the National Shrine of Our Lady of the Holy Rosary of La Naval de Manila, is a Roman Catholic national shrine and parish church in Quezon City, Metro Manila in the Philippines.
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back to Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('BookingScreen')}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginRight: 10, 
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Place9;