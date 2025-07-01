"use client";

import Image from "next/image";

export default function MovieDetailSection({ movie }: { movie: any }) {
  const { tenPhim, hinhAnh, moTa, danhGia, trailer, dangChieu, sapChieu } =
    movie;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="relative w-full md:w-1/3 h-96 rounded-lg overflow-hidden shadow-lg">
          <Image src={hinhAnh} alt={tenPhim} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">{tenPhim}</h1>
          <p className="text-gray-400 leading-relaxed">
            <strong className="text-white">Mô tả:</strong> {moTa}
          </p>
          <p>
            <strong>Đánh giá:</strong>{" "}
            <span className="text-yellow-400 font-semibold">
              ⭐ {danhGia}/10
            </span>
          </p>
          {trailer && (
            <p>
              <strong>Trailer:</strong>{" "}
              <a
                href={trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition"
              >
                Xem trailer
              </a>
            </p>
          )}

          {/* Nút scroll tới lịch chiếu nếu không phải phim sắp chiếu */}
          {(dangChieu === true ||
            (sapChieu === true && dangChieu === true)) && (
            <a
              href="#showtimes"
              className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-yellow-300 transition"
            >
              🎟️ Chọn suất chiếu
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
