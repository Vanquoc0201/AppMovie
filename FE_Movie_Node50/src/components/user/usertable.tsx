import { TUpdateUser } from "@/types/user/update-user.type";
import { convertUserToUpdateUser } from "@/helpers/convert/user";
import { TUser } from "@/types/user/user.type";

interface Props {
  users: TUser[];
  onDelete: (taiKhoan: string) => void;
  onUpdate: (user: TUpdateUser) => void;
}

const UserTable = ({ users, onDelete, onUpdate }: Props) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-black text-white">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Tài khoản</th>
          <th className="px-4 py-2">Họ tên</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Số ĐT</th>
          <th className="px-4 py-2">Loại</th>
          <th className="px-4 py-2">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {users.length ? (
          users.map((user, index) => (
            <tr key={user.taiKhoan} className="border-t hover:bg-gray-100">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 font-semibold text-red-600">{user.taiKhoan}</td>
              <td className="px-4 py-2">{user.hoTen}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.soDt}</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                  {user.loaiNguoiDung}
                </span>
              </td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => onDelete(user.taiKhoan)}
                    className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-full"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => onUpdate(convertUserToUpdateUser(user))}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full"
                  >
                    Cập nhật
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="text-center py-4 text-gray-500">
              Không tìm thấy người dùng nào.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
