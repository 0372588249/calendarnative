import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import 'moment-lunar';
import { CalendarList } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { color } from 'react-native-reanimated';

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
class ListMonthScreen extends React.Component {
  render() {

    let count = 1;
    return (
      <CalendarList
        renderHeader={(date) => {
          let time = moment(date);
          return(
            <View style ={styles.header}>
              <Text style={styles.textHeader}>
                Tháng {time.month() + 1} - {time.year()}
              </Text>
            </View>
          );
        }}
        
        dayComponent={({ date, state }) => {

          const getLunarDay = () => {
            let d = date.day;
            let m = date.month;
            let y = date.year;
            let value = moment().year(y).month(m).date(d).lunar().subtract(1, 'days').format('DD');
            if (value == 1) {
              value = moment().year(y).month(m).date(d).lunar().subtract(1, 'days').format('MM') + '/' + value;
            }
            return value;
          }
        
          const isSunday = (dt) => {
            let dayOfWeek = new Date(dt.year,dt.month,dt.day).getDay();
            //console.log(dayOfWeek);
            if (dayOfWeek == 0) {
              console.log(dayOfWeek,new Date(dt.year,dt.month,dt.day));
              return true;
            }
            return false;
          }

          const isToday = () => {
            let today = moment();
            if (date.day == today.date()
              && date.month == today.month() + 1
              && date.year == today.year()) {
              return true;
            }
            return false;
          }
          return (
            <TouchableOpacity style={[styles.containerDate, { backgroundColor: isToday() == true ? '#4f6386' : '' }]}
              onPress={()=>{
                /**
                 * do some thing
                 */
                if(this.props.navigation != null){
                  this.props.navigation.navigate('DetailDate',{
                    time : date
                  })
                }
              }}
            >
<Text style={[styles.dateText, { color: state === 'disabled' ? 'gray' : 'black' }, { color: isSunday(date) ? '#e75802' : 'black' }]}>
                {date.day}
              </Text>
              <Text style={styles.lunarText}>
                {getLunarDay(date)}
              </Text>
            </TouchableOpacity>
          );
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
        firstDay={1}
        style={styles.listCalendar}

        calendarHeight={400}
        calendarWidth={'95%'}
        theme={{
          marginTop:150,
          marginHorizontal:150,
          backgroundColor: 'red',
          calendarBackground: '#ffffff',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'gray',
          dayTextColor: 'red',
          todayTextColor: 'white',
          selectedDayTextColor: 'white',
          monthTextColor: 'white',
          indicatorColor: 'white',
          marginTop:150,
          
          // textDisabledColor: 'red',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 15,
              marginHorizontal: 12,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor:'#7c867c',
              borderRadius:20,
              width:'100%',
              marginLeft:'0%',
            },
            headerContainer: {
              flexDirection: 'row',
              backgroundColor:'red',
            },
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  header:{
  },
  textHeader:{
    fontSize:18,
    color:'white',
  },
  listCalendar: {
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


export default ListMonthScreen;