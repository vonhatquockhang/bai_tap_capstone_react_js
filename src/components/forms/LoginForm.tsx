"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { dangNhapNguoiDung } from "@/lib/auth";

export default function LoginForm() {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await dangNhapNguoiDung({ taiKhoan, matKhau });

      const user = response.data.content;
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Thông báo đăng nhập thành công
      alert("Đăng nhập thành công!");

      // ✅ Điều hướng dựa theo loại người dùng
      if (user.maLoaiNguoiDung === "QuanTri") {
        router.push("/admin");
      } else if (user.maLoaiNguoiDung === "KhachHang") {
        router.push("/homepage");
      } else {
        alert("Loại người dùng không hợp lệ!");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.content || "Sai tài khoản hoặc mật khẩu!");
      } else {
        alert("Đã có lỗi xảy ra!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/img/cinema-bg.jpg")' }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-80 text-white p-8 rounded-xl w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-400">
          ĐĂNG NHẬP
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={taiKhoan}
            onChange={(e) => setTaiKhoan(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
            placeholder="Tài khoản"
            required
          />

          <input
            type="password"
            value={matKhau}
            onChange={(e) => setMatKhau(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
            placeholder="Mật khẩu"
            required
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-bold w-full mr-2"
          >
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/register")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold w-full ml-2"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}
