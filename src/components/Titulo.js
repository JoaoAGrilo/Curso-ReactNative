import React, { Fragment } from "react"
import { Text } from "react-native"
import Estilo from "./estilo"

export default props => (

    <React.Fragment>
        <Text style={Estilo.txtG}>{props.titulo}</Text>
        <Text>{props.subtitulo}</Text>
    </React.Fragment>

)