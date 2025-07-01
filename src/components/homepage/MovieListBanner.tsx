// components/homepage/MovieListBanner.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Banner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

export default function MovieListBanner() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjE2LzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzI1MTIwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNDI0MDAwfQ.AW3E6NCoEbvlvXPJj53HWqfHPdZa9NXeq3K-0GZPpUI",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("BANNER API:", data);
        if (Array.isArray(data.content)) {
          setBanners(data.content);
        } else {
          setBanners([]);
        }
      })
      .catch((err) => console.error("Failed to fetch banners:", err));
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <section className="w-full container max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-white mb-4">🎥 Movie Banners</h2>
      <Carousel className="w-full">
        <CarouselContent className="rounded-xl overflow-hidden shadow-lg">
          {banners.map((banner, index) => (
            <CarouselItem
              key={banner.maBanner}
              className={`relative w-full h-[400px] transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <Image
                src={banner.hinhAnh}
                alt={`Banner ${banner.maPhim}`}
                fill
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </section>
  );
}
