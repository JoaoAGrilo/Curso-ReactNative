import React from "react";
import { View } from "react-native"
import PrimeiroComponente from "./components/PrimeiroComponente";
import CompDefault, { Comp1, Comp2 } from "./components/Multi"

export default () => (
    <View>
        <PrimeiroComponente />
        <CompDefault />
        <Comp1 />
        <Comp2 />
    </View>
)