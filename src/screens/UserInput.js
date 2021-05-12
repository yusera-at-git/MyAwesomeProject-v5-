import React, { useState } from "react";

import {Text, View, StyleSheet,Button, TextInput} from "react-native";

const UserInput =()=>{
const [state, setState]= useState("hi there");
    return(
        <View>
        
            <TextInput
            // placeholder="hello" 
            autoCapitalize="none"
            autoCorrect={false}
             style={{   // {/* The exterior set of curly braces are letting JSX */}
            // {/* know you want a JS expression. */}
            // {/* The interior set of curly braces represent  */}
            // {/* a JavaScript object, meaning you’re passing  */}
            // {/* in a object to the style attribute    */}
            margin:80, borderColor:"black", borderWidth:10,padding:20
            }}
            value={state}
            onChangeText={(newValue)=>{setState(newValue) }}
            /> 
            <Text >my name is {state}</Text>
        </View>


    );
}

const style=StyleSheet.create({

    input: {
        margin:80, borderColor:"black", borderWidth:10,padding:20
    }
})
export default UserInput;