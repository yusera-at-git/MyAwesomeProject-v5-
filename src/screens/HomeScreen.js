import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button } from "react-native-paper";
const HomeScreen =(props)=>{
  return(
    <View>
    <Text> Hello!!</Text>
    {/* <Button
    title="Tap here" 
    onPress={()=>props.navigation.navigate('Home')}/>
    <Button 
    title="Tap here ok" 
    onPress={()=>props.navigation.navigate('color')}/>
    <Button 
    title="Counter app"
    onPress={()=>{props.navigation.navigate("Input")}}
    />
    <Button
    title="colorscreen"
    onPress={()=>{props.navigation.navigate("Color")}}
    /> */}
    <Button 
    onPress={()=>props.navigation.navigate('Home')}
    >
    Tap here 
    </Button>
    
    <Button 
    onPress={()=>props.navigation.navigate('color')}
    >
    Tap here ok 
    </Button>
    <Button
    onPress={()=>{props.navigation.navigate("Input")}}
>    
    Counter app
    </Button>
    
    <Button
    onPress={()=>{props.navigation.navigate("Color")}}
    >    
    colorscreen
    </Button>

    <Button
    onPress={()=>{props.navigation.navigate("Coloradscreen")}}
    >
    coloradscreen
    </Button>

{/* <Button
    title="coloradscreen1"
    onPress={()=>{props.navigation.navigate("Coloradscreen1")}}
/> */}

{/* <Button
    title="Counterusereducer"
    onPress={()=>{props.navigation.navigate("Counterred")}}
    /> */}


  <Button
    onPress={()=>{props.navigation.navigate("Input")}}
    >
    user input
  </Button>
    </View>
  );
}

export default HomeScreen;