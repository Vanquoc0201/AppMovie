'use client';

import { useQuery } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { TUser } from '@/types/user/user.type';

export const useSearchUsers = (taiKhoan: string, enabled: boolean = false) => {
  return useQuery<TUser[]>({
    queryKey: ['searchUser', taiKhoan],
    queryFn: () => userService.searchUser(taiKhoan),
    enabled: enabled && taiKhoan.trim() !== '', 
    staleTime: 1000 * 60, 
  });
};