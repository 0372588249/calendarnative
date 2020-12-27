import React, { Component } from 'react';
import {
    View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Text, Image, StyleSheet, TextInput
} from 'react-native';
import asset from '../asset'
import Select_City_Modal from '../modal/Select_City_Modal';
import Select_District_Modal from '../modal/Select_District_Modal';
import Select_Ward_Modal from '../modal/Select_Ward_Modal';
import { xoadauTV } from '../utils/xoadau';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { convertTimestampToDatetime } from '../utils/convertDateTime';
import { isEmail } from '../utils/checkMail';

const data_district = require('../asset/data/district.json');
const data_city = require('../asset/data/city.json');
const data_ward = require('../asset/data/ward.json');

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCity: data_city, dataDistrict: data_district, dataWard: data_ward,
            onSelect_City: false, onSelect_District: false, onSelect_Ward: false,
            optionSelected_City: false, optionSelected_District: false, optionSelected_Ward: false,
            isSelectDob: false, dob_show: "",
            dataInfo: {
                dob: "",
                gender: 0,
            }

        };
    }

    _closeModal = () => {
        this.setState({ onSelect_City: false, onSelect_District: false, onSelect_Ward: false })
    };

    _select_city = (data) => {
        let arr_select_city = []
        data.map((item) => {
            let tmp = <TouchableOpacity style={styles.btn_option} key={item.id}
                // onPress={(e) => this._choose_city(e.target.name)}
                onPress={() => {
                    if (!this.state.optionSelected_City || this.state.optionSelected_City.id !== item.id) {
                        this.setState({ optionSelected_City: item, optionSelected_District: false })
                    } this._closeModal()
                }
                }
            >
                <Text>{item.name}</Text>
                {/* <Image name={item.id} source={(e) => e.target.name == this.state.isChoose ? asset.icons.tick : null} /> */}
            </TouchableOpacity>
            arr_select_city.push(tmp)
        })
        return arr_select_city;
    };

    _checkMail = () => {
        var email = 'abc@vnhow,vn';
        if (isEmail(email)) {
            alert(email + ' là một địa chỉ email đúng');
        } else {
            alert(email + ' là một địa chỉ email sai');
        }
    };
    _select_district = (data) => {
        let arr_select_district = []
        data.map((item) => {
            if (this.state.optionSelected_City.id == item.tinh_id) {
                let tmp = <TouchableOpacity name={`${item.id}`} style={styles.btn_option} key={item.id}
                    // onPress={(e) => this._choose_city(e.target.name)}
                    onPress={() => {
                        if (!this.state.optionSelected_District || this.state.optionSelected_District.id !== item.id) {
                            this.setState({ optionSelected_District: item, optionSelected_Ward: false })
                        } this._closeModal()
                    }}
                >
                    <Text>{item.name}</Text>
                    {/* <Image name={item.id} source={(e) => e.target.name == this.state.isChoose ? asset.icons.tick : null} /> */}
                </TouchableOpacity>
                arr_select_district.push(tmp)
            }
        })
        return arr_select_district;
    };

    _select_ward = (data) => {
        let arr_select_ward = []
        data.map((item) => {
            if (this.state.optionSelected_District.id == item.huyen_id) {
                let tmp = <TouchableOpacity name={`${item.id}`} style={styles.btn_option} key={item.id}
                    // onPress={(e) => this._choose_city(e.target.name)}
                    onPress={() => this.setState({ optionSelected_Ward: item }, () => this._closeModal())}
                >
                    <Text>{item.name}</Text>
                    {/* <Image name={item.id} source={(e) => e.target.name == this.state.isChoose ? asset.icons.tick : null} /> */}
                </TouchableOpacity>
                arr_select_ward.push(tmp)
            }
        })
        return arr_select_ward;
    };

    Search_City = (e) => {
        let text = e.toLowerCase();
        let array = []
        if (text.length > 0) {
            const text_new = xoadauTV(text)
            data_city.map((item) => {
                const text_search = xoadauTV(item.name)
                if (text_search.toLowerCase().search(`${text}`) !== -1) {
                    array.push(item)
                }
            })
        }
        else {
            array = data_city
        }
        return this.setState({ dataCity: array })
    };

    Search_District = (e) => {
        let text = e.toLowerCase();
        let array = []
        if (text.length > 0) {
            const text_new = xoadauTV(text)
            data_district.map((item) => {
                const text_search = xoadauTV(item.name)
                if (text_search.toLowerCase().search(`${text}`) !== -1) {
                    array.push(item)
                }
            })
        }
        else {
            array = data_district
        }
        return this.setState({ dataDistrict: array })
    };

    Search_Ward = (e) => {
        let text = e.toLowerCase();
        let array = []
        if (text.length > 0) {
            const text_new = xoadauTV(text)
            data_ward.map((item) => {
                const text_search = xoadauTV(item.name)
                if (text_search.toLowerCase().search(`${text}`) !== -1) {
                    array.push(item)
                }
            })
        }
        else {
            array = data_ward
        }
        return this.setState({ dataWard: array })
    };

    _showSelectDob = () => {
        this.setState({ isSelectDob: true })
    };

    _hideSelectDob = () => {
        this.setState({ isSelectDob: false })
    };

    _handleConfirmDob = (date) => {
        this.setState({ isSelectDob: false })
    };
    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { dataInfo } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={asset.icons.back_white} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <Text style={headerTitle}>Tài khoản của tôi</Text>
                    <TouchableOpacity onPress={null}>
                        <Text style={styles.txt_edit}>Lưu</Text>
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Họ & tên</Text>
                        <TextInput style={styles.inp_name} />
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Số điện thoại</Text>
                        <TextInput style={styles.inp_name} />
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.setState({ isSelectDob: true })}>
                        <View style={styles.view_element}>
                            <Text style={styles.txt_hoten}>Ngày sinh</Text>
                            <View style={styles.view_select}>
                                <Text style={styles.inp_name}>{this.state.dataInfo.dob !== "" ? `${convertTimestampToDatetime(this.state.dataInfo.dob)}` : "Chọn ngày sinh"}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Giới tính</Text>
                        <View style={styles.view_checkgender}>
                            <TouchableWithoutFeedback onPress={() => this.setState({ dataInfo: { ...dataInfo, gender: 2 } })}><View style={styles.view_female}><Image style={styles.icon_check} source={dataInfo.gender == 2 ? asset.icons.check : asset.icons.uncheck} /><Text style={styles.inp_name}>Nữ</Text></View></TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => this.setState({ dataInfo: { ...dataInfo, gender: 1 } })}><View style={styles.view_male}><Image style={styles.icon_check} source={dataInfo.gender == 1 ? asset.icons.check : asset.icons.uncheck} /><Text style={styles.inp_name}>Nam</Text></View></TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Email</Text>
                        <TextInput style={styles.inp_name} />
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.setState({ onSelect_City: true })}>
                        <View style={styles.view_element}>
                            <Text style={styles.txt_hoten}>Tỉnh/Thành phố</Text>
                            <View style={styles.view_select}>
                                <Text style={styles.inp_name} >{this.state.optionSelected_City ? this.state.optionSelected_City.name : "Chọn Tỉnh/Thành phố"}</Text>
                                <Image style={styles.icon_select} source={asset.icons.arrow_down} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <DateTimePickerModal
                    display="spinner"
                    isVisible={this.state.isSelectDob}
                    onConfirm={(date) => this._handleConfirmDob(date)}
                    onCancel={(date) => this._hideSelectDob(date)}
                    maximumDate={new Date()}
                    date={new Date()}
                />
                <Select_City_Modal
                    visible_city={this.state.onSelect_City}
                    closeModal={() => this._closeModal()}
                    options_selectCity={this._select_city(this.state.dataCity)}
                    search={(e) => this.Search_City(e)} />
                <Select_District_Modal
                    visible_district={this.state.onSelect_District}
                    closeModal={() => this._closeModal()}
                    options_selectDistrict={this._select_district(this.state.dataDistrict)}
                    search={(e) => this.Search_District(e)} />
                <Select_Ward_Modal
                    visible_ward={this.state.onSelect_Ward}
                    closeModal={() => this._closeModal()}
                    options_selectWard={this._select_ward(this.state.dataWard)}
                    search={(e) => this.Search_Ward(e)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, backgroundColor: '#ffffff'
    },
    header: {
        flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10
    },// eslint-disable-line
    headerTitle: {
        fontFamily: 'Avenir', color: '#ffffff', fontSize: 20
    },
    backIconStyle: {
        width: 30, height: 30
    },
    icon_select: {
        width: 15, height: 15,
    },
    body: {
        flex: 10, backgroundColor: '#F6F6F6', paddingTop: 0, padding: 10
    },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#ffffff', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
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
    txt_edit: {
        color: "#ffffff", fontSize: 18, fontWeight: 'bold'
    },
    txt_hoten: {
        color: '#D7D7D7', fontSize: 16
    },
    inp_name: {
        fontSize: 16, marginTop: -5, height: 40

    },
    view_element: {
        width: '100%', padding: 5, height: 60, marginTop: 10,
        borderWidth: 1, borderRadius: 5, borderColor: "#AFAEAF",
        backgroundColor: "#ffffff"
    },
    view_select: {
        width: '100%',
        flexDirection: 'row', justifyContent: 'space-between', padding: 6,
        height: 60,
    },
    view_female: {
        flexDirection: 'row'
    },
    view_male: {
        flexDirection: 'row', paddingLeft: 80
    },
    btn_option: {
        height: 50, borderColor: "#D1D1D1", borderTopWidth: 0.5,
        justifyContent: 'center', padding: 5
    },
    view_checkgender: {
        flexDirection: 'row', width: '100%', justifyContent: 'center', paddingTop: 8

    },
    icon_check: {
        width: 15, height: 15, marginRight: 5
    },
});