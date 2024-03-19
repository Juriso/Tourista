import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import ScannerScreen from './ScannerScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'BookingScreen') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'ScannerScreen') {
            iconName = focused ? 'scan' : 'scan-outline';
          } else if (route.name === 'ProfileScreen') {
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
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="BookingScreen" component={BookingScreen} options={{ tabBarLabel: 'Booking' }} />
      <Tab.Screen name="ScannerScreen" component={ScannerScreen} options={{ tabBarLabel: 'Scanner' }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

