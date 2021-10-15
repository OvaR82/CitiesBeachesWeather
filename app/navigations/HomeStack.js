import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function InicioStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="desc"
                component={Home}
                options={{ title: "Descripción" }}
            />
        </Stack.Navigator>)
}