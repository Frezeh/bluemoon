import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA_PREFIX = 'bluemoon::';

export async function storeData<T>(key: string, value: T) {
  try {
    await AsyncStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveData<T>(key: string) {
  try {
    const value = await AsyncStorage.getItem(`${DATA_PREFIX}${key}`);

    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.log(error);
  }
}

export const randomId = () => {
  //   return String(
  //     Date.now().toString(32) + Math.random().toString(16).replace(/\./g, ''),
  //   );
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);
  return timestamp + randomString;
};
