import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native'; // Import ScrollView from react-native

const { width } = Dimensions.get('window');


const BookingScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleBookingForm = () => {
    navigation.navigate('BookingForm');
  };


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

  const carouselItems = ['Quezon Memorial Circle', 'Art in Island', 'La Mesa Ecopark', 'Smart Araneta Coliseum', 'Real Monasterio ​de Santa Clara de Manila', 'Sining Kamalig', 'Minor Basilica', 'Archdiocesan Shrine of Mary', 'Santo Domingo Church', 'The Sunken Garden' ];
  const carouselImages = {
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

  const filteredCarouselItems = searchText
    ? carouselItems.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    : carouselItems;
    

  const images = [
    require('./assets/images/qc.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('./assets/images/qc.jpg')} style={styles.topImage} resizeMode="cover" />
      </View>
      <Text style={styles.cityLabel}>Quezon City</Text>
      <View style={styles.searchBarContainer}>
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
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          QuezonCity is the largest city in Metro Manila by land area and population. It has a wide variety of places to visit and things to do.
        </Text>
      </View>
      <TouchableOpacity style={styles.bookButton} onPress={handleBookingForm}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
      <View style={styles.footerSpacing}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topImageContainer: {
    position: 'elative',
    width: '100%',
    height: 150, // Adjust height as needed
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
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 40, 
  },
  searchIconContainer: {
    position: 'absolute',
    right: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
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
    height: 300, 
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
  footerSpacing: {
    height: 30,
  }
});

export default BookingScreen;