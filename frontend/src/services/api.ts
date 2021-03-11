import axios from 'axios';

// const baseURL  = 'https://eureka-labs.herokuapp.com'
const baseURL  = 'http://localhost:3333'


export const api = axios.create({
  baseURL
});
