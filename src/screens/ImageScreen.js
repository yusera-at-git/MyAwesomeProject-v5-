import React from "react";
import { Text, View} from "react-native";
import ImageComponents from "../components/ImageComponents";

const ImageScreen=(props)=>{

    return(<View>
<ImageComponents imageSource={require('../../assets/imgg.jpg')} title="Image 1"/>
<ImageComponents imageSource={require('../../assets/imgg.jpg')} title="Image 1"/>
<ImageComponents imageSource={require('../../assets/imgg.jpg')} title="Image 1"/>
</View>);
}

export default ImageScreen;