import React from "react";

interface Ghe {
  tenGhe: string;
}

interface MovieInfo {
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
}

interface BookingResultCardProps {
  movieInfo: MovieInfo;
  ghe: Ghe[];
  tongTien: number;
  onBackHome: () => void;
}

const BookingResultCard = ({ movieInfo, ghe, tongTien, onBackHome }: BookingResultCardProps) => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold text-green-600 text-center mb-4">
        🎉 Đặt vé thành công!
      </h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg text-center text-red-600">
          {movieInfo.tenPhim}
        </h3>
        <img
          src={movieInfo.hinhAnh}
          alt={movieInfo.tenPhim}
          className="w-full h-48 object-cover rounded my-2"
        />
        <p>
          <strong>Ngày chiếu:</strong>{" "}
          {new Date(movieInfo.ngayChieu).toLocaleString("vi-VN")}
        </p>
        <p>
          <strong>Ghế đã đặt:</strong>{" "}
          {ghe.map((g) => g.tenGhe).join(", ")}
        </p>
        <p>
          <strong>Tổng tiền:</strong>{" "}
          {tongTien.toLocaleString("vi-VN")}đ
        </p>
      </div>

      <p className="text-center text-gray-600 mb-4">
        Vé đã được lưu trong tài khoản của bạn.
      </p>

      <div className="text-center">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={onBackHome}
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};

export default BookingResultCard;
