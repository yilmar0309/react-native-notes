import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  baseUrlNode: 'http://192.168.10.11:5000/api/v1',
  endpoints: {
    authenticate: 'auth_user',
    register: 'register_user',
    getAllNote: 'get_all_note',
    createNote: 'create_note'
  },
};

export const getAccessToken = async () => {
  const token = await AsyncStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
};