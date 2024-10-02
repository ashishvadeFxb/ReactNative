import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const MyButton = () => {
  return (
    // <View>
  
  
       <TouchableOpacity activeOpacity={0.8} style={styles.button} >
       <Text style={styles.text}>Login</Text>
       </TouchableOpacity>
    // </View>
  )
};

export default MyButton

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