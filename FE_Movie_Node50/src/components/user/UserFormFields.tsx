import { InputField } from '@/components/ui/Input';

interface Props {
  user: {
    taiKhoan: string;
    matKhau: string;
    hoTen: string;
    email: string;
    soDt: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserFormFields = ({ user, onChange }: Props) => (
  <>
    <InputField label="Tài khoản" name="taiKhoan" value={user.taiKhoan} onChange={onChange} />
    <InputField label="Mật khẩu" name="matKhau" type="password" value={user.matKhau} onChange={onChange} />
    <InputField label="Họ tên" name="hoTen" value={user.hoTen} onChange={onChange} />
    <InputField label="Email" name="email" type="email" value={user.email} onChange={onChange} />
    <InputField label="Số điện thoại" name="soDt" value={user.soDt} onChange={onChange} />
  </>
);
