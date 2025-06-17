"use client";

import Link from "next/link";
import SignUpForm from "@/components/auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto mt-16 bg-red-600">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#e50914] mb-6">
          Tạo tài khoản mới
        </h2>
        <SignUpForm />
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
