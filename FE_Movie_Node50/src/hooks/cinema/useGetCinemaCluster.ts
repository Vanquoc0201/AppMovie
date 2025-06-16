import { cinemaService } from "@/services/cinemaService";
import { TCluster } from "@/types/cinema/cluster.type";
import { useQuery } from "@tanstack/react-query"

export const useGetCinemaCluster = (maHeThongRap : number) => {
    return useQuery<TCluster[]>({
        queryKey: ["cinemacluster", maHeThongRap],
        queryFn: async () => {
            if(!maHeThongRap){
                throw new Error("Không có mã hệ thống rạp");
            }
            const response = await cinemaService.getCinemaCluster(maHeThongRap);
            return response.data.data
        }
    })
}