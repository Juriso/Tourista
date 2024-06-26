import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';
import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as tf from '@tensorflow/tfjs';

import * as FileSystem from 'expo-file-system';

const modelJson = require('./assets/models/model.json');
const weightsBin = require('./assets/models/weights.bin');
const logoImage = require('./assets/images/street-spot-logo.png');

const classNames = ['Turon', 'Carioca', 'Fishball', 'Isaw', 'Kikiam', 'Kwekkwek', 'Maruya', 'Cheese-Stick', 'Dos', 'Tres'];

const ImagePreviewScreen = ({ route, navigation }) => {
  const { photoUri } = route.params;
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const recognizeImage = async () => {
      try {
        await tf.ready();
        const tensorImage = await transformImageToTensor(photoUri);
        const predictions = await getPredictions(tensorImage);
        setPredictions(predictions[0].dataSync());
        setIsLoading(false); // Set loading to false once predictions are received
      } catch (error) {
        console.error('Error recognizing image:', error);
      }
    };

    recognizeImage();

    return () => {
      tf.disposeVariables();
    };
  }, []);

  const transformImageToTensor = async (photoUri) => {
    const img64 = await FileSystem.readAsStringAsync(photoUri, { encoding: FileSystem.EncodingType.Base64 });
    const imgBuffer = tf.util.encodeString(img64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer);
    let imgTensor = decodeJpeg(raw);
    const scalar = tf.scalar(224);
    imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [224, 224]);
    const tensorScaled = imgTensor.div(scalar);
    const img = tf.reshape(tensorScaled, [1, 224, 224, 3]);
    return img;
  };

  const makePredictions = async (batch, model, imagesTensor) => {
    const predictionsData = model.predict(imagesTensor);
    const predictions = tf.split(predictionsData, batch);
    return predictions;
  };

  const getPredictions = async (image) => {
    const model = await loadModel();
    const predictions = await makePredictions(1, model, image);
    return predictions;
  };

  const loadModel = async () => {
    const model = await tf.loadLayersModel(bundleResourceIO(modelJson, weightsBin)).catch((e) => {
      console.log("[LOADING ERROR] info:", e);
    });
    return model;
  };

  const getHighestPredictionClassName = () => {
    const highestPredictionIndex = predictions.indexOf(Math.max(...predictions));
    return classNames[highestPredictionIndex];
  };

  const getDescription = () => {
    const className = getHighestPredictionClassName();
    switch (className) {
      case 'Turon':
        return 'A popular Filipino snack made with ripe plantains wrapped in spring roll wrapper and deep-fried until golden brown.';
      case 'Carioca':
        return 'Sweet rice balls made with glutinous rice flour and coconut, then deep-fried until crispy and golden brown.';
      case 'Fishball':
        return 'Street food made with ground fish meat, starch, and seasonings, formed into balls and deep-fried.';
      case 'Isaw':
        return 'Grilled chicken or pork intestine skewers marinated in a special sauce, then grilled over charcoal.';
      case 'Kikiam':
        return 'A type of Chinese-inspired Filipino street food made with ground pork, shrimp, and vegetables, wrapped in bean curd sheets and deep-fried.';
      case 'Kwekkwek':
        return 'Quail eggs coated in orange-colored batter, deep-fried until crispy, and served with a sweet and sour sauce.';
      case 'Maruya':
        return 'Filipino banana fritters made with sliced bananas dipped in batter, then deep-fried until golden brown.';
      case 'Cheese-Stick':
        return 'Deep-fried spring roll wrapper filled with cheese, then cooked until crispy and golden brown.';
      case 'Dos':
        return 'Also known as "Balut," a fertilized duck embryo that is boiled and eaten in the shell.';
      case 'Tres':
        return 'Also known as "Betamax," grilled chicken or pork blood, cut into small squares, skewered, and grilled until crispy.';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: photoUri }} style={styles.image} />
      </View>
      <View style={styles.predictionsContainer}>
        <Text style={styles.predictionsText}>Filipino Street Food:</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.prediction}>
              <Text style={styles.className}>{getHighestPredictionClassName()}</Text>
            </Text>
            <Text style={styles.predictionsText}>{"\n"}{"\n"}Description:</Text>
            <Text style={styles.description}>{getDescription()}</Text>
          </>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CameraScreen')}>
            <Text style={styles.buttonText}>Take Another Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE799', // Changed background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  predictionsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  predictionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  prediction: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  className: {
    fontSize: 16,
  },
  description: {
    marginHorizontal: 20,
    padding: 10,
    textAlign: 'justify',
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
    color: '#2D2D2D',
  },
  button: {
    backgroundColor: '#F79F25',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#2D2D2D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'none',
  },
});

export default ImagePreviewScreen;
