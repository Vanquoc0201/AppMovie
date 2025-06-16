import { bookingService } from "@/services/boongkingService";
import { TCreateShowtimes } from "@/types/booking/createbooking.type";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";

export const useCreateShowtimes = ()  => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (data : TCreateShowtimes) => bookingService.createShowTimes(data),
        onSuccess: () => {
              toast.success('Tạo lịch chiếu thành công!');
              queryClient.invalidateQueries({ queryKey: ['createbooking'] });
            },
            onError: (error: any) => {
              toast.error(`Tạo lịch chiếu thất bại: ${error?.message || 'Đã có lỗi xảy ra'}`);
        },
    })
}