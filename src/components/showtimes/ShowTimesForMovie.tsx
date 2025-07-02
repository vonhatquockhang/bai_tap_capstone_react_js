"use client";

import { useState } from "react";
import { HeThongRapChieu, CumRapChieu, LichChieu } from "./type";
import { useRouter } from "next/navigation";

interface Props {
  showtimes: {
    heThongRapChieu: HeThongRapChieu[];
  };
}

export default function ShowTimesForMovie({ showtimes }: Props) {
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);
  const router = useRouter();

  const handleBooking = () => {
    if (selectedShowtime) {
      router.push(`/homepage/${selectedShowtime}/booking`);
    }
  };

  return (
    <section
      id="showtimes"
      className="container mx-auto bg-gray-900 p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Lịch Chiếu</h2>

      {showtimes.heThongRapChieu.map((sys) => (
        <div key={sys.maHeThongRap} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={sys.logo}
              className="w-10 h-10 rounded"
              alt={sys.tenHeThongRap}
            />
            <h3 className="text-xl text-white">{sys.tenHeThongRap}</h3>
          </div>

          {sys.cumRapChieu.map((cum: CumRapChieu) => (
            <div key={cum.maCumRap} className="ml-12 mb-4">
              <h4 className="text-lg font-semibold text-gray-200">
                {cum.tenCumRap}
              </h4>
              <p className="text-sm text-gray-400 mb-2">{cum.diaChi}</p>

              <div className="flex flex-wrap gap-2">
                {cum.lichChieuPhim.map((lich: LichChieu) => {
                  const isSelected = selectedShowtime === lich.maLichChieu;
                  return (
                    <button
                      key={lich.maLichChieu}
                      onClick={() => setSelectedShowtime(lich.maLichChieu)}
                      className={`px-3 py-1 rounded transition ${
                        isSelected
                          ? "bg-green-400 text-black"
                          : "bg-gray-700 text-white hover:bg-green-500"
                      }`}
                    >
                      {new Date(lich.ngayChieuGioChieu).toLocaleTimeString(
                        "vi-VN",
                        { hour: "2-digit", minute: "2-digit" }
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-6 text-center">
        <button
          disabled={!selectedShowtime}
          onClick={handleBooking}
          className={`px-6 py-2 text-lg font-semibold rounded ${
            selectedShowtime
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Đặt Vé
        </button>
      </div>
    </section>
  );
}
