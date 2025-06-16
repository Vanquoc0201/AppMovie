import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/authService";
import { TUser } from "@/types/user/user.type";

export const useUserInfo = () => {
  const isClient = typeof window !== "undefined";
  const token = isClient ? localStorage.getItem("accessToken") : null;
  return useQuery<TUser >({
    queryKey: ["user-info"],
    queryFn: () => authService.getInfoUser(),
    enabled: !!token,
  });
};
