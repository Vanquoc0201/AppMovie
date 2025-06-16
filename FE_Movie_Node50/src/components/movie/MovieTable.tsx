import React from "react";
import { TMovie } from "@/types/movie/movie.type";
import { useDeleteMovie } from "@/hooks/movie/useDeleteMovies";
import { toast } from "react-toastify";
type Props = {
  movies: TMovie[];
  onDelete?: (movieId: number) => void; 
};

const MovieTable = ({ movies, onDelete }: Props) => {
  const { mutate: deleteMovie } = useDeleteMovie();
  const handleDelete = (id: number) => {
  deleteMovie(id, {
    onSuccess: () => {
      toast.success("Đã xóa thành công!");
    },
    onError: () => {
      toast.error("Xóa thất bại!");
    }
  });
};
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Hình ảnh</th>
            <th className="px-4 py-2">Tên phim</th>
            <th className="px-4 py-2">Thể loại</th>
            <th className="px-4 py-2">Ngày chiếu</th>
            <th className="px-4 py-2">Thời lượng</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2">Đánh giá</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <tr key={movie.maPhim} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">
                  <img
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                    className="w-16 h-20 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 font-semibold text-red-600">
                  {movie.tenPhim}
                </td>
                <td className="px-4 py-2">{movie.theLoai}</td>
                <td className="px-4 py-2">
                  {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">
                  {movie.thoiLuong} phút
                </td>
                <td className="px-4 py-2 text-center">
                  {
                    {
                      DangChieu: "Đang chiếu",
                      SapChieu: "Sắp chiếu",
                      DaChieu: "Đã chiếu",
                    }[movie.trangThai]
                  }
                </td>
                <td className="px-4 py-2 text-center">{movie.danhGia}/10</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(movie.maPhim)}
                    className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4 text-gray-500">
                Không có phim nào để hiển thị.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
