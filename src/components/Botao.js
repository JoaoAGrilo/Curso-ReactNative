import React from "react"
import { View, Button } from "react-native"

export default props => {

    function executar () {
        console.warn("Exec")
    }

    return (
        <Button 
            title="Executar!"
            onPress={executar}
        />
    )
}