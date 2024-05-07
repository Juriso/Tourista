// ScannerApp.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerScreen from './ScannerScreen';
import CameraScreen from './CameraScreen';
import ImagePickerScreen from './ImagePickerScreen';

const Stack = createStackNavigator();

const ScannerApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScannerScreen">
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScannerApp;
