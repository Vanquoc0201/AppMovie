import { useQuery } from "@tanstack/react-query";
import { movieService } from "@/services/movieService";

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await movieService.getAllMovie();
      return response.data.data; 
    },
  });
};