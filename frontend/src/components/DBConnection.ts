import axios from 'axios';

const DBConnection = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default DBConnection;