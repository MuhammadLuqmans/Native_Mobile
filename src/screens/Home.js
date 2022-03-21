
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import images from '../../assets/images/homeScreen.jpg'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const Stack = createStackNavigator();

const image = { uri: images };

const Home = ({ navigation }) =>{

   const onPressHandler = () => {
     navigation.navigate('Screen_B');
   }
 
   return (
     <ImageBackground source={images} resizeMode="cover" style={styles.image}>
     <View style={styles.body}>
      <Text>Luqman</Text>
     </View>
     </ImageBackground>

   )
 }


const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:"#2c2c2c57",
   },
   image: {
      flex:1,
      resizeMode: 'cover',
      justifyContent: "center",
    },
   text: {
     fontSize: 40,
     fontWeight: 'bold',
     margin: 10,
   }
 })
 export default Home;