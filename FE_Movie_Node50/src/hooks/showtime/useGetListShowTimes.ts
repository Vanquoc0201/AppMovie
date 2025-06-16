import { useQuery } from '@tanstack/react-query';
import { bookingService } from '@/services/boongkingService';
import { TListShowTimes } from '@/types/booking/listshowtime.type';
export const useGetListShowTimes = (maLichChieu: number) => {
  return useQuery<TListShowTimes>({
    queryKey: ['listshowtimes', maLichChieu],
    queryFn: () => bookingService.getListShowTimes(maLichChieu).then(res => res.data),
    enabled: !!maLichChieu,
  });
};
