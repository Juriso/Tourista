import * as tf from '@tensorflow/tfjs';
import { Asset } from 'expo-asset';

let model;
let metadata;

const loadModel = async () => {
  const MODEL_URL = Asset.fromModule(require('./assets/model/model.json')).uri;
  const METADATA_URL = Asset.fromModule(require('./assets/model/metadata.json')).uri;

  model = await tf.loadLayersModel(MODEL_URL);

  const metadataAsset = await Asset.fromModule(require('./assets/model/metadata.json')).downloadAsync();
  const metadataString = await FileSystem.readAsStringAsync(metadataAsset.localUri);
  metadata = JSON.parse(metadataString);
};

const classifyImage = async (image) => {
  if (!model || !metadata) {
    await loadModel();
  }

  const img = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat();
  const logits = tf.tidy(() => {
    const normalized = img.div(255.0);
    const batched = normalized.reshape([1, 224, 224, 3]);
    return model.predict(batched);
  });

  const predictions = await logits.data();
  logits.dispose();
  
  const maxPrediction = Math.max(...predictions);
  const maxIndex = predictions.indexOf(maxPrediction);
  const className = metadata.labels[maxIndex];
  
  return { className, confidence: maxPrediction };
};

export { loadModel, classifyImage };
