

import AsyncStorage from '@react-native-community/async-storage';

export const setDataToLocalStorage = async (key, data) => {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonData);
};

export const getDataFromLocalStorage = async (key) => {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    }
    return null;
};

export const removeDataFromLocalStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (exception) {
        return false;
    }
};
