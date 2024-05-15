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
import Place11 from './Place11';
import Place12 from './Place12';
import Place13 from './Place13';
import Place14 from './Place14';
import Place15 from './Place15';
import Place16 from './Place16';
import Place17 from './Place17';
import Place18 from './Place18';
import Place19 from './Place19';
import Place20 from './Place20';
import Place21 from './Place21';
import Place22 from './Place22';
import Place23 from './Place23';
import Place24 from './Place24';
import Place25 from './Place25';
import Place26 from './Place26';

import Locations from './Locations';
import BookingForm from './BookingForm';
import { AppProvider } from './AppContext';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs();

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
            <Stack.Screen
            name="Place11"
            component={Place11}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place12"
            component={Place12}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place13"
            component={Place13}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place14"
            component={Place14}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place15"
            component={Place15}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="Place16"
            component={Place16}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place17"
            component={Place17}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place18"
            component={Place18}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place19"
            component={Place19}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place20"
            component={Place20}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place21"
            component={Place21}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place22"
            component={Place22}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place23"
            component={Place23}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place24"
            component={Place24}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place25"
            component={Place25}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Place26"
            component={Place26}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Locations"
            component={Locations}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BookingForm"
            component={BookingForm}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
