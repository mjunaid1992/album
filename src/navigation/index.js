import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStack } from "./mainStack";
import { screenNames } from "../constants";
import { navigationRef } from "./navigationRef";

const Stack = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
    animationEnabled: false,
});


export const Navigation = () => {
    return (
        <NavigationContainer ref={ navigationRef }>
            <Stack.Navigator initialRouteName={ screenNames.main }>
                <Stack.Screen
                    name={ screenNames.main }
                    component={ MainStack }
                    options={ navOptionHandler }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};