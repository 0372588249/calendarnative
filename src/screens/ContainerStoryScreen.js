import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';


export default class ContainerStoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckEdit:false,
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

    // addNote=()=>{
    //     const { dataNote } = this.state
    //     console.log("date", dataNote)
    //     CreateNoteAPI(dataNote.title,dataNote.time,dataNote.content,(data)=>{
    //         console.log("date", data)
    //         if (data.error.code == 200) {
    //             this.props.navigation.goBack()
    //         }
    //     })
    // }
    render() {

        var pase;
        if(this.state.isCheckEdit){
            pase = <View style={styles.container}
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
        }else{
            pase = <ScrollView style = {styles.container}
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
               <View style={styles.titleHead}>
                    <Text style={styles.title}>
                        {data.note_title}
                    </Text>
               </View>
                <Text style={styles.content}>
                {data.note_content}
                </Text>
            </ScrollView>
        }

        let { data } = this.props.route.params;
        return pase;
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },
    titleHead:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:"100%",
        height:60
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
        width:'96%',
        marginTop:'5%',
        fontSize:22,
    },
});


