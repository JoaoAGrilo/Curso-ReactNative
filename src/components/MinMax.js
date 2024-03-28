import React from "react";
import { Text } from "react-native"
import Estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.txtG}>{props.min} é menor que {props.max}</Text>
        )
}