/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import ListMonthScreen from './MonthScreen';
import Header from '../shared/Header';
import ContainerDayScreen from './ContainerDayScreen';

import DetailDate from './DetailDate';

import { createStackNavigator, HeaderTitle, TransitionPresets } from '@react-navigation/stack';



// date-time now
// interval update time


const Stack = createStackNavigator();


class MainScreen extends React.Component{

  render(){
    return (
      <View style={styles.container}>
        <Header 
          navigation={this.props.navigation}
        />
        <Stack.Navigator
          >
            <Stack.Screen name="ContainerDayScreen" component={ContainerDayScreen} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="ListMonthScreen" component={ListMonthScreen} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="DetailDate" component={DetailDate} 
              options={{
                gestureEnabled:true,
                gestureDirection:'horizontal',
                ...TransitionPresets.ModalSlideFromBottomIOS,
                title:'Sự kiện trong ngày',
              }}
            />
          </Stack.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
});

export default MainScreen;
