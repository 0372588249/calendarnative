import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

const ListZodiac =[
    {
        id:1,
        name:'Bach Duong',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
di choi thoi 
di choi thoi
di choi thoi 
di choi thoi 
di choi thoi 
di choi thoi
di choi thoi 
di choi thoi 
di choi thoi 
di choi thoi
di choi thoi 
di choi thoi 
di choi thoi 
di choi thoi
di choi thoi 
di choi thoi
di choi thoi 
di choi thoi 
di choi thoi 
di choi thoi`

    },
    {
        id:2,
        name:'Kim Nguu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:3,
        name:'Song Tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:4,
        name:'Cu Giai',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:5,
        name:'Su tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:6,
        name:'Xu nu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:7,
        name:'Thien Binh',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:8,
        name:'Bach Duong',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:9,
        name:'Kim Nguu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:10,
        name:'Song Tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:11,
        name:'Cu Giai',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:12,
        name:'Su tu',
        image:require('../../assets/images/image-analysis.png'),
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
];


class ZodiacToday extends React.Component {
    render() {
        let { id } = this.props.route.params;
        
        let item = ListZodiac.find(obj => obj.id == id);

        return (
            <ScrollView style = {styles.container}
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
                <Image style={styles.image}
                    source={item.image}
                />
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Text style={styles.content}>
                {item.content}
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

export default ZodiacToday;
