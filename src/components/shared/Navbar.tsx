"use client";

import Link from "next/link";
import React from "react";
import { Menu, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div>
      {/* Fixed nếu muốn navbar di chuyển */}
      <nav className=" w-full px-4 lg:px-8 py-3 text-white flex items-center justify-between fixed  top-0 z-50 backdrop-blur-md bg-black/30 transition-all duration-300">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <Link
            href="/homepage"
            className="text-white font-bold text-xl flex items-center gap-2"
          >
            {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8" /> */}
            <span className="hidden md:block">SnakeTheater</span>
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

        {/* Right section */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/register"
            className="hidden md:inline hover:text-yellow-400"
          >
            Tạo tài khoản mới
          </Link>
          <Link
            href="/profile"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/70 hover:bg-yellow-500"
          >
            <User className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-1">
            <span className="hidden md:inline">VN</span>
            <span className="text-xs">▼</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
