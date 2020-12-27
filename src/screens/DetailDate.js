import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';


class DetailDate extends React.Component {
    constructor(props){
        super(props);
        let { time } = this.props.route.params;
        this.time = time;
    }

    getDate(){
        
        return this.time.day + '/' + this.time.month + '/' + this.time.year;
    }
    render() {
        
        return (
            <ScrollView style = {styles.container}
            contentContainerStyle={{ alignItems: 'center' }}
            >
                <Text style={styles.date}>
                    {this.getDate()}
                </Text>
                <Text style={styles.title}>
                    Tử vi hằng ngày :
                </Text>
                <Text style={styles.content}>
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                </Text>
                <Text style={styles.title}>
                    Các sự kiện :
                </Text>
                <Text style={styles.content}>
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
                    - Chiến thắng điện biên phủ.
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
    date:{
        fontSize:27,
        marginTop:'5%',
    },
    title:{
        backgroundColor:'white',
        width:'96%',
        marginTop:'8%',
        fontSize:22,
    },
    content:{
        backgroundColor:'white',
        width:'92%',
        marginLeft:'4%',
        marginTop:'1%',
        fontSize:18,
    },
});

export default DetailDate;
