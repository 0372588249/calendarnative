import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';


export default function TotalBill(props) {
    return (
        <View>
            <Modal
                isVisible={props.isVisible}
                onBackButtonPress={props.closeModal}
                onBackdropPress={props.closeModal}
                animationInTiming={500}
                animationOutTiming={700}>
                <View style={{ flex: 0.5, backgroundColor: '#fff', justifyContent: 'center' }}>
                    <Text style={{ ...styles.checkoutTitle, color: '#333' }}>Total :  $</Text>
                    <TouchableOpacity style={styles.checkoutButton} onPress={() => { props.closeModal() }}>
                        <Text style={styles.checkoutTitle}>ORDER</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
})