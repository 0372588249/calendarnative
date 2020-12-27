import React from 'react';
import { TouchableOpacity, StyleSheet, View,
    Text, TouchableWithoutFeedback, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import asset from '../asset';
import { convertTimestampToDatetime } from '../utils/convertDateTime';
import { CreateNoteAPI } from '../api';

export default class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelectTime: false,
            dataNote: {
                title: "",
                time: 0,
                content: "",
            }
        };
    }
    _hideSelectTime = () => {
        this.setState({ isSelectTime: false })
    };

    _handleConfirmTime = (date) => {
        this.setState({ isSelectTime: false })
        this.setState({ dataNote: { ...this.state.dataNote, time: date.getTime() } });
        console.log("date", this.state.dataNote.time)
    };

    addNote=()=>{
        const { dataNote } = this.state
        console.log("date", dataNote)
        CreateNoteAPI(dataNote.title,dataNote.time,dataNote.content,(data)=>{
            console.log("date", data)
            if (data.error.code == 200) {
                this.props.navigation.goBack()
            }
        })
    }
    render() {
        const { dataNote } = this.state
        return (
            <View style={styles.container}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={asset.icons.back_white} style={styles.backIconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ghi Chú</Text>
                <TouchableOpacity onPress={()=>this.addNote()}>
                    <Text style={styles.txt_edit}>Lưu</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.titleNote}>
                    <Text style={styles.title}>Tiêu đề:</Text>
                    <TextInput style={styles.inputNote}
                        value={dataNote.title}
                        onChangeText={(e) => {
                            dataNote.title = e
                            this.setState({ dataNote })
                        }} />
                </View>
                <TouchableWithoutFeedback onPress={() => this.setState({ isSelectTime: true })}>
                    <View style={styles.view_element}>
                        <Text style={styles.txt_hoten}>Ngày </Text>
                        <View style={styles.view_select}>
                            <Text style={styles.inp_name}>{this.state.dataNote.time !== "" ? `${convertTimestampToDatetime(this.state.dataNote.time)}` : "Chọn ngày"}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <ScrollView>
                    <TextInput multiline={true}
                        style={styles.inputContentNote}
                        value={dataNote.content}
                        placeholder="Nội dung"
                        onChangeText={(e) => {
                            dataNote.content = e
                            this.setState({ dataNote })
                        }} />

                </ScrollView>
                <DateTimePickerModal
                    display="spinner"
                    isVisible={this.state.isSelectTime}
                    onConfirm={(date) => this._handleConfirmTime(date)}
                    onCancel={(date) => this._hideSelectTime(date)}
                    date={new Date()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height:50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10
    },
    headerTitle: {
        fontFamily: 'Avenir', color: '#ffffff', fontSize: 20
    },
    backIconStyle: {
        width: 30, height: 30
    },
    txt_edit: {
        color: "#ffffff", fontSize: 18, fontWeight: 'bold'
    },
    drawContent: {
        height: '92%',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        marginTop: '5%',
    },
    titleNote: {
        flexDirection: 'row',
        marginLeft:10,
    },
    title: {
        fontSize: 26,
        marginTop: '5%',
    },
    inputNote: {
        width: "70%",
        fontSize: 26,
        marginTop: '2%',
        borderBottomWidth: 2,
        borderBottomColor: "gray",
    },
    inputContentNote: {
        marginLeft:10,
        width: "95%",
        fontSize: 20,
        marginTop: '2%',
        borderBottomWidth: 2,
        borderBottomColor: "gray",
    },
    content: {
        backgroundColor: 'white',
        width: '96%',
        marginTop: '5%',
        fontSize: 22,
    },
    txt_hoten: {
        color: '#D7D7D7', fontSize: 16
    },
    inp_name: {
        fontSize: 16, marginTop: -5, height: 40

    },
    view_element: {
        width: '95%', padding: 5, height: 40, marginTop: 10,flexDirection: 'row',
        borderWidth: 1, borderRadius: 5, borderColor: "#AFAEAF",
        marginLeft:10,
        backgroundColor: "#ffffff"
    },
    view_select: {
        width: '100%',
        flexDirection: 'row', justifyContent: 'space-between', padding: 6,
        height: 60,
    },
});


