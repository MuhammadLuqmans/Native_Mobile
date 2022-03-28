
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import About from './src/screens/About';
import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        options={{
          header: () => null
        }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Create Account"
          component={CreateAccount}
        />
        
        <Stack.Screen
          name="about"
          component={About}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})

export default App;