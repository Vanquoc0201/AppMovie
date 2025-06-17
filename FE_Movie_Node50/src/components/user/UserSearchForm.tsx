"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  defaultKeyword: string;
}

const UserSearchForm = ({ defaultKeyword }: Props) => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keyword = new FormData(e.currentTarget).get("taiKhoan")?.toString().trim() || "";
    const query = keyword ? `?taiKhoan=${encodeURIComponent(keyword)}` : "";
    router.push(`/admin/user${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        name="taiKhoan"
        defaultValue={defaultKeyword}
        placeholder="Nhập tài khoản cần tìm..."
        className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-sm"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Tìm
      </button>
    </form>
  );
};

export default UserSearchForm;
