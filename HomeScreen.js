import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi User, Where would you like to go?</Text>
        <Image style={styles.profilePic} source={require('./assets/images/profilePic.png')} />
      </View>
      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={require('./assets/images/searchIcon.png')} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.buttonIcon} source={require('./assets/images/Travel.png')} />
          <Text style={styles.buttonText}>Travel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.buttonIcon} source={require('./assets/images/restaurant.png')} />
          <Text style={styles.buttonText}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.buttonIcon} source={require('./assets/images/hotel.png')} />
          <Text style={styles.buttonText}>Hotel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seeAllContainer}>
        <Text style={styles.seeAllText}>See All</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.carouselContainer}>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/circle.jpg')} />
          <Text style={styles.carouselText}>Quezon Memorial Circle</Text>
        </View>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/Art.jpg')} />
          <Text style={styles.carouselText}>Art in Island</Text>
        </View>
        <View style={styles.carouselItem}>
          <Image style={styles.carouselImage} source={require('./assets/images/La.jpg')} />
          <Text style={styles.carouselText}>La Mesa Ecopark</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  seeAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  seeAllText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  seeAllButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselItem: {
    marginRight: 10,
  },
  carouselImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  carouselText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
