import { DOMAIN, GETINFOUSERLOGIN, LOGIN, MODULEAUTH, REGISTER } from '@/constant/app.constant';
import axios from 'axios';
import axiosClient from './axiosClient';

export const authService = {
  register: (data: {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    email: string;
    soDt: string;
  }) => {
    return axios.post(`${DOMAIN}/${MODULEAUTH}/${REGISTER}`, data); 
  },
  login : (data : {
    taiKhoan: string;
    matKhau: string;
  }) => {
    return axios.post(`${DOMAIN}/${MODULEAUTH}/${LOGIN}`, data)
  },
  async getInfoUser(){
    try {
      const response = await axiosClient.get(`${DOMAIN}/${MODULEAUTH}/${GETINFOUSERLOGIN}`)
      return response.data.data
    } catch (error){
      console.log(error);
    }
  }
};