"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useBookingTicket } from "@/hooks/booking/useBookingTicket";
import BookingStatusMessage from "@/components/booking/BookingStatusMessage";
import BookingResultCard from "@/components/booking/BookingResultCard";
interface BookingInfo {
  maLichChieu: number;
  ghe: { maGhe: number; tenGhe: string }[];
  tongTien: number;
  movieInfo: {
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
  };
}
const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { mutate: bookingTicket, isSuccess, isError, isPending } = useBookingTicket();
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);

  useEffect(() => {
    const code = searchParams.get("code");
    const status = searchParams.get("status");

    if (code !== "00" || status !== "PAID") return;

    const storedData = localStorage.getItem("BOOKING_SUCCESS");
    if (!storedData) return;

    try {
      const parsed: BookingInfo = JSON.parse(storedData);
      setBookingInfo(parsed);

      bookingTicket({
        maLichChieu: parsed.maLichChieu,
        danhSachGhe: parsed.ghe.map((g) => g.maGhe),
      });
    } catch (err) {
      console.error("Lỗi parse localStorage BOOKING_SUCCESS:", err);
    }
  }, []);

  const handleGoHome = () => {
    localStorage.removeItem("BOOKING_SUCCESS");
    router.push("/");
  };

  if (isPending) return <BookingStatusMessage status="pending" />;
  if (isError) return <BookingStatusMessage status="error" />;
  if (isSuccess && bookingInfo) {
    return (
      <BookingResultCard
        movieInfo={bookingInfo.movieInfo}
        ghe={bookingInfo.ghe}
        tongTien={bookingInfo.tongTien}
        onBackHome={handleGoHome}
      />
    );
  }

  return <BookingStatusMessage status="default" />;
};

export default PaymentSuccessPage;
