import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import DayScreen from './DayScreen';
import moment from 'moment';




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();


class ContainerDayScreen extends React.Component{

  cloneTime = () =>{
    return moment();
  }
  render(){
      return (
        <Tab.Navigator
          initialRouteName='DayScreen6'
          tabBarOptions={{
            style: { display: 'none' },
          }}
        >
            <Tab.Screen name="DayScreen1">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().subtract(5, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen2">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().subtract(4, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen3">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().subtract(3, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen4">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().subtract(2, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen5">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().subtract(1, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen6">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime()} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen7">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().add(1, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen8">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().add(2, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen9">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().add(3, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen10">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().add(4, 'days')} />}
            </Tab.Screen>
            <Tab.Screen name="DayScreen11">
                {(props) => <DayScreen  {...props} timeCurrent={this.cloneTime().add(5, 'days')} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
});

export default ContainerDayScreen;
