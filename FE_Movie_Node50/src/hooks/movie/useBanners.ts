import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import { TBanner } from '@/types/article/banner.type';

export const useBanners = () => {
  return useQuery<TBanner[]>({
    queryKey: ['banners'],
    queryFn: async () => {
      const res = await movieService.getListBanner();
      return res.data.data;
    },
  });
};