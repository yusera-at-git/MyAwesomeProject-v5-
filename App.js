import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Buttons from "./src/screens/Buttons";
import ColorAdjustmentScreen1 from "./src/screens/ColorAdjustmentScreen2";
import NavTab1 from "./src/screens/NavTab1";
import ColorScreen2 from "./src/screens/ColorScreen2";
import UserInput from "./src/screens/UserInput";

const stack=createStackNavigator();

function homestack(){
  return(
    <stack.Navigator>       
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="color" component={ColorAdjustmentScreen1}/>
      <stack.Screen name="Input" component={ UserInput}/>
      <stack.Screen name="Coloradscreen" component={ ColorScreen2}/>

    </stack.Navigator>
  );
}


            // const stackNavigationFunc=()=>{
            //   return(
              
            //   );
            // }
const tabs=createBottomTabNavigator();

 function App() {
  return (
    <NavigationContainer> 
      <tabs.Navigator
      tabBarOptions={{
        showLabel:false,
        style:{
          position:"absolute",
          bottom:10,
          left:10,
          right:10,
          elevation:0,
          backgroundColor:"rgb(0,0,200)",
          borderRadius:10,
          height:90,
        }
      }}
      >
        <tabs.Screen name="Home" component={homestack}/>
        <tabs.Screen name="Home1" component={ColorAdjustmentScreen1}/>
        <tabs.Screen name="Home2" component={ColorScreen2 }/>
        <tabs.Screen name="Home3" component={NavTab1}/>            
      </tabs.Navigator>    
    </NavigationContainer>
  );
}

export default App;
