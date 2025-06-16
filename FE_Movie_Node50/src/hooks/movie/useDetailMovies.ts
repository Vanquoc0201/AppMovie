import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import { TDetailMovie } from '@/types/article/detailMovie.type';

export const useDetailMovies = (maPhim?: number) => {
  return useQuery<TDetailMovie>({
    queryKey: ['movie-detail', maPhim],
    queryFn: async () => {
      if (!maPhim) throw new Error('Thiếu mã phim');
      const res = await movieService.getDetailMovie(maPhim);
      return res.data.data;
    },
    enabled: !!maPhim,
  });
};