"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "lucide-react";

type UserData = {
  taiKhoan: string;
  hoTen: string;
};

export default function Navbar() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // hoặc router.push("/"), nếu bạn dùng useRouter
  };

  return (
    <nav className="w-full px-4 lg:px-8 py-3 text-white flex items-center justify-between fixed top-0 z-50 backdrop-blur-md bg-black/30 transition-all duration-300">
      {/* Logo + Menu */}
      <div className="flex items-center gap-6">
        <Link href="/homepage" className="text-white font-bold text-xl">
          SnakeTheater
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/homepage" className="hover:text-yellow-400">
            Trang chủ
          </Link>
          <Link href="/homepage/AllMovies" className="hover:text-yellow-400">
            Phim
          </Link>
          <Link href="/offers" className="hover:text-yellow-400">
            Tin tức
          </Link>
          <Link href="/cinepass" className="hover:text-yellow-400">
            Khuyến mãi
          </Link>
        </div>
      </div>

      {/* User info */}
      <div className="flex items-center gap-4 text-sm">
        {user ? (
          <>
            <span className="hidden md:inline text-yellow-400 font-bold">
              Xin chào, {user.hoTen}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-yellow-400">
              Đăng nhập
            </Link>
            <Link href="/register" className="hover:text-yellow-400">
              Đăng ký
            </Link>
          </>
        )}

        <Link
          href="/profile"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/70 hover:bg-yellow-500"
        >
          <User className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
