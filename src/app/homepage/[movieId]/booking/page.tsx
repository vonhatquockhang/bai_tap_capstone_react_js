'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import SeatMap from '@/components/homepage/SeatMap';

export default function Page() {
  const { movieId } = useParams() as { movieId: string };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Đặt vé phim #{movieId}</h1>
    <SeatMap movieId={movieId} />
    </div>
  );
}