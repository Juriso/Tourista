import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons

const CameraScreen = ({ navigation }) => {
  const [isCameraReady, setCameraReady] = useState(false);
  const [hasCameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    const checkCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    };

    checkCameraPermission();
  }, []);

  const takePicture = async () => {
    if (hasCameraPermission && isCameraReady) {
      if (this.camera) {
        const photo = await this.camera.takePictureAsync({ quality: 0.5, format: 'jpeg' }); // Specify quality and format
        console.log(photo.uri);
        // Navigate to ImagePreviewScreen passing the captured photo URI
        navigation.navigate('ImagePreviewScreen', { photoUri: photo.uri });
      }
    } else {
      Alert.alert('Camera Permission Required', 'Please allow camera access in order to take pictures.');
    }
  };  

  const handleGoBack = () => {
    navigation.navigate('ScannerStack', { screen: 'ScannerMain' }); // Navigate back to ScannerMainScreen via ScannerStack
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {hasCameraPermission === null ? (
        <Text>Requesting camera permission...</Text>
      ) : hasCameraPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          onCameraReady={() => setCameraReady(true)}
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          <View style={styles.captureButtonContainer}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
              disabled={!hasCameraPermission || !isCameraReady}
            />
          </View>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // To ensure it's above the Camera view
  },
  captureButtonContainer: {
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
  },
});

export default CameraScreen;
