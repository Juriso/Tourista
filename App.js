// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignInPage from './SignInPage'; // Import the SignInPage component
import { AppProvider } from './AppContext'; // Import the AppProvider

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
