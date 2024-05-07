import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const ImagePreviewScreen = ({ route }) => {
  const { photoUri } = route.params;
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const recognizeImage = async () => {
      try {
        // Define the paths to the model files
        const modelJsonPath = require('./assets/model/model.json');
        const weightsBinPath = require('./assets/model/weights.bin');

        // Load the TensorFlow.js model
        const model = await tf.loadGraphModel(modelJsonPath, {
          weightPathPrefix: tf.io.getLoadHandlers(weightsBinPath)[0].weightPath,
        });

        // Preprocess the image
        const imageTensor = preprocessImage(photoUri);

        // Make predictions
        const predictions = await model.predict(imageTensor);

        // Display predictions
        setPredictions(predictions);

        // Dispose the model
        model.dispose();
      } catch (error) {
        console.error('Error recognizing image:', error);
      }
    };

    recognizeImage();

    // Cleanup function to dispose the model when the component unmounts
    return () => {
      tf.disposeVariables();
    };
  }, []);

  const preprocessImage = (uri) => {
    // Preprocess the image (e.g., resize, normalize)
    // Convert the image to a TensorFlow tensor
    // Return the preprocessed tensor
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photoUri }} style={styles.image} />
      </View>
      <View style={styles.predictionsContainer}>
        {predictions.length > 0 && (
          <Text>Predictions: {JSON.stringify(predictions)}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
    resizeMode: 'contain',
  },
  predictionsContainer: {
    marginTop: 20,
  },
});

export default ImagePreviewScreen;
