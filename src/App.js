import React from "react";
import { View, StyleSheet } from "react-native"
import PrimeiroComponente from "./components/PrimeiroComponente";
import CompDefault, { Comp1, Comp2 } from "./components/Multi"
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";

export default () => {
    return (
        <View style={style.App}>
            <Aleatorio min={0} max={100}/>
        {/* 
        <MinMax min={3} max={20}/>
        <PrimeiroComponente />
        <CompDefault />
        <Comp1 />
        <Comp2 />
        */}
    </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})