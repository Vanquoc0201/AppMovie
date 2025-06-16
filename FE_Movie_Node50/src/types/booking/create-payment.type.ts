export type TBuyerInfo = {
  taiKhoan: string;
  hoTen: string;
  soDt: string;
};

export type TPaymentItem = {
  name: string;
  quantity: number;
  price: number;
};

export type TCreatePayment = {
  amount: number;
  description: string;
  returnUrl: string;
  cancelUrl?: string;
  buyerInfo: TBuyerInfo;
  items: TPaymentItem[];
};
export type TPaymentResponse = {
  status: string;
  code: number;
  data: {
    code: string;
    desc: string;
    data: {
      checkoutUrl: string;
      orderCode: number;
      qrCode: string;
      expiredAt?: string;
    };
    signature: string;
  };
};
export type TBookingSuccess = {
  maLichChieu: number;
  danhSachGhe: number[];
  tongTien: number;
  buyerInfo: TBuyerInfo;
  paymentUrl: string;
};
