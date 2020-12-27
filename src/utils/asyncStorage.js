import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('error', e);
  }
  return null;
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    // console.log('remove succ')
  } catch (e) {
    console.log('error', e);
  }
};

export const removeAll = async () => await AsyncStorage.clear();

export const setItem = async (key, value) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(key, json);
  } catch (e) {
    console.log('error setItem', e);
  }
};
