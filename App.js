import React from 'react'
import {View,Text,StyleSheet,ScrollView,} from 'react-native'
import Calculator from './Component/Calculator'
import { Appbar,Card } from 'react-native-paper'

function App() {
  return (
    <ScrollView>
    <View >
    <Appbar.Header style={{marginTop:25,backgroundColor:'black',color:'white'}}>
    
   <Text> <Appbar.Content style={{fontSize:70}} title="CALCULATOR"/></Text>
    
  </Appbar.Header>
    </View>
    <View style={css.container}>
    <Calculator />
  
  
  </View>
    </ScrollView>
  )
}

export default App

const css=StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:"white",

    

  }
})
