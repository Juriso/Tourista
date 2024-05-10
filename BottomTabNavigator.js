// BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import ProfileScreen from './ProfileScreen';
import ScannerStack from './ScannerStack'; // Import ScannerStack

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'scan' : 'scan-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the Ionicons component with appropriate icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue', // Color for active tab
        inactiveTintColor: 'black', // Color for inactive tab
        style: {
          backgroundColor: 'yellow', // Background color of the navigation bar
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Hide header for HomeScreen
      />
      <Tab.Screen 
        name="Booking" 
        component={BookingScreen} 
        options={{ headerShown: false }} // Hide header for BookingScreen
      />
      <Tab.Screen 
        name="Scanner" 
        component={ScannerStack} 
        options={{ headerShown: false }} // Hide header for ScannerStack
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }} // Hide header for ProfileScreen
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
