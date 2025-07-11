// components/homepage/MovieList.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import MovieCard from "@/components/homepage/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
interface Movie {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  danhGia: number;
  dangChieu: boolean;
  sapChieu: boolean;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
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
          setMovies(data.content);
        } else {
          console.error("Invalid movie data:", data);
          setMovies([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          "[data-carousel-next]"
        ) as HTMLButtonElement;
        nextButton?.click();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-white mb-6">🎞 Danh sách phim</h2>
        <Link
          href="/homepage/AllMovies"
          className="text-sm font-medium text-yellow-400 hover:underline"
        >
          Tất cả phim đang chiếu →
        </Link>
      </div>
      <Carousel
        className="w-full transition-transform duration-700 ease-in-out"
        ref={carouselRef}
      >
        <CarouselContent className="flex gap-4">
          {movies.map((movie) => (
            <CarouselItem
              key={movie.maPhim}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <MovieCard
                tenPhim={movie.tenPhim}
                hinhAnh={movie.hinhAnh}
                danhGia={movie.danhGia}
                maPhim={movie.maPhim}
                dangChieu={movie.dangChieu}
                sapChieu={movie.sapChieu}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          data-carousel-prev
          className="text-white bg-black/40 hover:bg-black/70"
        />
        <CarouselNext
          data-carousel-next
          className="text-white bg-black/40 hover:bg-black/70"
        />
      </Carousel>
    </section>
  );
}
