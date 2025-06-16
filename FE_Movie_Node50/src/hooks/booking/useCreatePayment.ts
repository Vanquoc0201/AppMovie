import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { bookingService } from "@/services/boongkingService";
import { TCreatePayment, TPaymentResponse } from "@/types/booking/create-payment.type";

export const useCreatePayment = () => {
  return useMutation<TPaymentResponse, Error, TCreatePayment>({
    mutationFn: (data) => bookingService.createPayment(data),
    onSuccess: (data) => {
      toast.success("Tạo thanh toán thành công!");
      window.location.href = data.checkoutUrl;
    },
    onError: () => {
      toast.error("Tạo thanh toán thất bại. Vui lòng thử lại!");
    },
  });
};
