"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";

const AuthMenu = () => {
  const { isLoggedIn, taiKhoan, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoggedIn) {
    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
        >
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(taiKhoan)}&background=000000&color=FF0000`}
            alt="Avatar"
            className="w-8 h-8 rounded-full border border-white"
          />
          <span className="font-semibold">{taiKhoan}</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black text-red-500 border border-red-500 rounded shadow-lg z-50">
            <Link
              href="/profile"
              onClick={() => setDropdownOpen(false)}
              className="block px-4 py-2 hover:bg-red-600 hover:text-white transition"
            >
              Trang cá nhân
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition"
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
      >
        Tài khoản
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black text-red-500 border border-red-500 rounded shadow-lg z-50">
          <Link href="/login" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-600 hover:text-white transition">Đăng nhập</Link>
          <Link href="/signup" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-600 hover:text-white transition">Đăng ký</Link>
          <Link href="/cms-login" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-red-600 hover:text-white transition">Đăng nhập CMS</Link>
        </div>
      )}
    </div>
  );
};

export default AuthMenu;
