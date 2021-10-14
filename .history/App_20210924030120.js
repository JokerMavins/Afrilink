/* eslint-disable prettier/prettier */
import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screen/Home'
import UserScreen from './screen/User'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Compte" component={UserScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;