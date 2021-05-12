import React from "react";
import {Text ,View,Button, StyleSheet} from "react-native";

const Buttons =()=>{

    return( 
        <View style={style.ViewStyle}>
            <Text style={style.TextStyle}>
                This is not a Button
            </Text>
        </View>

    );
}

const style=StyleSheet.create({
    TextStyle:{
        color:"green",
        margin:50,
        borderBottomWidth:2,
        paddingBottom:50
    },
    ViewStyle:{
        margin:50,
        borderColor:"blue",
        paddingBottom:50,
        borderWidth:20
    }



})
 export default Buttons;
