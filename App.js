// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignInPage from './SignInPage';
import CreateAccountPage from './CreateAccountPage';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen'; // Import the MainScreen component
import { AppProvider } from './AppContext';
import firestore from './firebaseConfig'; // Import firestore from firebaseConfig

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              borderBottomWidth: 0, // Remove the border line
            },
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Home"
            component={LoginScreen}
            options={{
              headerLeft: null,
              title: '',
            }}
          />
          <Stack.Screen
            name="SignInPage"
            component={SignInPage}
            options={{
              headerLeft: null,
              title: '',
            }}
          />
          <Stack.Screen
            name="CreateAccountPage"
            component={CreateAccountPage}
            options={{
              headerLeft: null,
              title: '',
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerLeft: null,
              title: '',
            }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
