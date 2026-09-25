"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "3d Visualisation",
  "Videos",
  "Walkthrough",
];

// Mock data for the gallery items
const galleryItems = [
  { id: 1, category: "Residential", type: "image", src: "/villa-sereno.jpg", title: "Villa Sereno" },
  { id: 2, category: "Commercial", type: "image", src: "/glass-house.jpg", title: "Office Complex" },
  { id: 3, category: "Interior", type: "image", src: "/3-trees-banner.jpg", title: "Modern Living" },
  { id: 4, category: "3d Visualisation", type: "image", src: "/entrance-01.jpg", title: "Entrance 3D" },
  { id: 5, category: "Residential", type: "image", src: "/ochre-5.jpg", title: "Nature's Edge" },
  { id: 6, category: "Videos", type: "video", src: "/sample-video.mp4", title: "Project Overview" }, // Just a placeholder
  { id: 7, category: "Walkthrough", type: "image", src: "/projects-hero.jpg", title: "Virtual Tour" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="w-full bg-[#5A3728] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase">Gallery</h1>
          <div className="h-[1px] w-24 bg-white/30"></div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm tracking-wider uppercase transition-colors border border-white/20 ${
                activeCategory === category
                  ? "bg-white text-[#5A3728] font-bold"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden bg-[#3E2723] rounded-lg cursor-pointer">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  <span>Video / Walkthrough Placeholder</span>
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-serif tracking-widest uppercase text-center px-4">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center text-white/60 text-lg">
              No items found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
