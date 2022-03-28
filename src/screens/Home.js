
import React, { useState }  from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Button,
  StatusBar,
} from 'react-native';
import images from '../../assets/images/homeScreen.jpg'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const Home = ({ navigation }) =>{

 
  const onPressHandler = () => {
    navigation.navigate('Login');
  }
   const HandleCreate= () =>{
    navigation.navigate('Create Account');
   }
 
   return (
     <ImageBackground source={images} resizeMode="cover" style={styles.image}>
     <View style={styles.body}>
     <View style={styles.Logo_container}>
      <Image  source={require('../../assets/icons/homeIcons.png')} style={{ resizeMode: "cover" }}/>
      <Text style={styles.title_logo}>Welcome to Golfgang!</Text>
      <Text style={styles.logo_sub_title}>Start using our app and level up your golf experience</Text>
      </View>
      <View style={styles.buttons_container}>
      <Pressable style={styles.buttons_login}>
      <Text style={styles.button} onPress={onPressHandler}>Log In</Text>
      </Pressable>
      <Pressable style={styles.buttons_login}>
      <Text style={styles.button} onPress={HandleCreate}>Create Account</Text>
      </Pressable>
      </View>
      </View>
     </ImageBackground>
   )
 }


const styles = StyleSheet.create({
  statusBar_styles:{
    backgroundColor:'#fff',
  },
  Logo_container:{
    borderWidth:2,
    borderColor:"orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:'65%',
  },
   body: {
     flex:1,
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
   },
   title_logo:{
     color:'#fff',
     fontWeight:'normal',
     fontSize:24,
     fontFamily: "Roboto",
     marginTop:24,
   },
   logo_sub_title:{
     fontSize:16,
     fontWeight:"normal",
     textAlign:'center',
     color:'#fff',
     marginTop:8,
   },
   buttons_login:{
     borderWidth:1,
     borderColor:'#fff',
     color:'#fff',
     borderRadius:7,
     width:140,
     textAlign:'center',
   },
   button:{
     textAlign:'center',
     color:'#fff',
     padding: 10,
   },
   buttons_container:{
    alignItems:'flex-end',
    justifyContent: "space-around",
    display:'flex',
    flexDirection:'row',
    borderWidth:2,
    height:'25%',
    borderColor:'#fff',
   }
 })
 export default Home;