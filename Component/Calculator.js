import React, {useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native'
import {myCss} from '../styles/css'
import { Button ,Colors, TextInput,Appbar,Card,Divider} from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
export default function Calculator(){
    const [box,setBox]=useState(0)
    const [ans,setAns]=useState(0)
    let getTheTime= new Date();
    const [tim,setTim]=useState(`${getTheTime.getHours()}:${getTheTime.getMinutes()}`)
    const btnValue=(at)=>{
     setBox(box+at)
    }
   const  btnans=()=>{
       let calulate=eval(box)
       setAns(calulate)
       console.log(eval(calulate))
    }
     
    const btnClr=()=>{
        setBox('')
        setAns('')
    }
    const btnDel=()=>{
        let delBtn=box.slice(0,-1)
       setBox(delBtn)
       setAns('')
    }

    return(
        <View >
       
       <View style={{borderWidth:5,padding:5,margin:1}}>
       <View style={{paddingLeft:10,paddingRight:10,paddingTop:10}}>
       <TextInput type="text" value={box} onChange={(e)=>setBox(e.target.value)} style={{fontSize:50,padding:20,textAlign:'center'}} mode='outlined'  placeholder='0000' />
       </View>

       <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10,paddingTop:-40}}>
      {/* <TextInput type="number"  value={ans} onChangeText={(e)=>setBox(e.target.value)} style={{fontSize:30,padding:10,textAlign:'center'}} mode='outlined'   />*/}
       <Text  style={{fontSize:40,padding:20,textAlign:'center',borderWidth:2,backgroundColor:'white',borderColor:'grey'}}>Ans:- {ans}</Text>
       </View>
       </View>
     
         <Card style={{borderWidth:5}}>
          
         <Card.Content>

         <View style={{borderWidth:2,borderStyle:'dotted',borderColor:'grey'}}></View>
           
         <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
            
            <TouchableOpacity style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnTime}>{tim}</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>btnClr()} style={{backgroundColor:'red',borderRadius:4}}><Text style={myCss.btnDel}>Clr</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>btnDel()} style={{backgroundColor:'yellow',borderRadius:4}}><Text style={myCss.btnDel}>Del</Text></TouchableOpacity>   
             </View>
                <Divider style={{marginTop:20,borderWidth:1,borderStyle:'dashed'}}></Divider>
             <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}> 
             <TouchableOpacity onPress={()=>btnValue('9')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>9</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('8')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>8</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('7')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>7</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('/')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>/</Text></TouchableOpacity>   
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}> 
             <TouchableOpacity onPress={()=>btnValue('6')}  style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>6</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('5')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>5</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('4')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>4</Text></TouchableOpacity>
             <TouchableOpacity  onPress={()=>btnValue('-')}style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>-</Text></TouchableOpacity>   
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}> 
             <TouchableOpacity onPress={()=>btnValue('3')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>3</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('2')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>2</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('1')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>1</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>btnValue('+')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>+</Text></TouchableOpacity>   
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}> 
              <TouchableOpacity onPress={()=>btnValue('0')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnCal}>0</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>btnValue('*')} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnDot}>*</Text></TouchableOpacity>
              
              <TouchableOpacity onPress={()=>btnans()} style={{backgroundColor:'grey',borderRadius:4}}><Text style={myCss.btnEqual}>=</Text></TouchableOpacity>   
               </View>

              
         
         
         </Card.Content>
         
         </Card>

        </View>
    )
}