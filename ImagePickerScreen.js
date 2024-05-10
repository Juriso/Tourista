import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'You need to enable gallery access to upload images.');
      }
    })();
  }, []);

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
      }
    } catch (error) {
      console.log('Error while picking image:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Image Picker Screen</Text>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginTop: 20 }} />}
      <Button title="Pick an image from gallery" onPress={pickImage} />
    </View>
  );
};

export default ImagePickerScreen;
