import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Props, SliceProfile, SlicesHome } from './interfaceInject';
import InjectHOC from './InjectHOC';

import Home from '@screens/Home/Home';
import Profile from '@screens/Profile/Profile';

import { getAllNoteRedux } from '@presenter/io/noteSlice';
import { logoutRedux } from '@presenter/io/userSlice';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'rgba(231,76,60,1)' },
                lazy: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'clipboard-check-multiple'
                            : 'clipboard-check-multiple-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={InjectHOC<Props, SlicesHome>(Home, { getAllNoteRedux })}
                options={{
                    title: 'Notes',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={InjectHOC<Props, SliceProfile>(Profile, { logoutRedux })}
                options={{
                    title: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
}

export default TabsNavigation