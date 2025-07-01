"use client";

import NewsCard from "@/components/newInformation/NewCard";

const dummyNews = [
  {
    id: 1,
    title: "Bom Tấn Mới: Phần Cuối Của Avengers Được Công Bố!",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2023/09/phim-bom-tan-6.jpg",
    summary:
      "Marvel vừa xác nhận phần cuối cùng của loạt phim Avengers sẽ ra mắt năm 2026 với sự góp mặt của dàn diễn viên huyền thoại...",
  },
  {
    id: 2,
    title: "LHP Cannes 2025: Phim Việt Gây Ấn Tượng Mạnh",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2023/09/phim-bom-tan-6.jpg",
    summary:
      "Bộ phim 'Giấc Mơ Đêm Hè' đã đại diện cho Việt Nam và nhận về tràng pháo tay dài 7 phút tại Liên hoan phim Cannes năm nay...",
  },
  {
    id: 3,
    title: "Netflix Ra Mắt Tính Năng Tương Tác Với Người Xem",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2023/09/phim-bom-tan-6.jpg",
    summary:
      "Một bước tiến mới từ Netflix, người xem giờ có thể chọn diễn biến câu chuyện bằng cách tương tác trực tiếp trên màn hình...",
  },
];

export default function NewsSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 border-l-4 pl-4 border-yellow-400">
        Tin Tức Mới
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {dummyNews.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
