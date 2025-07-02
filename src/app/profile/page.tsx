"use client";

import React, { useEffect, useState } from "react";

interface User {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maLoaiNguoiDung: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p className="text-white text-center mt-10">Bạn chưa đăng nhập!</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-black text-white p-6 mt-10 rounded-lg shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-yellow-400 text-center">Thông tin cá nhân</h1>
      <p><strong>Tài khoản:</strong> {user.taiKhoan}</p>
      <p><strong>Họ tên:</strong> {user.hoTen}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Số điện thoại:</strong> {user.soDT}</p>
      <p><strong>Loại người dùng:</strong> {user.maLoaiNguoiDung}</p>
    </div>
  );
}
