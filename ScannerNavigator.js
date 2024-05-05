// ScannerNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerScreen from './ScannerScreen'; // Import your ScannerScreen component here
import CameraScreen from './CameraScreen'; // Import your CameraScreen component here

const ScannerStack = createStackNavigator();

const ScannerNavigator = () => {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen 
        name="ScannerScreen" 
        component={ScannerScreen} 
        initialParams={{}} // Set initialParams to empty object
      />
      <ScannerStack.Screen name="CameraScreen" component={CameraScreen} />
      {/* Add other screens related to ScannerScreen here */}
    </ScannerStack.Navigator>
  );
};

export default ScannerNavigator;
