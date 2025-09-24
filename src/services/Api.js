import axios from "axios";

const Api = axios.create({
  baseURL: 'https://orghadimasl.learndev.my.id/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
})

export default Api
