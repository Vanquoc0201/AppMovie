"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useMovies } from "@/hooks/movie/useMovies";
import { useListCinema } from "@/hooks/booking/useListCinema";
import { useCreateShowtimes } from "@/hooks/booking/useCreateShowtimes";
import MovieSelector from "@/components/booking/MovieSelector";
import CinemaSelector from "@/components/booking/CinemaSelector";
import { DateTimeInput, PriceInput } from "@/components/booking/DateTimePriceInput";

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

      <MovieSelector
        movies={movies || []}
        selectedMovieId={maPhim}
        onSelect={setMaPhim}
        isLoading={pendingMovies}
      />

      <CinemaSelector
        cinemas={cinemas || []}
        selectedCinema={maRap}
        onChange={setMaRap}
        isLoading={pendingCinemas}
      />

      <DateTimeInput value={ngayGioChieu} onChange={setNgayGioChieu} />

      <PriceInput value={giaVe} onChange={setGiaVe} />

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
