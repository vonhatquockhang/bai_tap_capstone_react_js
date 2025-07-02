"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const rows = 10;
const cols = 12;
const rowLabels = "ABCDEFGHIJ".split("");
const pricePerSeat = 75000;

export default function SeatMap({ movieId }: { movieId: string }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();

  const formatSeatId = (row: number, col: number) =>
    `${rowLabels[row]}${col + 1}`;

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const total = selectedSeats.length * pricePerSeat;

  const handleCheckout = () => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    localStorage.setItem("movieId", movieId); // ✅ Lưu movieId để checkout sau dùng
    router.push("/checkout"); // 👉 chuyển sang trang thanh toán
  };

  if (confirmed) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded p-6 space-y-4 text-sm mt-10">
        <h2 className="text-xl font-bold mb-2 text-center">XÁC NHẬN ĐẶT VÉ</h2>
        <p>
          <strong>Mã phim:</strong> {movieId}
        </p>
        <p>
          <strong>Số ghế:</strong> {selectedSeats.length}
        </p>
        <p>
          <strong>Ghế đã chọn:</strong> {selectedSeats.join(", ")}
        </p>
        <p>
          <strong>Tổng tiền:</strong> {total.toLocaleString()} VND
        </p>
        <button
          onClick={handleCheckout}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold"
        >
          Thanh toán
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="text-center mb-4 font-bold text-lg">Màn Hình</div>
      <div className="bg-orange-400 h-6 w-full mb-6 rounded-md"></div>

      <div className="flex gap-4 mb-4">
        <Legend color="bg-green-400" label="Ghế đang chọn" />
        <Legend color="bg-white" label="Ghế trống" />
      </div>

      <div
        className="grid gap-2 mb-6 justify-center"
        style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}
      >
        {Array.from({ length: rows }).flatMap((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const seatId = formatSeatId(row, col);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <button
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`w-10 h-10 border-2 rounded-md text-xs font-bold ${
                  isSelected ? "bg-green-400" : "bg-white hover:bg-gray-200"
                }`}
              >
                {seatId}
              </button>
            );
          })
        )}
      </div>

      <button
        className="bg-yellow-400 hover:bg-yellow-500 w-full py-2 rounded font-bold"
        disabled={selectedSeats.length === 0}
        onClick={() => setConfirmed(true)}
      >
        Xác nhận đặt vé
      </button>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className={`w-4 h-4 border ${color}`}></div>
      <span>{label}</span>
    </div>
  );
}
