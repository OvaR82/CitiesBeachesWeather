import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Nosotros from './../screens/Nosotros';

const Stack = createStackNavigator();

export default function NosotrosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="bio"
                component={Nosotros}
                options={{ title: "Quiénes Somos" }}
            />
        </Stack.Navigator>)
}