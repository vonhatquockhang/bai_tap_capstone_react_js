
import LoginForm from '@/components/forms/LoginForm';
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/public/img/cinema-bg.jpg"
            alt="Cinema background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-10">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6 text-center">CineZone</h1>
          <p className="text-lg text-center max-w-md">
            Đăng nhập để tiếp tục đặt vé và theo dõi các suất chiếu mới nhất của bạn tại SnakeTheater.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-black">
        <div className="border border-yellow-500 rounded-xl p-10 w-full max-w-md text-white shadow-2xl bg-black bg-opacity-90 backdrop-blur-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
