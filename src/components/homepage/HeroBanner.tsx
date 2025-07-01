// components/homepage/HeroBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface Movie {
  maPhim: number;
  tenPhim: string;
  trailer: string;
}

export default function HeroBanner() {
  const [trailers, setTrailers] = useState<Movie[]>([]);
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    fetch(
      "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10",
      {
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjE2LzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzI1MTIwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYzNDI0MDAwfQ.AW3E6NCoEbvlvXPJj53HWqfHPdZa9NXeq3K-0GZPpUI",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const items = data.content?.items || [];
        const validTrailers = items.filter((item: Movie) =>
          item.trailer?.includes("watch?v=")
        );
        setTrailers(validTrailers);
        setShowText(true);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % trailers.length);
        setShowText(true);
      }, 500);
    }, 60000);
    return () => clearInterval(timer);
  }, [trailers.length]);

  const currentTrailer = trailers[current]?.trailer;
  const videoId = currentTrailer?.split("v=")[1]?.split("&")[0];
  const embedLink = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
        muted ? 1 : 0
      }&controls=0&loop=1&playlist=${videoId}`
    : "";

  return (
    <section className="relative container mx-auto h-[120vh] mt-10 w-full overflow-hidden shadow-md group">
      <div className="absolute inset-0 z-0">
        {embedLink && (
          <iframe
            src={embedLink}
            className="absolute top-0 left-0 w-full h-full"
            title="Trailer"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        )}
      </div>
      <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30"></div>

      <button
        onClick={() => setMuted((prev) => !prev)}
        className="absolute z-30 bottom-40 right-10 bg-black/60 hover:bg-black/80 text-white p-5 rounded-full"
      >
        {muted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {showText && (
        <div className="relative z-20 text-center text-white px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to SnakeTheater
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Book your movie tickets effortlessly
          </p>
          <Button
            size="lg"
            className="text-black bg-yellow-400 hover:bg-yellow-300 text-lg px-8 py-6"
          >
            Đặt Vé Ngay
          </Button>
        </div>
      )}
    </section>
  );
}
