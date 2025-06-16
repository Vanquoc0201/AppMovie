import { ADDCINEMACLUSTER, ADDCINEMASYSTEM, DELETECINEMACLUSTER, DOMAIN, GETCINEMACLUSTER, GETCINEMASYSTEM, GETSHOWTIMEBYCINEMACLUSTER, GETSHOWTIMEBYMOVIE, MODULECINEMA } from "@/constant/app.constant";
import axiosClient from "./axiosClient";
import { TCluster } from "@/types/cinema/cluster.type";
export const cinemaService = {
    async getCinemaSystem(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETCINEMASYSTEM}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async addCinemaSystem(formData: FormData){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULECINEMA}/${ADDCINEMASYSTEM}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getCinemaCluster(maHeThongRap : number){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETCINEMACLUSTER}`, 
                {
                    params : {maHeThongRap}
                }
            )
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async addCinemaCluster(data : TCluster){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULECINEMA}/${ADDCINEMACLUSTER}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async deleteCinemaCluster(maCumRap : number){
        try {
            const response = await axiosClient.delete(`${DOMAIN}/${MODULECINEMA}/${DELETECINEMACLUSTER}`, {
                params: {
                    maCumRap
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getShowtimeByMovie(maPhim : number){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETSHOWTIMEBYMOVIE}`, {
                params: {
                    maPhim
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    async getShowtimeCinemaCluster(maHeThongRap : number){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULECINEMA}/${GETSHOWTIMEBYCINEMACLUSTER}`, {
                params: {
                    maHeThongRap
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}