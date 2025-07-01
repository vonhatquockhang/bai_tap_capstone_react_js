"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
        <div className="col-span-2 lg:col-span-1">
          <div className="text-3xl font-black mb-3">SnakeTheater</div>
        </div>

        <div>
          <h3 className="font-bold mb-2 uppercase">New Movies on Display</h3>
          <ul className="space-y-1">
            <li>Dragons</li>
            <li>Lilo & Stitch</li>
            <li>Mission: Impossible</li>
            <li>John Wick: Ballerina</li>
            <li>Movies in cinemas</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 uppercase">Cinemas in your cities</h3>
          <ul className="space-y-1">
            <li>Paris</li>
            <li>Lyon</li>
            <li>Marseille</li>
            <li>Toulouse</li>
            <li>Nice</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 uppercase">About</h3>
          <ul className="space-y-1">
            <li>CinéPass</li>
            <li>CinéCartes</li>
            <li>IMAX</li>
            <li>Dolby Cinema</li>
            <li>ScreenX</li>
            <li>Our experiences</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 uppercase">Useful Links</h3>
          <ul className="space-y-1">
            <li>Pathé Live</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
            <li>Join us</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-white/10 pt-6">
        <div className="flex gap-4 text-white mb-4 lg:mb-0">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>
        <p className="text-xs text-white/70">
          SnakeTheater Services © 2025 — All rights reserved ®
        </p>
      </div>
    </footer>
  );
}
