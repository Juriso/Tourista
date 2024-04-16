import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignInPage from './SignInPage';
import CreateAccountPage from './CreateAccountPage';
import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen'; // Import the MainScreen component
import Place1 from './Place1';
import Place2 from './Place2';
import Place3 from './Place3';
import Place4 from './Place4';
import Place5 from './Place5';
import Place6 from './Place6';
import Place7 from './Place7';
import Place8 from './Place8';
import Place9 from './Place9';
import Place10 from './Place10';
import { AppProvider } from './AppContext';


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
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place1"
            component={Place1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place2"
            component={Place2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place3"
            component={Place3}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place4"
            component={Place4}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place5"
            component={Place5}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place6"
            component={Place6}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place7"
            component={Place7}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place8"
            component={Place8}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place9"
            component={Place9}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place10"
            component={Place10}
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
