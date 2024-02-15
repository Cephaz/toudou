import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const tabBarOptions = (name: string) => ({
  tabBarIcon: ({color, size}: {color: string; size: number}) => (
    <Icons name={name} color={color} size={size} />
  ),
});

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={tabBarOptions('home')}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={tabBarOptions('home')}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
