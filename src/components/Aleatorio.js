import React from "react";
import { Text } from "react-native"
import Estilo from "./estilo";

export default (props) => {

    let numAleatorio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return (
        <Text style={Estilo.txtG}>Número: {numAleatorio}</Text>
    )
}
