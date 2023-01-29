import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home/Home';
import OrderHistory from '../screens/orderHistory/OrderHistory';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#222222',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingVertical: 4,
          paddingBottom: 8,
          height: 60,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderStyle: 'solid',
          borderTopColor: '#f2f2f2',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'fast-food' : 'fast-food-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderHistory}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'receipt' : 'receipt-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        color="red"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
