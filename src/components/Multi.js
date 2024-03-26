import React from "react"
import { Text } from "react-native"
import Estilo from "./estilo"


export default () => {
    return (
        <Text style={Estilo.txttM}>Comp Default</Text>
    )
}

export function Comp1() {
    return(
        <Text style={Estilo.txttP}>Comp #1</Text>
    )
}

export function Comp2() {
    return(
        <Text style={Estilo.txttP}>Comp #2</Text>
    )
}

