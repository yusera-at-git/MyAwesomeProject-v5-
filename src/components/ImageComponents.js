import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Image, Button} from "react-native";

const ImageComponents =props=>{
    console.log(props);
    const navigation=useNavigation();
    return(
        <View style={style.container}>
            <Image source={props.imageSource} style={[style.container,{width:90, height:90},style.textStyle]}/>

            <Text>{props.title}</Text>
            <Button title="display"  onPress={()=>navigation.navigate('color')}/>

        </View>
    );
}

const style=StyleSheet.create(
    {
        container:{
            fontSize:20,
            color:"red",
            alignItems:"center",
            justifyContent:"center"
        },
        textStyle:{
            marginVertical:50,
            padding:50
        }
    }
);

export default  ImageComponents;