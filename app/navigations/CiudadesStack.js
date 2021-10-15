import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ciudades from "../screens/Ciudades";

const Stack = createStackNavigator();

export default function CiudadesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="cities"
                component={Ciudades}
                options={{ title: "Ciudades" }}
            />
            <Stack.Screen 
                name="add-cities"
                component={Ciudades}
                optiones={{ title: "Añadir Ciudades"}}
            />
        </Stack.Navigator>)
}