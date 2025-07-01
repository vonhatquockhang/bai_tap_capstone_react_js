// components/homepage/NowPlayingTabs.tsx
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, Video, Star } from "lucide-react";

export default function NowPlayingTabs() {
  const [activeTab, setActiveTab] = useState("search");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Tìm kiếm phim:", searchTerm);
    // Gọi API hoặc lọc danh sách phim tại đây với searchTerm
  }, [searchTerm]);

  return (
    <div className="w-full flex container mx-auto justify-center px-4 pt-5">
      <div className="flex w-full max-w-5xl items-center gap-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-2">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Tìm tên phim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-white" />
          </div>
        </div>

        <button
          onClick={() => setActiveTab("now_showing")}
          className={cn(
            "flex items-center gap-2 text-sm md:text-base px-4 py-3 text-white transition-all rounded-lg",
            activeTab === "now_showing"
              ? "bg-white/10 border border-white/20"
              : "bg-white/5 hover:bg-white/10"
          )}
        >
          <Video className="w-4 h-4" /> Đang chiếu
        </button>

        <button
          onClick={() => setActiveTab("coming_soon")}
          className={cn(
            "flex items-center gap-2 text-sm md:text-base px-4 py-3 text-white transition-all rounded-lg",
            activeTab === "coming_soon"
              ? "bg-white/10 border border-white/20"
              : "bg-white/5 hover:bg-white/10"
          )}
        >
          <Star className="w-4 h-4" /> Sắp chiếu
        </button>
      </div>
    </div>
  );
}
