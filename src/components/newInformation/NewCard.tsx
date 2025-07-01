"use client";

interface Props {
  image: string;
  title: string;
  summary: string;
}

export default function NewsCard({ image, title, summary }: Props) {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{summary}</p>
        <button className="mt-2 text-yellow-400 hover:underline text-sm self-start">
          Đọc tiếp →
        </button>
      </div>
    </div>
  );
}
