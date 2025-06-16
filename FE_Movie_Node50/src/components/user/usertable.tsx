import React, { useState } from "react";
import ModalWrapper from "./modalwrapper";
import UserUpdateForm from "./updateform";
import { TUpdateUser } from "@/types/user/update-user.type";
import { useUpdateUsers } from "@/hooks/user/useUpdateUsers";

const UserTable = ({ users }: { users: TUpdateUser[] }) => {
  const [selectedUser, setSelectedUser] = useState<TUpdateUser | null>(null);

  const { mutateAsync, isPending, error } = useUpdateUsers();

  const openModal = (user: TUpdateUser) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handleSubmit = async (data: TUpdateUser) => {
  try {
    const payload = {
      taiKhoan: data.taiKhoan,
      hoTen: data.hoTen,
      email: data.email,
      soDt: data.soDt,
      loaiNguoiDung: data.loaiNguoiDung,
    };
    await mutateAsync(payload);
    console.log("Đã cập nhật thành công:", payload);
    closeModal();
  } catch (err) {
    console.error("Lỗi khi cập nhật:", err);
  }
};


  return (
    <div>
      {users.map((user) => (
        <div key={user.taiKhoan} className="mb-2">
          <span>{user.taiKhoan}</span>
          <button
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => openModal(user)}
          >
            Cập nhật
          </button>
        </div>
      ))}

      {selectedUser && (
        <ModalWrapper onClose={closeModal}>
          <UserUpdateForm
            user={{
              taiKhoan: selectedUser.taiKhoan,
              hoTen: selectedUser.hoTen,
              email: selectedUser.email,
              soDt: selectedUser.soDt,
              loaiNguoiDung: selectedUser.loaiNguoiDung,
            }}
            onCancel={closeModal}
            onSubmit={handleSubmit}
            isPending={isPending}
          />
          {error && <div className="text-red-500 mt-2">Lỗi: {(error as Error).message}</div>}
        </ModalWrapper>
      )}
    </div>
  );
};

export default UserTable;
