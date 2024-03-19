// BookingScreen.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native'; // Import ScrollView from react-native

const { width } = Dimensions.get('window');

const BookingScreen = () => {
  const images = [
    require('./assets/images/qc.jpg'),
    require('./assets/images/qc.jpg'),
    require('./assets/images/qc.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('./assets/images/qc.jpg')} style={styles.topImage} resizeMode="cover" />
      </View>
      <Text style={styles.cityLabel}>Quezon City</Text>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search for places in Quezon City" />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Quezon City is the largest city in Metro Manila by land area and population. It has a wide variety of places to visit and things to do.
        </Text>
      </View>
      <ScrollView horizontal style={styles.carouselContainer}>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/cimg1.jpg')} />
          <Text style={styles.carouselText}>Quezon Memorial Circle</Text>
        </View>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/cimg2.jpg')} />
          <Text style={styles.carouselText}>Art in Island</Text>
        </View>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/cimg3.jpg')} />
          <Text style={styles.carouselText}>La Mesa Ecopark</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topImageContainer: {
    position: 'relative',
    width: '100%',
    height: 200, // Adjust height as needed
  },
  topImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'center',
  },
  searchBarContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cityLabel: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DC622A',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 3,
  },
  carouselContainer: {
    marginBottom: 10,
    height: 300, // Adjust height as needed
  },
  carouselItem: {
    marginRight: 10,
    marginTop: 10,
  },
  carouselImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  carouselText: {
    marginTop: 5,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: '#F79F25',
    padding: 10,
    width: 150, // Adjust width as needed
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookingScreen;
