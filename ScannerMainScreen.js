import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Modal, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ScannerScreenStyles';
import * as ImagePicker from 'expo-image-picker';

const ScannerMainScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'You need to enable gallery access to upload images.');
      }
    })();
  }, []);

  const handleCameraScreen = () => {
    navigation.replace('CameraScreen');
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage(result.uri);
        navigation.navigate('ImagePreviewScreen', { imageUri: result.uri }); // Navigate to ImagePreviewScreen with the selected image URI
      }
    } catch (error) {
      console.log('Error while picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.infoButton} onPress={toggleModal}>
        <View style={styles.infoButtonContainer}>
          <Ionicons name="ios-help-circle-outline" size={24} color="#FFA500" />
        </View>
      </TouchableOpacity>
      <Image source={require('./assets/images/street-spot-logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={handleCameraScreen}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={pickImage}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />
            ) : (
              <Text style={styles.modalText}>
                <Text style={{fontWeight: "bold"}}>How does it work? {"\n"}{"\n"}</Text>
                1.   Hold the camera towards the street food item you're curious about.{"\n"}{"\n"}
                2.  Capture it and let StreetSpot work its magic!
              </Text>
            )}
            <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ScannerMainScreen;
