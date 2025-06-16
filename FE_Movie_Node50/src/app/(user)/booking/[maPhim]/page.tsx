'use client';
import ShowtimesByMovie from "@/components/showtime/ShowTimeByMovies";
import { useParams } from "next/navigation";
export default function BookingByMoviePage() {
  const params = useParams();
  const maPhim = Number(params.maPhim);

  return (
    <div className="max-w-5xl mx-auto p-4 mt-16">
      <ShowtimesByMovie maPhim={maPhim} />
    </div>
  );
}
