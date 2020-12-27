import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
import asset from '../asset';

function Select_District_Modal(props) {
    return (
        <Modal
            isVisible={props.visible_district}
            useNativeDriver={true}
            // animationIn={'fadeInUp'}
            // animationOut={'fadeOutDown'}
            // animationInTiming={500}
            // animationOutTiming={500}
            // swipeDirection={'down'}
            onSwipeComplete={props.closeModal}
            onBackButtonPress={props.closeModal}
            onBackdropPress={props.closeModal}
        >
            <View style={styles.view_body}>
                <View style={styles.view_container}>
                    <View style={styles.view_top}>
                        <TouchableOpacity onPress={() => props.closeModal()}>
                            <Image style={styles.icon_exit} source={asset.icons.cancel} />
                        </TouchableOpacity>
                        <Text style={styles.txt_title}>Chọn Quận/Huyện</Text>
                        <View style={styles.icon_exit}></View>
                    </View>
                    <View style={styles.view_inpSearch}>
                        <TextInput style={styles.inp_search} placeholder='Searching...'
                            inlineImageLeft='loupe' inlineImagePadding={15}
                            onChangeText={(value) => props.search(value)}
                        />
                    </View>
                    <ScrollView style={styles.view_options}>
                        {props.options_selectDistrict}
                    </ScrollView>
                </View >
            </View>

        </Modal>
    )
}
export default Select_District_Modal;

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    view_body: {
        flex: 1, justifyContent: 'flex-end', alignItems: 'center'
    },
    view_container: {
        width: DEVICE_WIDTH - 20,
        height: DEVICE_HEIGHT - 50,
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    view_top: {
        height: 50, width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1, borderBottomColor: "#D1D1D1"
    },
    view_inpSearch: {
        height: 70, width: '100%',
        alignItems: 'center', justifyContent: 'center'
    },
    view_options: {
        paddingLeft: 15, paddingRight: 15

    },
    icon_exit: {
        width: 15, height: 15, marginLeft: 10
    },
    txt_title: {
        fontSize: 18
    },
    inp_search: {
        width: '85%',
        height: 40,
        borderWidth: 1, borderRadius: 10, borderColor: '#D1D1D1'
    },


})
