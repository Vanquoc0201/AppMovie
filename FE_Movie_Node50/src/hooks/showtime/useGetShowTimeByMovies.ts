import { cinemaService } from '@/services/cinemaService';
import { useQuery } from '@tanstack/react-query';

export const useShowtimesByMovie = (maPhim: number) => {
  return useQuery({
    queryKey: ['showtimesbymovie', maPhim],
    queryFn: () => cinemaService.getShowtimeByMovie(maPhim),
    enabled: !!maPhim, 
    select: (res) => res.data?.lichChieu || [],
  });
};
