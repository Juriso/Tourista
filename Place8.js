import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BookingScreen from './BookingScreen'; 

const Place8 = ({ route }) => {
  const navigation = useNavigation();

  const { placeName } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/mary.jpg')} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{placeName}</Text>
          <Text style={styles.description}>
          The Shrine of Mary, Queen of Peace, Our Lady of EDSA, or more popularly, the EDSA Shrine is a small church of the Roman Catholic Archdiocese of Manila located at the intersection of Ortigas Avenue and Epifanio de los Santos Avenue in Barangay Ugong Norte, Quezon City.
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

export default Place8;