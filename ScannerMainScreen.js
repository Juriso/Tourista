// ScannerMainScreen.js

import React, { useState } from 'react';
import { View, Image, Button, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ScannerScreenStyles';

const ScannerMainScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleOpenStreetSpot = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOptionSelection = (option) => {
    setShowModal(false);
    if (option === 'camera') {
      navigation.replace('CameraScreen'); // Use replace instead of navigate
    } else if (option === 'gallery') {
      navigation.navigate('ImagePickerScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require('./assets/images/street-spot-logo.png')} style={[styles.logo, styles.orangeBackground]} />
        <Button title="Open StreetSpot" onPress={handleOpenStreetSpot} style={[styles.button, styles.orangeBackground]} />
      </View>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFill}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Choose an option</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.modalButton, styles.orangeBackground, styles.buttonMargin]} onPress={() => handleOptionSelection('camera')}>
                    <Text style={styles.modalButtonText}>Take an Image</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.modalButton, styles.orangeBackground, styles.buttonMargin]} onPress={() => handleOptionSelection('gallery')}>
                    <Text style={styles.modalButtonText}>Upload Image</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default ScannerMainScreen;
