"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useUsers } from "@/hooks/user/useUsers";
import { useSearchUsers } from "@/hooks/user/useSearchUsers";
import { useDeleteUser } from "@/hooks/user/useDeleteUsers";
import { useUpdateUsers } from "@/hooks/user/useUpdateUsers";
import { toast } from "react-toastify";
import { useState, useMemo } from "react";

import { TUpdateUser } from "@/types/user/update-user.type";
import { LoaiNguoiDung } from "@/types/user/add-user.type";

import UserListHeader from "@/components/user/UserListHeader";
import UserSearchForm from "@/components/user/UserSearchForm";
import UserTable from "@/components/user/usertable";
import UserUpdateForm from "@/components/user/UserUpdateForm";

const ListUser = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const taiKhoan = searchParams.get("taiKhoan")?.trim() || "";
  const [selectedUser, setSelectedUser] = useState<TUpdateUser | null>(null);
  const { data: allUsers, isLoading: loadingAll, isError: errorAll } = useUsers();
  const { data: searchedUsers, isLoading: loadingSearch, isError: errorSearch } = useSearchUsers(taiKhoan, Boolean(taiKhoan));
  const updateUserMutation = useUpdateUsers();
  const deleteUserMutation = useDeleteUser();
  const users = useMemo(() => (taiKhoan ? searchedUsers : allUsers), [taiKhoan, searchedUsers, allUsers]);
  const isLoading = taiKhoan ? loadingSearch : loadingAll;
  const isError = taiKhoan ? errorSearch : errorAll;
  const handleDelete = (taiKhoan: string) => {
    deleteUserMutation.mutate(taiKhoan, {
      onSuccess: () => toast.success("Xoá người dùng thành công!"),
      onError: () => toast.error("Xoá thất bại, vui lòng thử lại."),
    });
  };
  const handleUpdate = (user: TUpdateUser) => {
    setSelectedUser({
      taiKhoan: user.taiKhoan,
      hoTen: user.hoTen,
      email: user.email,
      soDt: user.soDt,
      loaiNguoiDung: user.loaiNguoiDung as LoaiNguoiDung,
    });
  };

  if (isLoading) return <p>Đang tải dữ liệu người dùng...</p>;
  if (isError) return <p>Đã xảy ra lỗi khi tải dữ liệu người dùng.</p>;

  return (
    <div className="p-6">
      <UserListHeader keyword={taiKhoan} />
      <UserSearchForm defaultKeyword={taiKhoan} />
      <div className="overflow-x-auto">
        <UserTable users={users || []} onDelete={handleDelete} onUpdate={handleUpdate} />
        {selectedUser && (
          <div className="mt-6">
            <UserUpdateForm
              user={selectedUser}
              onCancel={() => setSelectedUser(null)}
              onSubmit={(data) =>
                updateUserMutation.mutate(data, {
                  onSuccess: () => {
                    toast.success("Cập nhật thành công!");
                    setSelectedUser(null);
                  },
                  onError: () => {
                    toast.error("Cập nhật thất bại!");
                  },
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUser;
