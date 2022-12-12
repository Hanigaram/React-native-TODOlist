import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from './Calendar';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TabIcon = ({ name, size, color }) => {

    return <MaterialCommunityIcons name={name} size={size} color={color} />;

};

const Tab = createBottomTabNavigator();

const CalendarNavigation = () => {

    return (

        <Tab.Navigator>

            <Tab.Screen name="Calendar" component={Calendar}

                        options={{

                            headerShown: false,

                            tabBarIcon: props => TabIcon({ ...props, name: 'calendar'}),

                        }}/>

        </Tab.Navigator>

    );

};

export default CalendarNavigation;