import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Locations = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleLocationPress = (itemName) => {
    switch (itemName) {
      case 'Quezon Memorial Circle':
        navigation.navigate('Place1', { placeName: 'Quezon Memorial Circle' });
        break;
      case 'Art in Island':
        navigation.navigate('Place2', { placeName: 'Art in Island' });
        break;
      case 'La Mesa Ecopark':
        navigation.navigate('Place3', { placeName: 'La Mesa Ecopark' });
        break;
      case 'Smart Araneta Coliseum':
        navigation.navigate('Place4', { placeName: 'Smart Araneta Coliseum' });
        break;
      case 'Real Monasterio ​de Santa Clara de Manila':
        navigation.navigate('Place5', { placeName: 'Real Monasterio ​de Santa Clara de Manila' });
        break;
      case 'Sining Kamalig':
        navigation.navigate('Place6', { placeName: 'Sining Kamalig' });
        break;
      case 'Minor Basilica':
        navigation.navigate('Place7', { placeName: 'Minor Basilica'});
        break;
      case 'Archdiocesan Shrine of Mary':
        navigation.navigate('Place8', { placeName: 'Archdiocesan Shrine of Mary'});
        break;
      case 'Santo Domingo Church':
        navigation.navigate('Place9', { placeName: 'Santo Domingo Church'});
        break;
      case 'The Sunken Garden':
        navigation.navigate('Place10', { placeName: 'The Sunken Garden'});
        break;
      default:
        break;
    }
  };

  const filteredLocations = searchText
    ? locations.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    : locations;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <Image source={require('./assets/images/searchIcon.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.locationsContainer}>
          {filteredLocations.map((itemName, index) => (
            <TouchableOpacity key={index} onPress={() => handleLocationPress(itemName)}>
              <View style={styles.locationItem}>
                <Image style={styles.locationImage} source={locationImages[itemName]} />
                <Text style={styles.locationText}>{itemName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const locations = ['Quezon Memorial Circle', 'Art in Island', 'La Mesa Ecopark', 'Smart Araneta Coliseum', 'Real Monasterio ​de Santa Clara de Manila', 'Sining Kamalig', 'Minor Basilica', 'Archdiocesan Shrine of Mary', 'Santo Domingo Church', 'The Sunken Garden' ];
const locationImages = {
  'Quezon Memorial Circle': require('./assets/images/circle.jpg'),
  'Art in Island': require('./assets/images/Art.jpg'),
  'La Mesa Ecopark': require('./assets/images/La.jpg'),
  'Smart Araneta Coliseum': require('./assets/images/Araneta.png'),
  'Real Monasterio ​de Santa Clara de Manila': require('./assets/images/Real.jpg'),
  'Sining Kamalig': require('./assets/images/sining.jpg'),
  'Minor Basilica': require('./assets/images/Minor.jpg'),
  'Archdiocesan Shrine of Mary': require('./assets/images/mary.jpg'),
  'Santo Domingo Church': require('./assets/images/Santo.jpg'),
  'The Sunken Garden': require('./assets/images/UP.jpg'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100, // Adjusted padding to accommodate the back button
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    position: 'relative',
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    zIndex: 1, // Ensure the icon is above the input field
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 35, // Adjusted padding to accommodate the search icon
    paddingRight: 10, // Adjusted padding to accommodate the search icon
    paddingVertical: 8,
  },
  locationsContainer: {
    flexDirection: 'column',
  },
  locationItem: {
    marginBottom: 20,
    borderRadius: 10, // Rounded corners for the location image container
    overflow: 'hidden', // Ensure the text inside doesn't overflow the container
  },
  locationImage: {
    width: '100%',
    height: 200,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)', // Transparent background
    padding: 5,
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Locations;