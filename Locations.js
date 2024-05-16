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
        case 'Gateway Mall':
        navigation.navigate('Place11', { placeName: 'Gateway Mall'});
        break;
        case 'Vargas Museum':
        navigation.navigate('Place12', { placeName: 'Vargas Museum'});
        break;
        case 'Parish of the Holy Sacrifice Church':
        navigation.navigate('Place13', { placeName: 'Parish of the Holy Sacrifice Church'});
        break;
        case 'Ateneo Art Gallery':
        navigation.navigate('Place14', { placeName: 'Ateneo Art Gallery'});
        break;
        case 'Bantayog ng mga Bayani':
        navigation.navigate('Place15', { placeName: 'Bantayog ng mga Bayani'});
        break;
        case 'Manila Ocean Park':
        navigation.navigate('Place16', { placeName: 'Manila Ocean Park'});
        break;
        case 'Banawe Street':
        navigation.navigate('Place17', { placeName: 'Banawe Street'});
        break;
        case 'Ninoy Aquino Parks and Wildlife Center':
        navigation.navigate('Place18', { placeName: 'Ninoy Aquino Parks and Wildlife Center'});
        break;
        case 'Ayala Malls TriNoma':
        navigation.navigate('Place19', { placeName: 'Ayala Malls TriNoma'});
        break;
        case 'Eastwood City':
        navigation.navigate('Place20', { placeName: 'Eastwood City'});
        break;
        case 'La Mesa Watershed':
        navigation.navigate('Place21', { placeName: 'La Mesa Watershed'});
        break;
        case 'SM North EDSA Sky Dome':
        navigation.navigate('Place22', { placeName: 'SM North EDSA Sky Dome'});
        break;
        case 'PBB House':
        navigation.navigate('Place23', { placeName: 'PBB House'});
        break;
        case 'Neopolitan Business Park':
        navigation.navigate('Place24', { placeName: 'Neopolitan Business Park'});
        break;
        case 'U.P. Town Center':
        navigation.navigate('Place25', { placeName: 'U.P. Town Center'});
        break;
        case 'Iglesia Ni Cristo Museum':
        navigation.navigate('Place26', { placeName: 'Iglesia Ni Cristo Museum'});
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

const locations = ['Quezon Memorial Circle', 'Art in Island', 'La Mesa Ecopark', 'Smart Araneta Coliseum', 'Real Monasterio ​de Santa Clara de Manila', 'Sining Kamalig', 'Minor Basilica', 'Archdiocesan Shrine of Mary', 'Santo Domingo Church', 'The Sunken Garden','Gateway Mall','Vargas Museum','Parish of the Holy Sacrifice Church','Ateneo Art Gallery','Bantayog ng mga Bayani','Manila Ocean Park','Banawe Street','Ninoy Aquino Parks and Wildlife Center','Ayala Malls TriNoma','Eastwood City','La Mesa Watershed','SM North EDSA Sky Dome','PBB House','Neopolitan Business Park','U.P. Town Center','Iglesia Ni Cristo Museum'];
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
  'Gateway Mall': require('./assets/images/Gateway Mall.jpg'),
  'Vargas Museum': require('./assets/images/Vargas Museum.jpg'),
  'Parish of the Holy Sacrifice Church': require('./assets/images/Parish of the Holy Sacrifice Church.jpg'),
  'Ateneo Art Gallery': require('./assets/images/Ateneo Art Gallery.jpg'),
  'Bantayog ng mga Bayani': require('./assets/images/Bantayog ng mga Bayani.jpg'),
  'Manila Ocean Park': require('./assets/images/Manila Ocean Park.jpg'),
  'Banawe Street': require('./assets/images/Banawe Street.jpg'),
  'Ninoy Aquino Parks and Wildlife Center': require('./assets/images/Ninoy Aquino Parks and Wildlife Center.png'),
  'Ayala Malls TriNoma': require('./assets/images/Ayala Malls  TriNoma.jpg'),
  'Eastwood City': require('./assets/images/Eastwood City.jpg'),
  'La Mesa Watershed': require('./assets/images/La Mesa Watershed.jpg'),
  'SM North EDSA Sky Dome': require('./assets/images/SM North EDSA Sky Dome.jpg'),
  'PBB House': require('./assets/images/PBB House.jpg'),
  'Neopolitan Business Park': require('./assets/images/Neopolitan Business Park.jpg'),
  'U.P. Town Center': require('./assets/images/U.P. Town Center.jpg'),
  'Iglesia Ni Cristo Museum': require('./assets/images/Iglesia Ni Cristo Museum.jpg'),

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100, 
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
    zIndex: 1, 
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 35, 
    paddingRight: 10, 
    paddingVertical: 8,
  },
  locationsContainer: {
    flexDirection: 'column',
  },
  locationItem: {
    marginBottom: 20,
    borderRadius: 10, 
    overflow: 'hidden', 
  },
  locationImage: {
    width: '100%',
    height: 200,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)', 
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
