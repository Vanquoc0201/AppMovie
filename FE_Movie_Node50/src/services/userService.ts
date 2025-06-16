import { ADDUSER, DELETEUSER, DOMAIN, GETALLUSER, MODULEUSER, SEARCHUSER, UPDATEUSER } from "@/constant/app.constant";
import axiosClient from "./axiosClient"
import { TAddUser } from "@/types/user/add-user.type";
import { TUpdateUser } from "@/types/user/update-user.type";

export const userService = {
    async getAllUser(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEUSER}/${GETALLUSER}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async addUser(data : TAddUser){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEUSER}/${ADDUSER}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async deleteUser(taiKhoan: string) {
        try {
            const response = await axiosClient.delete(`${DOMAIN}/${MODULEUSER}/${DELETEUSER}`, {
                params: {
                    taiKhoan: taiKhoan
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async searchUser(taiKhoan: string) {
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEUSER}/${SEARCHUSER}`, {
                params: {
                    taiKhoan : taiKhoan
                }
            });
            return response.data.data.data;
        } catch (error) {
            console.log(error);
        }
    },
    async updateUser(data: TUpdateUser){
        try {
            const response = await axiosClient.put(`${DOMAIN}/${MODULEUSER}/${UPDATEUSER}`,data);
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }



}