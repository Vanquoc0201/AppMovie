import { LoaiNguoiDung } from "@/types/user/add-user.type";
import { TUpdateUser } from "@/types/user/update-user.type";
import { TUser } from "@/types/user/user.type";

export const convertUserToUpdateUser = (user: TUser): TUpdateUser => ({
  taiKhoan: user.taiKhoan,
  hoTen: user.hoTen,
  email: user.email,
  soDt: user.soDt,
  loaiNguoiDung: user.loaiNguoiDung as LoaiNguoiDung,
});
