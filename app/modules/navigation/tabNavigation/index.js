import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstScreen from '../../../views/firstScreen';
import SecondScreen from '../../../views/secondScreen';
import ThirdScreen from '../../../views/thirdScreen';

const TabNav = createMaterialTopTabNavigator();

const TabNavigation = () =>(
    <TabNav.Navigator initialRouteName='First Screen'>
        <TabNav.Screen name='First Screen' component={FirstScreen}/>
        <TabNav.Screen name='Second Screen' component={SecondScreen}/>
        <TabNav.Screen name='Third Screen' component={ThirdScreen}/>
    </TabNav.Navigator>
)

export default TabNavigation;