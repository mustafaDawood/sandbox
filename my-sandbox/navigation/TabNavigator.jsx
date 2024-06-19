import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Favorites from '../Screens/Favorites'
import Profile from '../Screens/Profile'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
        <Tab.Screen name='Home' component={Home}
        options={{
            tabBarIcon : ({color, size}) => (
                <FontAwesome name="home" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen  name='Favorites' component={Favorites}
        options={{
            tabBarIcon : ({color,size}) => (
                <FontAwesome6 name="heart" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='Profile' component={Profile}
        options={{
            tabBarIcon : ({color,size}) => (
                <Entypo name="user" size={size} color={color} />
            )
        }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator