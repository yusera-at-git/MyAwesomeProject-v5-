import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button } from "react-native-paper";
import NavigationButton from "../components/NavigationButton";
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
    {/* <Button 
    onPress={()=>props.navigation.navigate('Home')}
    >
    Tap here 
    </Button> */}
        {/* //*****CUSTOM UI COMPONENT CREATED WITH REACT-NATIVE-PAPER LIB */  }
   
   {/* //1 */}
    <NavigationButton 
    screenToDisplay="Home"
    title="Home "
    />
   {/* //2 */}
    <NavigationButton 
    screenToDisplay="img"
    title="image screen "
    />
    {/* //3 */}
    <NavigationButton 
    screenToDisplay="color"
    title="Tap here color screen "
    />
    {/* //4 */}
    <NavigationButton 
    screenToDisplay="Input"
    title="Tap here for Input screen "
    />
    {/* //5 */}
    <NavigationButton 
    screenToDisplay="Coloradscreen"
    title="Tap here for Random color generator "
    />
    </View>
  );
}

export default HomeScreen;