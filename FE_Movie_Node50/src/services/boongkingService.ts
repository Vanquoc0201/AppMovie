import { BOOKINGTICKET, CREATEPAYMENT, CREATESHOWTIME, DOMAIN, GETLISTCINEMA, GETSCHEDULEBOOKING, MODULEBOOKING } from "@/constant/app.constant"
import axiosClient from "./axiosClient"
import { TCreateShowtimes } from "@/types/booking/createbooking.type"
import { TBookingTicket } from "@/types/booking/bookingticket.type"
import { TCreatePayment } from "@/types/booking/create-payment.type"
export const bookingService = {
    async getListCinema(){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEBOOKING}/${GETLISTCINEMA}`)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async createShowTimes(data : TCreateShowtimes){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEBOOKING}/${CREATESHOWTIME}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async getListShowTimes(maLichChieu : number){
        try {
            const response = await axiosClient.get(`${DOMAIN}/${MODULEBOOKING}/${GETSCHEDULEBOOKING}`,{
                params : {maLichChieu}
            })
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async bookingTicket(data : TBookingTicket){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEBOOKING}/${BOOKINGTICKET}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    },
    async createPayment(data : TCreatePayment){
        try {
            const response = await axiosClient.post(`${DOMAIN}/${MODULEBOOKING}/${CREATEPAYMENT}`,data)
            return response.data
        } catch (error){
            console.log(error);
        }
    }
}