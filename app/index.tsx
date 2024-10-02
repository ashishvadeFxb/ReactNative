import MyButton from '@/components/MyButton'
import { Link } from 'expo-router'
import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet  } from 'react-native'
// require("./about/about")
import { useRouter } from 'expo-router'
const Index = ()=> {
  
    const router=useRouter()
    const onLogin =()=>{
      router.navigate("/signup")
    }
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}} >
   <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onLogin} >
       <Text style={styles.text}>Login</Text>
       </TouchableOpacity>
    </View>
  

  )
}


export default Index

const styles=StyleSheet.create({
  button:{
      backgroundColor:"orange",
       paddingHorizontal:40,
       paddingVertical:15,
       borderRadius:10
  },
  text:{
     fontSize:16,
     color:'white',
     fontWeight:"bold"
  }
  })
