import React, { useState, Fragment } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment-lunar';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],

};


const testIDs = require('../testIDs');

const MonthComponent = (props) => {
  const pDay = props.moment.year() + '-' + (props.moment.month()+1) + '-' + props.moment.date();

  const [selected, setSelected] = useState('');

  const onDayPress = day => {
    setSelected(day.dateString);
    alert('click');
  };

  const getLunarDay = (day) => {
    let d = day.day;
    let m = day.month;
    let y = day.year;
    let value = moment().year(day.year).month(day.month).date(day.day).lunar().format('DD');
    if(value == 1){
      value = moment().year(day.year).month(day.month).date(day.day).lunar().format('MM') + '/'+ value;
    }
    return value;
  }

  const isSunday = (date) => {
    let str = date.year + '' + date.month + '' + date.day;
    let dayOfWeek = moment(str, 'YYYYMMDD').day();
    if (dayOfWeek == 0) {
      return true;
    }
    return false;
  }
  const isToday = (date) => {
    let today = moment();
    if (date.day == today.date()
      && date.month == today.month() + 1
      && date.year == today.year()) {
      return true;
    }
    return false;
  }


  return (
    <Fragment>
      <Calendar
        dayComponent={({ date, state }) => {
          return (
            <View style={[styles.containerDate, { backgroundColor: isToday(date) == true ? '#4f6386' : '' }]}>
              <Text style={[styles.dateText, { color: state === 'disabled' ? 'gray' : 'black' }, { color: isSunday(date) == true ? '#e75802' : 'black' }]}>
                {date.day}
              </Text>
              <Text style={styles.lunarText}>
                {getLunarDay(date)}
              </Text>
            </View>
          );
        }}
        

        testID={testIDs.calendars.FIRST}

        current={pDay}
        
        hideArrows={true}
        style={styles.calendar}
        hideExtraDays
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#4f6484',
            selectedTextColor: 'white'
          }
        }}
      />
    </Fragment>
  );
};

export default MonthComponent;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 20,
    borderRadius: 20,
    height: 370,
    width: '96%',
    marginLeft: '2%',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  containerDate: {
    width: '80%',
    borderRadius: 8,
  },
  dateText: {
    fontSize:17,
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




