// lib/api.ts
//MovieDetail.tsx
export async function getMovieShowtimes(maPhim: number) {
  const res = await fetch(
    `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    {
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzU5NjgwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNzY5NjAwfQ.0FVjgESRWQdgV5umKdlAzdQ0ru01kk_ZfAzIVuecN28",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.content;
}
