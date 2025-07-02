'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [seats, setSeats] = useState<string[]>([]);
  const pricePerSeat = 75000;
  const total = seats.length * pricePerSeat;

  useEffect(() => {
    const storedSeats = localStorage.getItem("selectedSeats");
    if (storedSeats) {
      setSeats(JSON.parse(storedSeats));
    } else {
      // Nếu không có ghế thì quay lại trang đặt vé
      router.push('/homepage');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanh toán thành công!');
    localStorage.removeItem("selectedSeats"); // Xoá sau khi thanh toán
    router.push('/homepage');
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Thanh Toán Vé Xem Phim
      </h2>

      <div className="mb-4 text-sm space-y-1">
        <p><strong>Ghế đã chọn:</strong> {seats.join(', ')}</p>
        <p><strong>Tổng tiền:</strong> {total.toLocaleString()} VND</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Các input như cũ */}
        {/* ... giữ nguyên phần formData, CVV, Số thẻ như bạn đã viết ... */}
        <div>
          <label className="block font-semibold">Họ tên</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Số thẻ</label>
          <input
            name="cardNumber"
            type="text"
            required
            maxLength={16}
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold">Hết hạn</label>
            <input
              name="expiry"
              type="text"
              placeholder="MM/YY"
              required
              value={formData.expiry}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold">CVV</label>
            <input
              name="cvv"
              type="password"
              maxLength={3}
              required
              value={formData.cvv}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-bold"
        >
          Thanh toán
        </button>
      </form>
    </div>
  );
}
