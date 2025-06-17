"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";
import { authService } from "@/services/authService";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";

const SignUpForm = () => {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput label="Tài khoản" name="taiKhoan" type="text" value={form.taiKhoan} onChange={handleChange} required />
      <FormInput label="Mật khẩu" name="matKhau" type="password" value={form.matKhau} onChange={handleChange} required />
      <FormInput label="Họ tên" name="hoTen" type="text" value={form.hoTen} onChange={handleChange} required />
      <FormInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <FormInput label="Số điện thoại" name="soDt" type="text" value={form.soDt} onChange={handleChange} required />

      {error && <ErrorMessage message={error} />}

      <button
        type="submit"
        className="w-full bg-[#e50914] hover:bg-[#b00710] text-white font-semibold py-2 rounded-xl transition duration-200"
      >
        Đăng ký
      </button>
    </form>
  );
};

export default SignUpForm;
