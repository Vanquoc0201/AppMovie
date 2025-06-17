"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";
import { authService } from "@/services/authService";
import Link from "next/link";
import { toast } from "react-toastify";

const CMSLogin = () => {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await authService.login({ taiKhoan, matKhau });
      const { accessToken, user } = res.data.data;
      if (user.loaiNguoiDung !== "QuanTriVien") {
        toast.error("Bạn không đủ quyền hạn để đăng nhập vào hệ thống CMS.");
        return;
      }
      login(accessToken, user.taiKhoan);
      toast.success("Đăng nhập CMS thành công!");
      router.push("/admin/dashboard");

    } catch (err: any) {
      const message = err?.response?.data?.message || "Đăng nhập thất bại.";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e50914]">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#e50914] mb-6">
          CMS - Đăng nhập quản trị
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Tài khoản</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
              value={taiKhoan}
              onChange={(e) => setTaiKhoan(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#e50914] hover:bg-[#b00710] text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Đăng nhập CMS
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Về trang người dùng?{" "}
          <Link href="/" className="text-[#e50914] hover:underline">
            Trang chủ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CMSLogin;
