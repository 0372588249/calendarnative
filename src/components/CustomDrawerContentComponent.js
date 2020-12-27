import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


import MonthComponent from '../components/MonthComponent'

const testIDs = require('../testIDs');


class CustomDrawerContentComponent extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={[styles.drawImage]}
                        source={require('../../assets/images/image-analysis.png')}
                    />
                </View>



                <DrawerContentScrollView 
                    {...this.props}
                    style={styles.drawListItem}    
                >
                    <DrawerItemList {...this.props} />
                    <DrawerItem
                        label="Visit Us"
                        onPress={() => {
                            /**
                             * do some thing
                             */
                            // Linking.openURL('#')
                        }}
                    />
                    <View style={styles.customItem}>
                        <Text
                            onPress={() => {
                                /**
                                 * do some thing
                                 */
                            }}
                        >
                            Rate Us
                        </Text>
                        <Image
                            source={require('../../assets/images/image-analysis.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                </DrawerContentScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 150,
        backgroundColor: 'silver',
        
        alignItems: 'center',
        justifyContent:'center',
    },
    drawImage: {
        width: 120,
        height: 120,
        borderRadius: 80,
    },
    drawListItem:{
        marginTop:'10%',
        width:'100%',
    },


    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
        borderRadius:10,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
});

export default CustomDrawerContentComponent;
