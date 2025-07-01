"use client";

import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  tenPhim: string;
  hinhAnh: string;
  danhGia: number;
  maPhim: number;
  dangChieu: boolean;
  sapChieu?: boolean;
}

export default function MovieCard({
  tenPhim,
  hinhAnh,
  danhGia,
  maPhim,
  dangChieu,
}: MovieCardProps) {
  const showBooking = dangChieu === true;

  return (
    <div
      className="bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all flex flex-col"
      data-carousel-item
    >
      <div className="relative w-full h-64">
        <Image src={hinhAnh} alt={tenPhim} fill className="object-cover" />
      </div>
      <div className="p-4 text-white flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold line-clamp-2 mb-1 min-h-[3.5rem]">
            {tenPhim}
          </h3>
          <p className="text-yellow-400 font-semibold text-sm">
            ⭐ {danhGia}/10
          </p>
        </div>
        {showBooking ? (
          <Link
            href={`/homepage/${maPhim}`}
            className="mt-3 text-center inline-block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-yellow-300 transition"
          >
            Đặt vé
          </Link>
        ) : (
          <Link
            href={`/homepage/${maPhim}`}
            className="mt-3 text-center inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md font-semibold text-sm hover:bg-yellow-400 hover:text-black transition"
          >
            Chi tiết
          </Link>
        )}
      </div>
    </div>
  );
}