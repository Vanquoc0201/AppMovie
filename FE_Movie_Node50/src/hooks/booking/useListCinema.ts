import { bookingService } from "@/services/boongkingService";
import { useQuery } from "@tanstack/react-query";
export const useListCinema = () => {
  return useQuery({
    queryKey: ['listcinema'],
    queryFn: async () => {
      const response = await bookingService.getListCinema();
      return response.data; 
    },
  });
};