import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ChangeInfo from './ChangeInfo';

const Stack = createStackNavigator();
  
  
export default class StackUserScreen extends React.Component{
    render(){
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        gestureEnabled:true,
                        gestureDirection:'horizontal',
                        ...TransitionPresets.ModalSlideFromBottomIOS
                    }
                }
            >
                <Stack.Screen name="UserInfo" component = {UserInfo} options={{headerShown: false}}/>
                <Stack.Screen name="ChangeInfo" component={ChangeInfo} options={{headerShown: false}}/>
            </Stack.Navigator>
        );
    }
}

