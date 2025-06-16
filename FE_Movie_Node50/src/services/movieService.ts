import { ADDMOVIE, DELETEMOVIE, DOMAIN, GETDETAILMOVIE, GETLISTBANNER, GETMOVIE, MODULEMOVIE } from "@/constant/app.constant";
import axiosClient from "./axiosClient";
export const movieService = {
    async getAllMovie(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEMOVIE}/${GETMOVIE}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async getDetailMovie(maPhim : number){
        try{
            const response = await axiosClient.get(`${DOMAIN}/${MODULEMOVIE}/${GETDETAILMOVIE}?maPhim=${maPhim}`)
            return response.data
        } catch (error){
            console.log(error);  
        }
    },
    async getListBanner(){
        try{
            const response = await axiosClient.get(`${DOMAIN}/${MODULEMOVIE}/${GETLISTBANNER}`)
            return response.data
        } catch (error){
            console.log(error);  
        }
    },
    async addMovie(formData: FormData) {
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEMOVIE}/${ADDMOVIE}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteMovie(maPhim: number) {
        try {
            const response = await axiosClient.delete(`${DOMAIN}/${MODULEMOVIE}/${DELETEMOVIE}`,{
                params: { maPhim: maPhim }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
}