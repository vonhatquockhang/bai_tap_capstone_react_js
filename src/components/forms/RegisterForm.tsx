"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import bgImage from "@/img/cinema-bg.jpg";

interface FormData {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  hoTen: string;
  maNhom: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "GP01",
  });
  const [xacNhanMatKhau, setXacNhanMatKhau] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (!form.taiKhoan.trim()) newErrors.taiKhoan = "Tài khoản không được để trống";
    if (!form.matKhau.trim()) newErrors.matKhau = "Mật khẩu không được để trống";
    if (form.matKhau !== xacNhanMatKhau) newErrors.xacNhanMatKhau = "Mật khẩu không khớp";
    if (!form.email.trim() || !emailRegex.test(form.email)) newErrors.email = "Email không hợp lệ";
    if (!form.soDt.trim() || !phoneRegex.test(form.soDt)) newErrors.soDt = "Số điện thoại không hợp lệ";
    if (!form.hoTen.trim()) newErrors.hoTen = "Họ tên không được để trống";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        form,
        {
          headers: {
            TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjE2LzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzI1MTIwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNDI0MDAwfQ.AW3E6NCoEbvlvXPJj53HWqfHPdZa9NXeq3K-0GZPpUI",
          },
        }
      );
      alert("Đăng ký thành công!");
      router.push("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.content || "Lỗi đăng ký!");
      }
    }
  };

  return (
      <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-80 text-white p-8 rounded-xl w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-yellow-400">SIGN UP</h2>

        <div className="space-y-4">
          <input name="hoTen" placeholder="Họ tên" value={form.hoTen} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" />
          {errors.hoTen && <p className="text-red-400">{errors.hoTen}</p>}

          <input name="taiKhoan" placeholder="Tài khoản" value={form.taiKhoan} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" />
          {errors.taiKhoan && <p className="text-red-400">{errors.taiKhoan}</p>}

          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" />
          {errors.email && <p className="text-red-400">{errors.email}</p>}

          <input name="matKhau" type="password" placeholder="Mật khẩu" value={form.matKhau} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" />
          {errors.matKhau && <p className="text-red-400">{errors.matKhau}</p>}

          <input name="xacNhanMatKhau" type="password" placeholder="Xác nhận mật khẩu" value={xacNhanMatKhau} onChange={(e) => setXacNhanMatKhau(e.target.value)} className="w-full p-2 bg-gray-800 rounded" />
          {errors.xacNhanMatKhau && <p className="text-red-400">{errors.xacNhanMatKhau}</p>}

          <input name="soDt" placeholder="Số điện thoại" value={form.soDt} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" />
          {errors.soDt && <p className="text-red-400">{errors.soDt}</p>}

        </div>

        <div className="mt-6 flex justify-between">
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-bold w-full mr-2">
            Đăng ký
          </button>
          <button onClick={() => router.push("/login")} type="button" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold w-full ml-2">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}
