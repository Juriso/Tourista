import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();

  const handleCapture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo);
      // Navigate to ImagePreviewScreen and pass the captured photo URI as a parameter
      navigation.navigate('ImagePreviewScreen', { photoUri: photo.uri });
    }
  };

  const handleClose = () => {
    navigation.navigate('ScannerMain'); // Navigate back to ScannerMainScreen
  };

  useEffect(() => {
    return () => {
      // Navigate back to the ScannerMain screen when unmounting the component
      navigation.goBack();
    };
  }, []);

  let cameraRef;

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={ref => (cameraRef = ref)}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background color to black
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
