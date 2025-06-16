
import { TDetailMovie } from '@/types/article/detailMovie.type';
import React from 'react';

type Props = {
  movie: TDetailMovie;
};

export default function DetailMovie({ movie }: Props) {
  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
      {/* Poster */}
      <div className="w-full md:w-1/3">
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          className="rounded-xl w-full h-auto object-cover shadow-md"
        />
        <button
          onClick={() => window.open(movie.trailerPhim, '_blank')}
          className="mt-4 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        >
          Xem Trailer
        </button>
      </div>

      {/* Info */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {movie.tenPhim}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {movie.moTa}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-800 dark:text-gray-300">
          <div>
            <strong>Ngày khởi chiếu:</strong>{' '}
            {new Date(movie.ngayKhoiChieu).toLocaleDateString('vi-VN')}
          </div>
          <div>
            <strong>Thời lượng:</strong> {movie.thoiLuong} phút
          </div>
          <div>
            <strong>Thể loại:</strong> {movie.theLoai}
          </div>
          <div>
            <strong>Quốc gia:</strong> {(movie.quocGia)}
          </div>
          <div className="col-span-2">
            <strong>Diễn viên:</strong> {movie.dienVien}
          </div>
          <div className="col-span-2">
            <strong>Đánh giá:</strong>{' '}
            <span className="text-yellow-500 font-semibold">{movie.danhGia} / 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

