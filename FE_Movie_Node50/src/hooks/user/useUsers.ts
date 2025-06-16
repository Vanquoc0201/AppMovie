import { userService } from "@/services/userService";
import { TUser } from "@/types/user/user.type";
import { useQuery } from "@tanstack/react-query";
export const useUsers = () => {
  return useQuery<TUser[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await userService.getAllUser();
      return response.data.data as TUser[];
    }
  });
};