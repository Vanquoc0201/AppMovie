import { useShowtimesByMovie } from "@/hooks/showtime/useGetShowTimeByMovies";
import { useRouter } from "next/navigation";

export default function ShowtimesByMovie({ maPhim }: { maPhim: number }) {
  const { data, isLoading, isError } = useShowtimesByMovie(maPhim);
  const router = useRouter();
  if (isLoading) return <p className="text-center py-10">Đang tải lịch chiếu...</p>;
  if (isError) return <p className="text-center text-red-500">Không thể tải lịch chiếu.</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-red-600 uppercase">
        Lịch chiếu phim
      </h2>

      {data && data.length > 0 ? (
        data.map((showtime: any) => (
          <div
            key={showtime.maLichChieu}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex-1 space-y-2">
              <p className="text-lg">
                🎬 <strong>Hệ thống rạp:</strong> {showtime.heThongRap}
              </p>
              <p>
                🏢 <strong>Cụm rạp:</strong> {showtime.cumRap}
              </p>
              <p>
                🎟️ <strong>Rạp:</strong> {showtime.rap}
              </p>
              <p>
                🕒 <strong>Ngày giờ chiếu:</strong>{" "}
                {new Date(showtime.ngayGioChieu).toLocaleString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>

            <button
              onClick={() => router.push(`/checkout/${showtime.maLichChieu}`)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Mua vé
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 italic">
          Không có lịch chiếu cho phim này.
        </p>
      )}
    </div>
  );
}
