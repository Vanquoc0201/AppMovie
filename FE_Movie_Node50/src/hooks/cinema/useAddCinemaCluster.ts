import { cinemaService } from "@/services/cinemaService";
import { TCluster } from "@/types/cinema/cluster.type";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";

export const useAddCinemaCluster = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (data : TCluster) => cinemaService.addCinemaCluster(data),
        onSuccess: () => {
        toast.success("Thêm cụm rạp trong hệ thống thành công!");
        queryClient.invalidateQueries({ queryKey: ["cinemacluster"] });
        },
        onError: () => {
        toast.error("Thêm cụm rạp trong hệ thống thất bại. Vui lòng thử lại.");
        },
    })
}