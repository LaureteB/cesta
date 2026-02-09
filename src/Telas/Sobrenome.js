import React from "react";
import {Text} from "react-native"

export default function Sobrenome({sobrenome}){
    return <Text style={{fontSize:25, marginBottom:10, textAlign:'center'}}>
        Olá {sobrenome} 
        </Text>
}