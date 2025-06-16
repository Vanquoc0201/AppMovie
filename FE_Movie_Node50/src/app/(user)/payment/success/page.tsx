'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useBookingTicket } from '@/hooks/booking/useBookingTicket';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { mutate: bookingTicket, isSuccess, isError, isPending } = useBookingTicket();
  const [bookingInfo, setBookingInfo] = useState<any>(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const status = searchParams.get('status');

    if (code !== '00' || status !== 'PAID') return;

    const storedData = localStorage.getItem('BOOKING_SUCCESS');
    if (!storedData) return;

    try {
      const parsed = JSON.parse(storedData);
      setBookingInfo(parsed);

      const payload = {
        maLichChieu: parsed.maLichChieu,
        danhSachGhe: parsed.ghe.map((g: any) => g.maGhe),
      };

      bookingTicket(payload);
    } catch (err) {
      console.error('Lỗi parse localStorage BOOKING_SUCCESS:', err);
    }
  }, []);

  const handleGoHome = () => {
    localStorage.removeItem('BOOKING_SUCCESS');
    router.push('/');
  };

  if (isPending) return <p className="text-center mt-10">Đang đặt vé...</p>;
  if (isError) return <p className="text-center text-red-500 mt-10">Thanh toán thành công nhưng đặt vé thất bại. Vui lòng liên hệ hỗ trợ.</p>;

  if (isSuccess && bookingInfo) {
    return (
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
        <h2 className="text-xl font-bold text-green-600 text-center mb-4">
          🎉 Đặt vé thành công!
        </h2>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-center text-red-600">
            {bookingInfo.movieInfo.tenPhim}
          </h3>
          <img
            src={bookingInfo.movieInfo.hinhAnh}
            alt={bookingInfo.movieInfo.tenPhim}
            className="w-full h-48 object-cover rounded my-2"
          />
          <p><strong>Ngày chiếu:</strong> {new Date(bookingInfo.movieInfo.ngayChieu).toLocaleString('vi-VN')}</p>
          <p><strong>Ghế đã đặt:</strong> {bookingInfo.ghe.map((g: any) => g.tenGhe).join(', ')}</p>
          <p><strong>Tổng tiền:</strong> {bookingInfo.tongTien.toLocaleString('vi-VN')}đ</p>
        </div>

        <p className="text-center text-gray-600 mb-4">Vé đã được lưu trong tài khoản của bạn.</p>

        <div className="text-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={handleGoHome}
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return <p className="text-center mt-10">Đang xác nhận thanh toán...</p>;
}
