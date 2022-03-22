import axios from 'axios';

const api = axios.create({
    baseURL: 'http://servidorprincipal.no-ip.info:5442/api/',
})

export default api;