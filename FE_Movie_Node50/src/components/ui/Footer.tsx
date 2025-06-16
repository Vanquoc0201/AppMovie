import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo + bản quyền */}
        <div className="text-center md:text-left">
          <p className="text-red-500 font-bold text-lg">🎬 MovieZone</p>
          <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} MovieZone. All rights reserved.</p>
        </div>

        {/* Liên kết */}
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:text-red-500 transition">Điều khoản</a>
          <a href="#" className="hover:text-red-500 transition">Chính sách</a>
          <a href="#" className="hover:text-red-500 transition">Hỗ trợ</a>
        </div>
      </div>
    </footer>
  );
}