import React from "react";
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";  

import ListaEmails from "./screens/ListaEmails";  
import Email from "./screens/Email.js";  
const Stack = createStackNavigator(); 

export default function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "ListaEmails" component = { ListaEmails } options={{ headerShown: false }}/>
        <Stack.Screen name = "Email" component = { Email } options = {{ title: "Email", headerStyle: { backgroundColor: "#4F4F4F",}, headerTintColor: "#00FF00", headerTitleStyle: { fontWeight: "bold", color: "#7FFFD4", }, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}