import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CameraComponent from './CameraComponent';
import DisplayScreen from './DisplayScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraComponent} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
