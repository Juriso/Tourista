// ScannerStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerMainScreen from './ScannerMainScreen';
import CameraScreen from './CameraScreen';
import ImagePreviewScreen from './ImagePreviewScreen';
import ImagePickerScreen from './ImagePickerScreen';

const Stack = createStackNavigator();

const ScannerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScannerMain" component={ScannerMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ImagePreviewScreen" component={ImagePreviewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default ScannerStack;
