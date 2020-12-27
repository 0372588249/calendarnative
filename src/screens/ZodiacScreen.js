import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header2 from '../shared/Header2';
import { Dimensions } from 'react-native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import ZodiacToday from './ZodiacToday'

const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;


const ListZodiac =[
    {
        id:1,
        name:'Bach Duong',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:2,
        name:'Kim Nguu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:3,
        name:'Song Tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:4,
        name:'Cu Giai',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:5,
        name:'Su tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:6,
        name:'Xu nu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:7,
        name:'Thien Binh',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:8,
        name:'Bach Duong',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:9,
        name:'Kim Nguu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:10,
        name:'Song Tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:11,
        name:'Cu Giai',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
    {
        id:12,
        name:'Su tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
    },
];

class ZodiacComponent extends React.Component{

    render(){
        return (
            <TouchableOpacity style = {styles.zodiacComponent}
                onPress={() =>{
                    if(this.props.navigation != null){
                        /**
                         * do some thing
                         */
                        if(this.props.navigation != null)
                            this.props.navigation.navigate('ZodiacToday',{
                                id:this.props.item.id,
                            });
                    }
                }}
            >
                <Image style = {styles.zodiacImage}
                    source={this.props.item.image}
                />
                <Text style ={styles.zodiacName}>
                    {this.props.item.name}
                </Text>
                <Text style ={styles.zodiacTime}>
                    {this.props.item.time}
                </Text>
            </TouchableOpacity>
        );
    }
}


class ZodiacScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header2 
                    navigation={this.props.navigation}
                />
                <View style = {styles.drawContent}>
                    <Text style={styles.title}>
                        Cung Hoàng Đạo
                    </Text>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListZodiac}
                        renderItem={({item}) =>{
                            return <ZodiacComponent item ={item} navigation={this.props.navigation}/>;
                        }}
                        keyExtractor = {item => item.id}
                        numColumns = '3'
                        columnWrapperStyle={styles.rowItem}
                    >
                    </FlatList>
                </View>
            </View>

        );
    }
}
/**
 * screenOptions={{
                    headerShown: false
                }}
 */
class StackListZodiacScreen extends React.Component{

    render(){
        ZodiacToday
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
                <Stack.Screen name="ZodiacScreen" component = {ZodiacScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ZodiacToday" component={ZodiacToday} 
                    options={
                        {
                            title:'Cung hoàng đạo hôm nay',
                            headerTintColor:'forestgreen',
                            headerTitleStyle: {
                                fontFamily: 'Lora-Regular',
                            },
                        }
                    }
                    
                />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    headerNavigation:{
        color:'red',
    },
    container:{
      flex:1,
      backgroundColor:'white',
    },
    drawContent:{
        height:'92%',
        alignItems:'center',
    },
    title:{
        fontSize:28,
        height:'6.2%',
        fontFamily:"Wellside",
    },
    containerScrollZodiac:{
        width:'100%',
        height:'93.8%',

    },
    rowItem: {
        flex: 1,
        justifyContent: 'space-around',
    },
    zodiacComponent:{
        width: widthItemZodiac,
        height: HeightItemZodiac,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'6%',
    },
    zodiacImage:{
        width:WidthImage,
        height:HeightImage,
        borderRadius:50,
        borderColor:'silver',
        borderWidth: 2,
    },
    zodiacName:{
        color:'#ff7654',
    },
    zodiacTime:{

    },

});

export default StackListZodiacScreen;
