"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";
import { authService } from "@/services/authService";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUp = () => {
  const [form, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await authService.register(form);
      const token = res.data?.data?.accessToken || "dummyToken";

      login(token, form.taiKhoan);
      toast.success("Đăng ký thành công!");
      router.push("/login");
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto mt-16 bg-red-600">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#e50914] mb-6">
          Tạo tài khoản mới
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Tài khoản</label>
            <input
              type="text"
              name="taiKhoan"
              value={form.taiKhoan}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              value={form.matKhau}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Họ tên</label>
            <input
              type="text"
              name="hoTen"
              value={form.hoTen}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Số điện thoại</label>
            <input
              type="text"
              name="soDt"
              value={form.soDt}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#e50914] hover:bg-[#b00710] text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Đăng ký
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Bạn đã có tài khoản?{" "}
          <Link href="/login" className="text-[#e50914] hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
