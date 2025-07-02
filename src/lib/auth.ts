import axios from "axios";

export async function dangNhapNguoiDung({
  taiKhoan,
  matKhau,
}: {
  taiKhoan: string;
  matKhau: string;
}) {
  return axios.post(
    "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    { taiKhoan, matKhau },
    {
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzU5NjgwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNzY5NjAwfQ.0FVjgESRWQdgV5umKdlAzdQ0ru01kk_ZfAzIVuecN28",
      },
    }
  );
}
