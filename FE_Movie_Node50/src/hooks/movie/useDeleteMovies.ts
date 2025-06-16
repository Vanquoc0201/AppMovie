import { movieService } from "@/services/movieService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (maPhim: number) => await movieService.deleteMovie(maPhim),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: () => {
    },
  });
};