const ProfileInfo = ({ hoTen, taiKhoan }: { hoTen: string; taiKhoan: string }) => (
  <div className="pt-16 pb-8 px-6 text-center">
    <h2 className="text-2xl font-bold text-gray-800">{hoTen}</h2>
    <p className="text-sm text-gray-500">Tài khoản: {taiKhoan}</p>
  </div>
);

export default ProfileInfo;
