'use client';
import { useState } from 'react';
import { TAddUser } from '@/types/user/add-user.type';
import { useAddUser } from '@/hooks/user/useAddUsers';
import { InputField } from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
const defaultUser: TAddUser = {
  taiKhoan: '',
  matKhau: '',
  hoTen: '',
  email: '',
  soDt: '',
  loaiNguoiDung: 'KhachHang',
};

export default function CreateUser() {
  const [user, setUser] = useState<TAddUser>(defaultUser);
  const router = useRouter();
  const addUserMutation = useAddUser();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  addUserMutation.mutate(user, {
    onSuccess: () => {
      router.push('/admin/user');
    },
  });
};


  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 border border-red-500">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Thêm người dùng</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Tài khoản" name="taiKhoan" value={user.taiKhoan} onChange={handleChange} />
        <InputField label="Mật khẩu" name="matKhau" value={user.matKhau} onChange={handleChange} type="password" />
        <InputField label="Họ tên" name="hoTen" value={user.hoTen} onChange={handleChange} />
        <InputField label="Email" name="email" value={user.email} onChange={handleChange} type="email" />
        <InputField label="Số điện thoại" name="soDt" value={user.soDt} onChange={handleChange} />

        <div>
          <label className="block font-semibold text-black">Loại người dùng</label>
          <select
            name="loaiNguoiDung"
            value={user.loaiNguoiDung}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 rounded focus:outline-none focus:border-red-600 bg-white"
          >
            <option value="KhachHang">Khách hàng</option>
            <option value="QuanTriVien">Quản trị viên</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={addUserMutation.isPending}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-black transition-all disabled:opacity-60"
        >
          {addUserMutation.isPending ? 'Đang thêm...' : 'Thêm người dùng'}
        </button>
      </form>
    </div>
  );
}



