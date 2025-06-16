export type TAddMovie = {
  maPhim: string;
  tenPhim: string;
  trailerPhim: string;
  moTa: string;
  ngayKhoiChieu: string;
  danhGia: number;
  trangThai: 'DangChieu' | 'SapChieu' | 'NgungChieu';
  dienVien: string;
  quocGia: string;
  theLoai: string;
  thoiLuong: number;
  hinhAnh: string;
};