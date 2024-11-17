import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Produto from "./src/screens/Produto";
import Cliente from "./src/screens/Costumer";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const StackNavigate = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"></Stack.Navigator>
    </NavigationContainer>
  );
}

