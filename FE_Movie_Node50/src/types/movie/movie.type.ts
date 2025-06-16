export type TMovie = {
  maPhim: number;
  tenPhim: string;
  trailerPhim: string;
  hinhAnh: string;
  moTa: string;
  ngayKhoiChieu: string; 
  danhGia: number;
  trangThai: "DangChieu" | "SapChieu" | "DaChieu"; 
  thoiLuong: number;
  dienVien: string;
  theLoai: string;
  isDeleted?: boolean;
  deletedAt?: string | null;
  deletedBy?: number;
  createdAt?: string;
  updatedAt?: string;
};
