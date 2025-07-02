
import RegisterForm from '@/components/forms/RegisterForm'
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
          <h1 className="text-5xl font-bold text-yellow-400 mb-6 text-center">SnakeTheater</h1>
          <p className="text-lg text-center max-w-md">
            Trải nghiệm những bộ phim bom tấn với chất lượng hình ảnh và âm thanh đỉnh cao.
            Đăng ký thành viên để đặt vé nhanh chóng và nhận nhiều ưu đãi hấp dẫn!
          </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-black">
        <div className="border border-yellow-500 rounded-xl p-10 w-full max-w-md text-white shadow-2xl bg-black bg-opacity-90 backdrop-blur-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
