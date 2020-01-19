import Axios from 'axios';

export const init = (
    baseURL = 'http://192.168.0.12:1234/api/v2/',
    timeout = 60000,
  ) => {
    Axios.defaults.baseURL = baseURL;
    Axios.defaults.timeout = timeout;
  };

export const login = (user, pass) => {
    const res = Axios.get(`/auth/login?username=${user}&password=${pass}`);
    console.dir(res);
};











export default Api;