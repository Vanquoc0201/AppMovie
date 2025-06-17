import React from "react";

interface Props {
  status: "pending" | "error" | "default";
}

const BookingStatusMessage = ({ status }: Props) => {
  if (status === "pending") {
    return <p className="text-center mt-10">Đang đặt vé...</p>;
  }

  if (status === "error") {
    return (
      <p className="text-center text-red-500 mt-10">
        Thanh toán thành công nhưng đặt vé thất bại. Vui lòng liên hệ hỗ trợ.
      </p>
    );
  }

  return <p className="text-center mt-10">Đang xác nhận thanh toán...</p>;
};

export default BookingStatusMessage;
