import React from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

const testIDs = require('../testIDs');

class DateComponent extends React.Component {

    constructor(){
        super();
        let date = this.props.date;
        this.state = {
                        lunarDay:this.getLunarDay(date),
                        isSunday:this.isSunday(date),
                        isToday:this.isToday(date),

                    };
    }
    onDayPress = day => {
        setSelected(day.dateString);
        alert('click');
    };

    getLunarDay = (date) => {
        let d = date.day;
        let m = date.month;
        let y = date.year;
        let value = moment().year(date.year).month(date.month).date(date.day).lunar().format('DD');
        if (value == 1) {
            value = moment().year(date.year).month(date.month).date(date.day).lunar().format('MM') + '/' + value;
        }
        return value;
    }

    isSunday = (date) => {

        let dayOfWeek = moment().date(date.day).month(date.month).year(date.year).weekday();

        if (dayOfWeek == 0) {
            console.log(dayOfWeek + ' / ' + moment().date(date.day).month(date.month).year(date.year).format('YYYY-MM-DD'));
            return true;
        }
        return false;
    }
    isToday = (date) => {
        let today = moment();
        if (date.day == today.date()
            && date.month == today.month() + 1
            && date.year == today.year()) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <TouchableOpacity style={[styles.containerDate, { backgroundColor: this.state.isToday == true ? '#4f6386' : '' }]}>
                <Text style={[styles.dateText, { color: state === 'disabled' ? 'gray' : 'black' }, { color: this.state.isSunday ? '#e75802' : 'black' }]}>
                    {date.day}
                </Text>
                <Text style={styles.lunarText}>
                    {this.state.lunarDay}
                </Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    containerDate: {
      width: '80%',
      borderRadius: 8,
    },
    dateText: {
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '600',
      color: 'white',
    },
    lunarText: {
      fontSize: 12,
      color: 'silver',
      textAlign: 'center'
    }
  });
  
  
  export default DateComponent;
  