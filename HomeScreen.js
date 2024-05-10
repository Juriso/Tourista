import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleCarouselItemPress = (itemName) => {
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

  const handleSeeAllPress = () => {
    navigation.navigate('Locations');
  };

  const filteredCarouselItems = searchText
    ? carouselItems.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    : carouselItems;

  return (
    <ScrollView style={styles.container}>
      

      <View style={styles.header}>
        <Text style={styles.headerText}>Hi User, Where would you like to go?</Text>
        <Image style={styles.profilePic} source={require('./assets/images/profilePic.png')} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Image style={styles.searchIcon} source={require('./assets/images/searchIcon.png')} />
        </TouchableOpacity>
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
      
      <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAllPress}>
        <Text style={styles.seeAllButtonText}>See All</Text>
      </TouchableOpacity>

      <ScrollView horizontal style={styles.carouselContainer}>
        {filteredCarouselItems.map((itemName, index) => (
          <TouchableOpacity key={index} onPress={() => handleCarouselItemPress(itemName)}>
            <View style={styles.carouselItem}>
              <Image style={styles.carouselImage} source={carouselImages[itemName]} />
              <Text style={styles.carouselText}>{itemName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const carouselItems = ['Quezon Memorial Circle', 'Art in Island', 'La Mesa Ecopark'];
const carouselImages = {
  'Quezon Memorial Circle': require('./assets/images/circle.jpg'),
  'Art in Island': require('./assets/images/Art.jpg'),
  'La Mesa Ecopark': require('./assets/images/La.jpg'),
  
  
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  searchIconContainer: {
    position: 'absolute',
    right: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 40, 
  },
  seeAllButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align button to the start of the container
  },
  seeAllButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    marginTop: 5,
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