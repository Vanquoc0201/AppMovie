import { cinemaService } from "@/services/cinemaService"
import { useQuery } from "@tanstack/react-query"

export const useGetCinemaSystem = () => {
    return useQuery({
        queryKey : ["cinemasystem"],
        queryFn : async () => {
            const response = await cinemaService.getCinemaSystem();
            return response.data.data
        }
    })
}