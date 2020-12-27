import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainScreen from './screens/MainScreen';
import ZodiacScreen from './screens/ZodiacScreen';
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent';
import LaughStory from './screens/LaughStory';
import StackUserScreen from './screens/StackUserScreen';
import StoryScreen from './screens/StoryScreen';

const Drawer = createDrawerNavigator();


class App extends React.Component{


  render() {
    return (
      <NavigationContainer >
          <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: {marginVertical: 5},
          }}
          drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
          >
            <Drawer.Screen name="MainScreen" component={MainScreen} />
            <Drawer.Screen name="ZodiacScreen" component={ZodiacScreen} />
            <Drawer.Screen name="LaughStory" component={LaughStory} />
            <Drawer.Screen name="UserInfo" component={StackUserScreen} />
            <Drawer.Screen name="StoryScreen" component={StoryScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
});

export default App;
