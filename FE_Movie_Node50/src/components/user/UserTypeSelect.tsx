interface Props {
  value: 'KhachHang' | 'QuanTriVien';
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const UserTypeSelect = ({ value, onChange }: Props) => (
  <div>
    <label className="block font-semibold text-black">Loại người dùng</label>
    <select
      name="loaiNguoiDung"
      value={value}
      onChange={onChange}
      className="w-full border border-black px-3 py-2 rounded focus:outline-none focus:border-red-600 bg-white"
    >
      <option value="KhachHang">Khách hàng</option>
      <option value="QuanTriVien">Quản trị viên</option>
    </select>
  </div>
);
