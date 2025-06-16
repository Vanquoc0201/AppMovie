import { cinemaService } from "@/services/cinemaService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";

export const useAddCinemaSystem = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (formData : FormData) => cinemaService.addCinemaSystem(formData),
        onSuccess: () => {
        toast.success("Thêm hệ thống rạp thành công!");
        queryClient.invalidateQueries({ queryKey: ["cinemasystem"] });
        },
        onError: () => {
        toast.error("Thêm hệ thống rạp thất bại. Vui lòng thử lại.");
        },
    })
}