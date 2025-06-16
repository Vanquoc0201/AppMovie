'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { toast } from 'react-toastify';
import { TAddUser } from '@/types/user/add-user.type';

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TAddUser) => userService.addUser(data),
    onSuccess: () => {
      toast.success('Thêm người dùng thành công!');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      toast.error(`Thêm thất bại: ${error?.message || 'Đã có lỗi xảy ra'}`);
    },
  });
};