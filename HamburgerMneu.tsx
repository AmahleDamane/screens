import React from "react";
import TabNavigator from "./tab navigator";
import Screen3 from "./screens/Screen3";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer =  createDrawerNavigator();

export default function HamburgerMenu(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Learning Modules" component={Screen3}/>
        </Drawer.Navigator>
    );
}