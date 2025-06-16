"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { useMovies } from "@/hooks/movie/useMovies";
import { useListCinema } from "@/hooks/booking/useListCinema";
import { useCreateShowtimes } from "@/hooks/booking/useCreateShowtimes";

export default function CreateShowtimeForm() {
  const { data: cinemas, isPending: pendingCinemas } = useListCinema();
  const { data: movies, isPending: pendingMovies } = useMovies();
  const { mutate: createShowtime, isPending } = useCreateShowtimes();

  const [maPhim, setMaPhim] = useState<number | "">("");
  const [maRap, setMaRap] = useState<number | "">("");
  const [ngayGioChieu, setNgayGioChieu] = useState<string>("");
  const [giaVe, setGiaVe] = useState<number>(70000);

  const handleSubmit = () => {
    if (!maPhim || !maRap || !ngayGioChieu || !giaVe) {
      toast.warning("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    createShowtime({
      maPhim: Number(maPhim),
      maRap: Number(maRap),
      ngayGioChieu,
      giaVe: Number(giaVe),
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Tạo lịch chiếu mới</h2>

      {/* Chọn phim */}
      {/* Chọn phim với ảnh minh họa */}
    <div className="mb-6">
    <label className="block font-medium mb-2 text-gray-700">Chọn phim</label>
    {pendingMovies ? (
        <p className="text-gray-500">Đang tải phim...</p>
    ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies?.map((movie: any) => (
            <div
            key={movie.maPhim}
            onClick={() => setMaPhim(movie.maPhim)}
            className={`cursor-pointer rounded border p-2 shadow-sm hover:shadow-md transition ${
                maPhim === movie.maPhim
                ? "border-red-500 ring-2 ring-red-300"
                : "border-gray-300"
            }`}
            >
            <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className="w-full h-40 object-cover rounded"
            />
            <p className="text-sm mt-2 font-medium text-center">{movie.tenPhim}</p>
            </div>
        ))}
        </div>
    )}
    </div>


      {/* Chọn rạp */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Chọn rạp</label>
        <select
          value={maRap}
          onChange={(e) => setMaRap(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Chọn rạp --</option>
          {pendingCinemas ? (
            <option disabled>Đang tải rạp...</option>
          ) : (
            cinemas?.map((cumRap: any) => (
              <optgroup
                key={cumRap.maCumRap}
                label={`${cumRap.tenCumRap} - ${cumRap.diaChi}`}
              >
                {cumRap.Cinema?.map((rap: any) => (
                  <option key={rap.maRap} value={rap.maRap}>
                    {rap.tenRap}
                  </option>
                ))}
              </optgroup>
            ))
          )}
        </select>
      </div>

      {/* Ngày giờ chiếu */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Ngày giờ chiếu</label>
        <input
          type="datetime-local"
          value={ngayGioChieu ? dayjs(ngayGioChieu).format("YYYY-MM-DDTHH:mm") : ""}
          onChange={(e) =>
            setNgayGioChieu(new Date(e.target.value).toISOString())
          }
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Giá vé */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Giá vé</label>
        <input
          type="number"
          value={giaVe}
          onChange={(e) => setGiaVe(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className={`w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition ${
          isPending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isPending ? "Đang tạo..." : "Tạo lịch chiếu"}
      </button>
    </div>
  );
}
