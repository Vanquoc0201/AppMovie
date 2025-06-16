'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { TUpdateUser } from '@/types/user/update-user.type';

export const useUpdateUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TUpdateUser) => userService.updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Cập nhật thất bại:', error);
    },
  });
};
