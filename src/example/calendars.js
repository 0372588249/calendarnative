import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';

const testIDs = require('../testIDs');

const CalendarsScreen = () => {
  const [selected, setSelected] = useState('');

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Calendar
          testID={testIDs.calendars.FIRST}
          current={'2019-04-04'}
          style={styles.calendar}
          hideExtraDays
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red'
            }
          }}
        />
      </Fragment>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} testID={testIDs.calendars.CONTAINER}>
      {renderCalendarWithSelectableDate()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});
