import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../screens/Home';
import Cuenta from './../screens/Cuenta';
import Ciudades from './../screens/Ciudades';
import Nosotros from './../screens/Nosotros';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="home" 
                    component={Home}
                    options={{ title: "Inicio" }}
                />
                <Tab.Screen 
                    name="register" 
                    component={Cuenta}
                    options={{ title: "Registro" }}
                />
                <Tab.Screen 
                    name="cities" 
                    component={Ciudades}
                    options={{ title: "Ciudades" }}
                />
                <Tab.Screen 
                    name="us" 
                    component={Nosotros}
                    options={{ title: "Nosotros" }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}