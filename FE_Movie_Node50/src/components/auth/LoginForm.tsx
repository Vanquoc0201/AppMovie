"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";
import { authService } from "@/services/authService";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
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
      const token = res.data.data.accessToken;

      if (token) {
        login(token, taiKhoan);
        toast.success("Đăng nhập thành công!");
        router.push("/");
      } else {
        setError("Đăng nhập thất bại. Không nhận được token.");
        toast.error("Đăng nhập thất bại. Vui lòng thử lại.");
      }
    } catch (err: any) {
      const message = err?.response?.data?.message || "Email hoặc mật khẩu không đúng.";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FormInput
        label="Tài Khoản"
        type="text"
        value={taiKhoan}
        onChange={(e) => setTaiKhoan(e.target.value)}
        required
      />

      <FormInput
        label="Mật khẩu"
        type="password"
        value={matKhau}
        onChange={(e) => setMatKhau(e.target.value)}
        required
      />

      {error && <ErrorMessage message={error} />}

      <button
        type="submit"
        className="w-full bg-[#e50914] hover:bg-[#b00710] text-white font-semibold py-2 rounded-xl transition duration-200"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
