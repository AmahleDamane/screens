import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'grey'
        

      }}
      >

        
        <Tab.Screen 
        name="Screen 1" 
        component={Screen1} 
        options= {{tabBarIcon: ({color,size})=> 
        <FontAwesome6 name="gun" size={24} color="blue" />}}/>

        <Tab.Screen 
        name="Screen 2" 
        component={Screen2} />

        <Tab.Screen 
        name="Screen 3" 
        component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}