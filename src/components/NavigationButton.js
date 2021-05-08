import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Button, Text, View } from "react-native-paper";

const NavigationButton=(props)=>{
    console.log(props);
    const navigation=useNavigation();
    return( <Button 
        type="contained"
        onPress={()=>navigation.navigate(props.screenToDisplay)}
        >
        {props.title}
        </Button>
        
    );
}


export default NavigationButton;