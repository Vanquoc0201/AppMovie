"use client";

import React, { useState } from "react";
import { TUpdateUser } from "@/types/user/update-user.type";

type Props = {
  user: TUpdateUser;
  onCancel: () => void;
  onSubmit: (data: TUpdateUser) => void;
  isPending?: boolean;
};

const UserUpdateForm = ({ user, onCancel, onSubmit }: Props) => {
  const [formData, setFormData] = useState<TUpdateUser>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-red-600">Cập nhật người dùng</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Tài khoản</label>
          <input
            name="taiKhoan"
            value={formData.taiKhoan}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Họ tên</label>
          <input
            name="hoTen"
            value={formData.hoTen}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Số ĐT</label>
          <input
            name="soDt"
            value={formData.soDt}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Loại người dùng</label>
          <select
            name="loaiNguoiDung"
            value={formData.loaiNguoiDung}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="KhachHang">Khách Hàng</option>
            <option value="QuanTriVien">Quản Trị Viên</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
          Lưu
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600">
          Hủy
        </button>
      </div>
    </form>
  );
};

export default UserUpdateForm;
