import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CiudadesStack from "./CiudadesStack";
import CuentaStack from "./CuentaStack";
import InicioStack from "./HomeStack";
import NosotrosStack from "./NosotrosStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="home" 
                    component={InicioStack}
                    options={{ title: "Inicio" }}
                />
                <Tab.Screen 
                    name="register" 
                    component={CuentaStack}
                    options={{ title: "Registro" }}
                />
                <Tab.Screen 
                    name="cities" 
                    component={CiudadesStack}
                    options={{ title: "Ciudades" }}
                />
                <Tab.Screen 
                    name="us" 
                    component={NosotrosStack}
                    options={{ title: "Nosotros" }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}