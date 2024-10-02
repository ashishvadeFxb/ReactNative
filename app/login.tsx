import { View, Text,TouchableOpacity,StyleSheet, Image, TextInput  } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const Login = () => {
    const router=useRouter()
    const onLogin =()=>{
      router.navigate("/signup")
    }
  return (
    <View style={{flex:1,paddingTop:150}} >
        <Image source={require("@/assets/images/login.png")} style={{width:"100%", height:300}} resizeMode='cover' ></Image>
        <View style={{padding:20,gap:20}}>
        <TextInput placeholder='Enter Your Email' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
        <TextInput placeholder='Enter Your Password' style={{borderWidth:1, height:50,paddingHorizontal:20}}></TextInput>
   <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onLogin} >
       <Text style={styles.text}>Login</Text>
       </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default Login

const styles=StyleSheet.create({
    button:{
        backgroundColor:"orange",
       alignItems:"center",
         paddingVertical:15,
         borderRadius:10
    },
    text:{
       fontSize:16,
       color:'white',
       fontWeight:"bold"
    }
    })