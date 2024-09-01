import axios from "axios";
import {Platform} from "react-native";

const axiosInstance = axios.create({
  baseURL: 'http://teamblind.co.kr/',
  withCredentials: true,
})

export default axiosInstance;
