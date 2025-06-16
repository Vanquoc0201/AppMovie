export type LoaiNguoiDung = 'KhachHang' | 'QuanTriVien';

export type TAddUser = {
  taiKhoan: string;
  matKhau?: string;
  hoTen: string;
  email: string;
  soDt: string;
  loaiNguoiDung: LoaiNguoiDung;
};