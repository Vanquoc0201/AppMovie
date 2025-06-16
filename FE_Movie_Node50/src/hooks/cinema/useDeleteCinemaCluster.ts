import { cinemaService } from '@/services/cinemaService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useDeleteCinemaCluster = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (maCumRap: number) => cinemaService.deleteCinemaCluster(maCumRap),
    onSuccess: () => {
      toast.success('Xóa cụm rạp trong hệ thống dùng thành công!');
      queryClient.invalidateQueries({ queryKey: ['cinemacluster'] });
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error?.message || 'Đã có lỗi xảy ra'}`);
    },
  });
};