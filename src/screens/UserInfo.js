import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import DataInfoManager from '../DataManager/DataInfoManager';

const dataInfoManager = DataInfoManager.getDataInfoManagerInstance();

export default class UserInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataInfo:{
                name: "Nguyen Van A",
                phone_number: "0327921777",
                dob: "09/09/1998",
                gender: 2,
                address: "Ha Noi",
                email: "hadsh@gmail.com",
                method_login: [],
            },
            profile:[],
        };
    }
    componentDidMount(){
        var userInfo = dataInfoManager.getDataInfo()
        this.setState({profile:userInfo})
    }
    render(){
        const{profile}=this.state
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    {/* <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={} style={styles.backIconStyle} />
                    </TouchableOpacity> */}
                    <Text style={styles.headerTitle}>Tài khoản của tôi</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ChangeInfo")}>
                        <Text style={styles.txt_edit}>Sửa</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Họ và tên</Text>
                        <Text style={styles.txt_name}>{profile.full_name}</Text>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Số điện thoại</Text>
                        <Text style={styles.txt_name}>{profile.phone_number}</Text>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Ngày sinh</Text>
                        <Text style={styles.txt_name}>{profile.dob}</Text>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Giới tính</Text>
                        <Text style={styles.txt_name}>{!profile.gender ? "" : (profile.gender == 1 ? "Nữ" : "Nam")}</Text>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Địa chỉ</Text>
                        <Text style={styles.txt_name}>{profile.address}</Text>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Email</Text>
                        <Text style={styles.txt_name}>{profile.email}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#AFAEAF', paddingTop: 5 },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    },
    view_element: {
        width: '100%', padding: 5, height: 60, flexDirection: 'row', justifyContent: "space-between",
        backgroundColor: "#ffffff", borderBottomWidth: 1, borderBottomColor: "#AFAEAF", alignItems: "center"
    },
    txt_hoten: {
        color: '#D7D7D7', fontSize: 18
    },
    txt_name: {
        fontSize: 18, paddingLeft: 15, paddingRight: 10

    },
    txt_edit: {
        color: "black", fontSize: 18, fontWeight: 'bold'
    }
});