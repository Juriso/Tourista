// ScannerStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerMainScreen from './ScannerMainScreen';
import CameraScreen from './CameraScreen';
import ImagePreviewScreen from './ImagePreviewScreen';

const Stack = createStackNavigator();

const ScannerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScannerMain" component={ScannerMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ImagePreviewScreen" component={ImagePreviewScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default ScannerStack;
