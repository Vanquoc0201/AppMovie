'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { toast } from 'react-toastify';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taiKhoan: string) => userService.deleteUser(taiKhoan),
    onSuccess: () => {
      toast.success('Xóa người dùng thành công!');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error?.message || 'Đã có lỗi xảy ra'}`);
    },
  });
};