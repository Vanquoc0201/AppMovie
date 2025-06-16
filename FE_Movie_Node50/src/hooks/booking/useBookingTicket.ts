import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TBookingTicket } from "@/types/booking/bookingticket.type";
import { bookingService } from "@/services/boongkingService";


export const useBookingTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data : TBookingTicket) => bookingService.bookingTicket(data),
    onSuccess: () => {
      toast.success("Đặt vé thành công!");
      queryClient.invalidateQueries({ queryKey: ["bookingticket"] });
    },
    onError: () => {
      toast.error("Đặt vé thất bại");
    },
  });
};