export type TListShowTimes = {
  maLichChieu: number;
  ngayGioChieu: string;
  giaVe : number
  movie: {
    tenPhim: string;
    hinhAnh: string;
    trailerPhim: string;
    moTa: string;
    ngayKhoiChieu: string;
  };
  danhSachGhe: {
    maGhe: number;
    tenGhe: string;
    loaiGhe: string;
    maRap: number;
    trangThai: 'Trong' | 'DangDat' | 'DaDat';
  }[];
};
