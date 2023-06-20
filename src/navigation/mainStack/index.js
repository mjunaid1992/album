import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../../screens';
import { navigationOptions, screenNames } from '../../constants';


const StackAuth = createStackNavigator();

export const MainStack = () => {
    return (
        <StackAuth.Navigator initialRouteName={ screenNames.home }>
            <StackAuth.Screen
                name={ screenNames.home }
                component={ Home }
                options={ navigationOptions }
            />
            <StackAuth.Screen
                name={ screenNames.details }
                component={ Details }
                options={ navigationOptions }
            />
        </StackAuth.Navigator>
    );
};