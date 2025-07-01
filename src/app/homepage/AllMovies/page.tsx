"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/homepage/MovieCard";

interface Movie {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  danhGia: number;
}

function removeDiacritics(str: string): string {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export default function AllMovies() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetch(
      `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjE2LzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzI1MTIwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNDI0MDAwfQ.AW3E6NCoEbvlvXPJj53HWqfHPdZa9NXeq3K-0GZPpUI",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.content)) {
          setAllMovies(data.content);
          setMovies(data.content);
        } else {
          console.error("Invalid movie data:", data);
          setAllMovies([]);
          setMovies([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    const searchNorm = removeDiacritics(search.toLowerCase());
    const genreNorm = removeDiacritics(genre.toLowerCase());

    const filtered = allMovies.filter((movie) => {
      const movieName = removeDiacritics(movie.tenPhim.toLowerCase());
      return (
        movieName.includes(searchNorm) &&
        (genre ? movieName.includes(genreNorm) : true)
      );
    });

    setMovies(filtered);
  }, [search, genre, allMovies]);

  return (
    <section className="w-full bg-black mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold text-white mb-6">📽 Tất cả phim</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm phim..."
          className="flex-1 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:border-yellow-400"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-40 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:border-yellow-400"
        >
          <option value="">Tất cả thể loại</option>
          <option value="Hành Động">Hành Động</option>
          <option value="Tình Cảm">Tình Cảm</option>
          <option value="Kinh Dị">Kinh Dị</option>
          <option value="Hoạt Hình">Hoạt Hình</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.maPhim}
            tenPhim={movie.tenPhim}
            hinhAnh={movie.hinhAnh}
            danhGia={movie.danhGia}
            maPhim={movie.maPhim}
          />
        ))}
      </div>
    </section>
  );
}
