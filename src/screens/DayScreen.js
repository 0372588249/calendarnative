import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,

} from 'react-native';

import moment from 'moment';
import 'moment-lunar';

var today = new Date();
const { height, width } = Dimensions.get('window');

class ImageBetween extends React.Component{

    render(){
        return (
            <Image
                style={styles.imageBetween}
                source={this.props.sourceImage}
            />
        );
    }
}
class CalendarBetween extends React.Component{


    getMonthAndYear = () =>{
        let month = this.props.month;
        let year = this.props.year;
        if(month != null && year != null)
            return 'TH.' + month + ' - ' + year;
        return "No data."
    }

    render(){
        return (
            <View
                style={styles.calendarBetween}
            >
                <Text style={styles.weekday}>
                    {this.props.weekday}
                </Text>
                <View
                    style={styles.detailDate}
                >
                    <Text
                        style={styles.day}
                    >
                        {this.props.day}
                    </Text>
                    <Text
                        style={styles.monthAndYear}
                    >
                        {this.getMonthAndYear()}
                    </Text>
                </View>
            </View>
        );
    }
}



class Between extends React.Component{


    getMonth = () =>{
        let dt = this.props.datetime;
        let value = "";
        if (dt != null) {
            switch (dt.day()) {
                case 0: value = 'Chủ nhật';
                    break;
                case 1: value = 'Thứ hai';
                    break;
                case 2: value = 'Thứ ba';
                    break;
                case 3: value = 'Thứ tư';
                    break;
                case 4: value = 'Thứ năm';
                    break;
                case 5: value = 'Thứ sáu';
                    break;
                case 6: value = 'Thứ bảy';
                    break;
                default: value = "";
            }
        }
        return value;
    }
    render() {
        return (
            <View
                style={styles.between}
            >
                <ImageBetween
                    sourceImage={this.props.image}
                />
                <CalendarBetween
                    weekday = {this.getMonth()}
                    day = {this.props.datetime.date()}
                    month={this.props.datetime.month() + 1}
                    year={this.props.datetime.year()}
                />
            </View>
        );
    }
}

class Quote extends React.Component{

    getNameAuthor = () =>{
        let name = this.props.authorQuote;
        if(name != null)
            return '- ' + name + ' -';
        else
            return '- Anonymus -';
    }
    render(){

        return(
            <View style={styles.quote}>
                <Text style={styles.contentQuote}>
                    {this.props.contentQuote}
                </Text>
                <Text style={styles.authorQuote}>
                    {this.getNameAuthor()}
                </Text>
            </View>
        );
    }
}

class FooterItem extends React.Component{
    render(){
        return (
            <View style={styles.footerItem}>
                <Text style={styles.titleFooterItem}>
                    {this.props.title}
                </Text>
                <Text style={[styles.timeFooterItem, this.props.fontSizeTime]}>
                    {this.props.time}
                </Text>
                <Text style={styles.zodiacFooterItem}>
                    {this.props.zodiac}
                </Text>
            </View>
        );
    }
}

class Footer extends React.Component{

    

    constructor(){
        super();
        this.state = {hourCurrent: moment()};

        setInterval(() => {
            this.setState(
              { hourCurrent: moment()}
            );
        }, 1000);
    }
    componentWillUnmount(){
        
    }
    getTime = (cur) =>{
        let h = cur.hour();
        let m = cur.minutes();
        if(h < 10){
            h = '0'+ h;
        }
        if(m < 10){
            m = '0'+ m;
        }
        return h + ':' + m;
    }
    getDate = () => {
        if (this.props.datetime != null) {
            let d = this.props.datetime.date();
            let m = this.props.datetime.month();
            let y = this.props.datetime.year();

            let value = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('DD');
            return value;
        }
        return '';
    }
    getMonth = () => {
        if (this.props.datetime != null) {
            let d = this.props.datetime.date();
            let m = this.props.datetime.month();
            let y = this.props.datetime.year();

            let value = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('MM');
            return value;
        }
        return '';
    }

    UniversalToJD(D,M,Y) {
        let JD;
        if (Y > 1582 || (Y == 1582 && M > 10) || (Y == 1582 && M == 10 && D > 14)) {
            JD = 367*Y - parseInt(7*(Y+parseInt((M+9)/12))/4) - parseInt(3*(parseInt((Y+(M-9)/7)/100)+1)/4) + parseInt(275*M/9)+D+1721028.5;
        } else {
            JD = 367*Y - parseInt(7*(Y+5001+parseInt((M-9)/7))/4) + parseInt(275*M/9)+D+1729776.5;
        }
        return JD;
    }

    getYearZodiac = ()=>{
        let can = ["Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh"];
        let chi = ["Dậu","Tuất","Hợi","Tý","Sửu","Dần","Mão","Thìn" ,"Tỵ","Ngọ","Mùi","Thân"];
        if (this.props.datetime == null) {
            return "";
        }
        let d = this.props.datetime.date();
        let m = this.props.datetime.month();
        let y = this.props.datetime.year();
        let year = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('YYYY');
        let canIndex = 0
        let chiIndex = 0;

        let mol = year%10;
        switch (mol){
            case 0: canIndex=9;break;
            case 1: canIndex=0;break;
            case 2: canIndex=1;break;
            case 3: canIndex=2;break;
            case 4: canIndex=3;break;
            case 5: canIndex=4;break;
            case 6: canIndex=5;break;
            case 7: canIndex=6;break;
            case 8: canIndex=7;break;
            case 9: canIndex=8;break;
        }
        mol = year%12;//tinh chi
        switch(mol){
            case 0: chiIndex=11;break;
            case 1: chiIndex=0;break;
            case 2: chiIndex=1;break;
            case 3: chiIndex=2;break;
            case 4: chiIndex=3;break;
            case 5: chiIndex=4;break;
            case 6: chiIndex=5;break;
            case 7: chiIndex=6;break;
            case 8: chiIndex=7;break;
            case 9: chiIndex=8;break;
            case 10: chiIndex=9;break;
            case 11: chiIndex=10;break;
        }
        return 'Năm ' + can[canIndex] + ' ' + chi[chiIndex];
    }
    getMonthZodiac = ()=>{
        let result = '';
        let d = this.props.datetime.date();
        let m = this.props.datetime.month();
        let y = this.props.datetime.year();

        let month = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('MM');
        let year = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('YYYY');

        let canM;
        let chiM = ["Dần","Mão","Thìn" ,"Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi","Tý","Sửu"];
        //let canY = ["Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh"];
        let mol = year%10;
        let canYIndex = 0
        switch (mol){
            case 0: canYIndex=9;break;
            case 1: canYIndex=0;break;
            case 2: canYIndex=1;break;
            case 3: canYIndex=2;break;
            case 4: canYIndex=3;break;
            case 5: canYIndex=4;break;
            case 6: canYIndex=5;break;
            case 7: canYIndex=6;break;
            case 8: canYIndex=7;break;
            case 9: canYIndex=8;break;
        }
        if(canYIndex == 3 || canYIndex == 8){
            // Bính
            canM = ["Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý","Giáp","Ất"];
        }
        else if(canYIndex == 4 || canYIndex == 9){
            // Mậu
            canM = ["Mậu","Kỷ","Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh"];
        }
        if(canYIndex == 5 || canYIndex == 0){
            // Canh
            canM = ["Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ"];
        }
        if(canYIndex == 6 || canYIndex == 1){
            // Nhâm
            canM = ["Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân"];
        }
        if(canYIndex == 7 || canYIndex == 2){
            // Giáp
            canM = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"];
        }

        switch(month){
            case '1': result = canM[0] + ' ' + chiM[0] ;break;
            case '2': result = canM[1] + ' ' + chiM[1] ;break;
            case '3': result = canM[2] + ' ' + chiM[2] ;break;
            case '4': result = canM[3] + ' ' + chiM[3] ;break;
            case '5': result = canM[4] + ' ' + chiM[4] ;break;
            case '6': result = canM[5] + ' ' + chiM[5] ;break;
            case '7': result = canM[6] + ' ' + chiM[6] ;break;
            case '8': result = canM[7] + ' ' + chiM[7] ;break;
            case '9': result = canM[8] + ' ' + chiM[8] ;break;
            case '10': result = canM[9] + ' ' + chiM[9] ;break;
            case '11': result = canM[0] + ' ' + chiM[10] ;break;
            case '12': result = canM[1] + ' ' + chiM[11] ;break;
        }
        return result;
    }
    getDayZodiac = ()=>{
        let can = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"];
        let chi = ["Tý","Sửu","Dần","Mão","Thìn" ,"Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
        if (this.props.datetime == null) {
            return '';
        }

        let d = this.props.datetime.date();
        let m = this.props.datetime.month();
        let y = this.props.datetime.year();

        let indexX = parseInt(this.UniversalToJD(d,m,y)+9.5) % 10;

        let indexY = parseInt(this.UniversalToJD(d,m,y) + 1.5) % 12;

        return can[indexX] + ' ' + chi[indexY];
    }
    getHourZodiac = ()=>{
        let clone = moment(this.props.datetime);
        let h = clone.hour();
        let chi = ["Tý","Sửu","Dần","Mão","Thìn" ,"Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
        let index = 0;
        if((h >= 0 && h < 1) || h == 23){
            index = 0;
        } else if(h >= 1 && h < 3){
            index = 1;
        }
        else if(h >= 3 && h < 5){
            index = 2;
        }
        else if(h >= 5 && h < 7){
            index = 3;
        }
        else if(h >= 7 && h < 9){
            index = 4;
        }
        else if(h >= 9 && h < 11){
            index = 5;
        }
        else if(h >= 11 && h < 13){
            index = 6;
        }
        else if(h >= 13 && h < 15){
            index = 7;
        }
        else if(h >= 15 && h < 17){
            index = 8;
        }
        else if(h >= 17 && h < 19){
            index = 9;
        }
        else if(h >= 19 && h < 21){
            index = 10;
        }
        else if(h >= 21 && h < 23){
            index = 11;
        }
        //console.log(h);
        return 'Giờ ' + chi[index];
    }
    render() {
        return (
            <View style={styles.footer}>
                <View
                    style={{
                        borderBottomColor: 'silver',
                        borderBottomWidth: 1,
                    }}
                />
                <Text style={styles.headerFooter}>
                    {this.getYearZodiac()}
                </Text>
                <View style={styles.listFooterItems}>
                    <FooterItem
                        title='Giờ'
                        time={this.getTime(this.state.hourCurrent)}
                        zodiac={this.getHourZodiac()}
                    />
                    <FooterItem
                        title='Ngày'
                        time={this.getDate()}
                        zodiac={this.getDayZodiac()}
                    />
                    <FooterItem
                        title='Tháng'
                        time={this.getMonth()}
                        zodiac={this.getMonthZodiac()}
                    />
                </View>
            </View>
        );
    }
}



class DayScreen extends React.Component{
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <Between 
                    datetime = {this.props.timeCurrent}
                    image = {require('../../assets/images/1.jpg')}
                />
                <Quote
                    contentQuote="Ra xã hội làm ăn bươn chải. Liều thì ăn nhiều, không liều thì ăn ít."
                    authorQuote="Huấn Hoa Hồng"
                />
                <Footer
                    zodiacYear='Năm Canh Tý'
                    datetime = {this.props.timeCurrent}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        height: (height/100)*89.7,
        width: width,
        backgroundColor: 'black', //'rgba(176, 66, 245, 0.2)',
        alignItems:'center',
    },
    between:{
        width:'80%',
        height:'45%',
        marginTop:'15%',
        alignItems:'center',
    },
    imageBetween:{
        width:'90%',
        height:'80%',
    },
    calendarBetween:{
        width:'40%',
        height:'45%',
        marginTop:'-25%',
        backgroundColor:'gray',
        borderRadius:5,
    },
    weekday:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:'20%',
        backgroundColor:'#378471',
        fontSize:18,
        color:'white',
        textAlign:'center',
    },
    detailDate:{
        backgroundColor:'#208d85',
        height:'80%',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        alignItems:'center',
    },
    day:{
        color:'white',
        fontSize:60,
    },
    monthAndYear:{
        color:'white',
    },
    quote:{
        width:'90%',
        marginTop:'5%',
        height:'15%',
        justifyContent:'center',
    },
    contentQuote:{
        textAlign:'center',
        color:'white',

    },
    authorQuote:{
        textAlign:'center',
        color:'white',
        fontStyle:'italic',
        marginTop:'2%',
    },

    footer:{
        width:'90%',
        height:'20%',
        marginTop:'2%',
    },
    headerFooter:{
        textAlign:'center',
        color:'white',
        marginTop:'3%',
        fontSize:25,
    },
    listFooterItems:{
        marginTop:'4%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footerItem:{
        width:'30%',
        marginTop:'3%',
        alignItems:'center',
        
    },
    titleFooterItem:{
        color:'white',
        fontSize:20,
    },
    timeFooterItem:{
        color:'white',
        fontSize:20,
        marginTop:'7%',
    },
    zodiacFooterItem:{
        color:'white',

        marginTop:'7%',
    },
    
});

export default DayScreen;
