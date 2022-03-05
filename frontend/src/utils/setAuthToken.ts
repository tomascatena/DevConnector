import axios from 'axios';

export const setAuthToken = (token: string | null) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
