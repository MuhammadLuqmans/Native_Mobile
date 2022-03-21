

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const About = ({ navigation }) =>{

      const onPressHandler = () => {
        navigation.navigate('Screen_A');
      }
    
      return (
        <View style={styles.body}>
          <Text style={styles.text}>
            About
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0ff' })}
          >
            <Text style={styles.text}>
              Home Page
            </Text>
          </Pressable>
        </View>
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
export default About