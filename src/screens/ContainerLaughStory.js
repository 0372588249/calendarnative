import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';


export default class ContainerLaughStory extends React.Component {
    render() {
        let { data } = this.props.route.params;
        return (
            <ScrollView style = {styles.container}
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
               
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.content}>
                {data.container}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'red',
      
    },
    drawContent:{
        height:'92%',
    },
    image:{
        width:120,
        height:120,
        borderRadius:100,
        borderWidth: 2,
        marginTop:'5%',
    },
    title:{
        fontSize:27,
        marginTop:'5%',
    },
    content:{
        backgroundColor:'white',
        width:'96%',
        marginTop:'5%',
        fontSize:22,
    },
});


