"use client";

import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-600">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#e50914] mb-6">
          Chào mừng quay lại!
        </h2>
        <LoginForm />
        <p className="text-sm text-center text-gray-500 mt-4">
          Bạn chưa có tài khoản?{" "}
          <Link href="/signup" className="text-[#e50914] hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
