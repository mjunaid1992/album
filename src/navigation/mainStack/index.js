import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens';
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
        </StackAuth.Navigator>
    );
};