import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabNavigation';

const RootNavigation = () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);

export default RootNavigation;