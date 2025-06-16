import { useMutation, useQueryClient } from "@tanstack/react-query";
import { movieService } from "@/services/movieService";
import { toast } from "react-toastify";

export const useAddMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => movieService.addMovie(formData),
    onSuccess: () => {
      toast.success("Thêm phim thành công!");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: () => {
      toast.error("Thêm phim thất bại. Vui lòng thử lại.");
    },
  });
};