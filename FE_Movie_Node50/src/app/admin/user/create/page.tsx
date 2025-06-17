'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TAddUser } from '@/types/user/add-user.type';
import { useAddUser } from '@/hooks/user/useAddUsers';
import { UserFormFields } from '@/components/user/UserFormFields';
import { UserTypeSelect } from '@/components/user/UserTypeSelect';
import { SubmitButton } from '@/components/user/SubmitButton';
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        <UserFormFields user={user} onChange={handleChange} />
        <UserTypeSelect value={user.loaiNguoiDung} onChange={handleChange} />
        <SubmitButton isPending={addUserMutation.isPending} />
      </form>
    </div>
  );
}
