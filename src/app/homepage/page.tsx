"use client";

import HeroBanner from "@/components/homepage/HeroBanner";
import MovieList from "@/components/homepage/MovieList";
import MovieListBanner from "@/components/homepage/MovieListBanner";
import NowPlayingTabs from "@/components/homepage/NowPlayingTabs";
import ReadyMovieList from "@/components/homepage/ReadyMovieList";
import NewsSection from "@/components/newInformation/NewSection";


import React from "react";
 // ✅ import đúng store

export default function Homepage() {
  return (
    <main className="bg-black">
      <HeroBanner />
      <NowPlayingTabs />
      <MovieListBanner />
      <MovieList />
      <ReadyMovieList />
    <NewsSection/>

    </main>
  );
}
