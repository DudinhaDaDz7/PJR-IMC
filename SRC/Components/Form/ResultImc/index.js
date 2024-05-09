import React from "react";
import { View, Text } from "react-native";

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.messageResultImsc}</Text>
            <Text>{props.ResultImc}</Text>
        </View>
    );
}