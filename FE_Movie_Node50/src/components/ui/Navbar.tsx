"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useAuth } from "@/hooks/auth/useAuth";
// import { useSearchFood } from "@/hooks/food/useSearchFood";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, taiKhoan, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?foodName=${encodeURIComponent(searchTerm.trim())}`);
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-red-500 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="Logo" className="h-8 w-auto rounded" />
          <span className="font-bold text-lg text-red-500">MOVIEZONE</span>
        </Link>

        {/* Search bar (desktop) */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex flex-1 mx-6 max-w-md"
        >
          <input
            type="text"
            placeholder="Tìm phim..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-1 rounded-l-full text-red-500 bg-black border border-red-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-1 rounded-r-full hover:bg-red-600 transition"
          >
            Tìm
          </button>
        </form>

        {/* Auth + Cart (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    taiKhoan
                  )}&background=000000&color=FF0000`}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border border-red-500"
                />
                <span className="font-semibold text-red-500">{taiKhoan}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
              >
                Đăng nhập
              </Link>
              <Link
                href="/signup"
                className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-red-500" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black text-red-500 px-4 py-4 space-y-4 shadow">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Tìm món ăn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-1 text-red-500 border border-red-500 bg-black rounded-l-md"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-1 rounded-r-md"
            >
              Tìm
            </button>
          </form>


          <hr className="border-red-500/20" />
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    taiKhoan
                  )}&background=000000&color=FF0000`}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">{taiKhoan}</span>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="w-full bg-red-600 text-white py-2 rounded-md mt-2 hover:bg-red-700 transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-red-500 text-white py-2 rounded-md"
              >
                Đăng nhập
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-red-500 text-white py-2 rounded-md"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
