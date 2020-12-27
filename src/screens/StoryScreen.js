import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import moment from 'moment';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ContainerStoryScreen from './ContainerStoryScreen';
import Draggable from 'react-native-draggable';
import CreateNote from './CreateNote';
import { GetListNote } from '../api';

const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;

class StoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNote:[]

        };
    }
    componentDidMount() {
        this.GetListNote();
    }
    GetListNote=()=>{
        GetListNote((data)=>{
            this.setState({dataNote: data.data})
            console.log(this.state.dataNote)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawContent}>
                    <FlatList style={styles.containerScrollZodiac}
                        data={this.state.dataNote}
                        keyExtractor = {item => item.id}
                        renderItem={({ item }) => {
                            const dateTime = moment(new Date(item.date_time)).format('MMMM Do YYYY');
                            return (<View><View style={styles.brLaugh}>
                            </View>
                                <TouchableOpacity style={styles.itemLaugh} onPress={() => {
                                    if (this.props.navigation != null)
                                        this.props.navigation.navigate('ContainerStoryScreen', {
                                            data: item,
                                        });
                                }}>
                                    <Text style={styles.laughTitle}>
                                        {item.note_title}

                                        <Text style={styles.dateTitle}>
                                            {dateTime}
                                        </Text>
                                    </Text>
                                    <Text numberOfLines={2} width={100} style={styles.laughNoiDung}>
                                        {item.note_content}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                    ></FlatList>
                </View>
                <Draggable x={"80%"} y={400} 
                renderColor='red' 
                isCircle 
                onPressIn={()=>this.props.navigation.navigate('CreateNote')}
                renderSize={50} 
                renderText='+'/>
            </View>
        );
    }
}
export default class MenuStory extends React.Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        ...TransitionPresets.ModalSlideFromBottomIOS
                    }
                }
            >
                <Stack.Screen name="StoryScreen" component={StoryScreen}
                    options={{
                        title: 'Ghi Chu',
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontFamily: 'Lora-Regular',
                        },
                        headerStyle: {
                            backgroundColor: '#0877c2'
                        }
                    }} />
                <Stack.Screen name="ContainerStoryScreen" component={ContainerStoryScreen}
                    options={{headerShown: false,}}/>
                <Stack.Screen name="CreateNote" component={CreateNote}
                    options={{headerShown: false,}}/>
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    headerNavigation: {
        color: 'red',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    drawContent: {
        height: '92%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        height: '6.2%',
        fontFamily: "Wellside",
    },
    containerScrollZodiac: {
        width: '100%',
        height: '93.8%',

    },
    rowItem: {
        flex: 1,
        justifyContent: 'space-around',
    },
    zodiacComponent: {
        width: "100%",
        height: 250,
    },
    zodiacImage: {
        width: WidthImage,
        height: HeightImage,
        borderRadius: 50,
        borderColor: 'silver',
        borderWidth: 2,
    },
    backGroundZodiacName: {
        width: "100%",
        backgroundColor: "#e5e5e5",
    },
    brLaugh: {
        height: 1,
        width: "100%",
        backgroundColor: "#EEEEEE",
    },
    itemLaugh: {
        width: "96%",
    },
    zodiacName: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 15,
        marginTop: 2,
        marginBottom: 2,
    },
    laughTitle: {
        color: '#0877c2',
        fontSize: 23,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    },
    dateTitle: {
        color: 'gray',
        fontSize: 14,
    },
    laughNoiDung: {
        lineHeight: 22,
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 10,
    },

});
