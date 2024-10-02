import { View, Text,TouchableOpacity,StyleSheet, Image,TextInput  } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
// import { TextInput } from 'react-native-gesture-handler'

const Signup = () => {
    const router=useRouter()
    const onRegister=()=>{
        router.navigate("/login")
    }
  return (
    
    <View style={{flex:1,paddingTop:40}} >
    <Image source={require("@/assets/images/register.png")} style={{width:"100%", height:300}} resizeMode='cover' ></Image>
    <View style={{padding:20,gap:20}}>
    <TextInput placeholder='Enter Your Name' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
    <TextInput placeholder='Enter Your Mobile No' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
    <TextInput placeholder='Enter Your Date Of Birth' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
    <TextInput placeholder='Enter Your Password' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
    <TextInput placeholder='Confirm Password' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>


<TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onRegister} >
   <Text style={styles.text}>Register</Text>
   </TouchableOpacity>
    </View>
   
</View>
    
  )
}

export default Signup

const styles=StyleSheet.create({
    button:{
        backgroundColor:"orange",
        //  paddingHorizontal:40,
         paddingVertical:15,
         borderRadius:10,
         alignItems:"center"
    },
    text:{
       fontSize:16,
       color:'white',
       fontWeight:"bold"
    }
    })