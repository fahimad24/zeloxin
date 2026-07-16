"use client";

import React, { useState } from "react";
import { Input, Checkbox, Slider, Button, Card } from "@heroui/react";
import {
  Search,
  Grid,
  List,
  Heart,
  Gauge,
  Fuel,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";

// মক ডাটা
const CARS_DATA = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: 2023,
    type: "Coupe",
    engine: "6.5L V12",
    price: 517770,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=600",
    isFavorite: true,
  },
  {
    id: 2,
    brand: "Ferrari",
    model: "812 Superfast",
    year: 2022,
    type: "Coupe",
    engine: "6.5L V12",
    price: 398000,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
    isFavorite: false,
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2023,
    type: "Coupe",
    engine: "3.0L H6",
    price: 122600,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
    isFavorite: false,
  },
  {
    id: 4,
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    type: "Coupe",
    engine: "3.0L I6",
    price: 89900,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600",
    isFavorite: false,
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "AMG GT R",
    year: 2022,
    type: "Coupe",
    engine: "4.0L V8",
    price: 187500,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=600",
    isFavorite: true,
  },
  {
    id: 6,
    brand: "Audi",
    model: "R8 V10 Performance",
    year: 2023,
    type: "Coupe",
    engine: "5.2L V10",
    price: 162900,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=600",
    isFavorite: false,
  },
];

export default function InventoryPage() {
  const [priceRange, setPriceRange] = useState<number[]>([10000, 500000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-[#08090C] text-gray-200 font-sans antialiased">
      {/* 🏎️ SECTION 1: HERO BANNER */}
      <div className="relative h-[280px] w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-gradient-to-r from-black via-[#0f0505] to-black border-b border-red-950/30">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e50914_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
            Inventory
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>Home</span>{" "}
            <ChevronRight size={14} className="text-red-500" />{" "}
            <span className="text-red-500 font-medium">Inventory</span>
          </div>
          <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            Explore our exclusive collection of premium cars. Find the perfect
            car that matches your style and performance.
          </p>
        </div>
      </div>

      {/* 📊 SECTION 2: MAIN CONTENT */}
      <div className="max-w-384 mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ⚡ LEFT COLUMN: SIDEBAR FILTERS */}
          <div className="lg:col-span-1 flex flex-col gap-6 bg-[#0E1118] border border-gray-800/60 rounded-xl p-5 shadow-xl h-fit">
            {/* Search (startContent এরর দূর করতে কাস্টম রিলিজড লেআউট) */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Search Inventory
              </h3>
              <div className="relative flex items-center">
                <Search
                  size={18}
                  className="absolute left-3 text-gray-500 z-10"
                />
                <Input
                  type="text"
                  placeholder="Search by car name..."
                  className="w-full bg-[#161B26] border border-gray-800 rounded-lg pl-10 pr-3 h-10 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Categories (color এরর দূর করা হয়েছে) */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex justify-between items-center">
                Categories{" "}
                <span className="text-xs text-red-500 font-normal">
                  All Categories
                </span>
              </h3>
              <div className="flex flex-col gap-2.5 max-h-[200px] overflow-y-auto pr-1">
                {[
                  { name: "SUV", count: 32 },
                  { name: "Sedan", count: 28 },
                  { name: "Coupe", count: 18 },
                  { name: "Hatchback", count: 12 },
                  { name: "Convertible", count: 8 },
                ].map((category) => (
                  <div
                    key={category.name}
                    className="flex justify-between items-center text-sm"
                  >
                    <Checkbox className="text-gray-350 text-sm">
                      {category.name}
                    </Checkbox>
                    <span className="text-xs bg-[#161B26] text-gray-400 px-2 py-0.5 rounded-full font-mono">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Brands */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Brands</h3>
              <input
                type="text"
                placeholder="Search Brand"
                className="w-full bg-[#161B26] border border-gray-800 rounded-lg px-3 h-9 text-xs text-white mb-3 focus:outline-none focus:border-red-600"
              />
              <div className="flex flex-col gap-2.5 max-h-[220px] overflow-y-auto pr-1">
                {[
                  { name: "Lamborghini", count: 8 },
                  { name: "Ferrari", count: 6 },
                  { name: "Porsche", count: 12 },
                  { name: "BMW", count: 16 },
                  { name: "Mercedes-Benz", count: 18 },
                ].map((brand) => (
                  <div
                    key={brand.name}
                    className="flex justify-between items-center text-sm"
                  >
                    <Checkbox className="text-gray-300 text-sm">
                      {brand.name}
                    </Checkbox>
                    <span className="text-xs bg-[#161B26] text-gray-400 px-2 py-0.5 rounded-full font-mono">
                      {brand.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Price Range Slider (color এরর রিমুভড) */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4">Price Range</h3>
              <Slider
                step={5000}
                minValue={10000}
                maxValue={500000}
                value={priceRange}
                onChange={(value) => setPriceRange(value as number[])}
                className="max-w-md"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400 font-mono">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}+</span>
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Year Dropdowns (Select/SelectItem এরর এড়াতে পিওর সেফ ড্রপডাউন) */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Year</h3>
              <div className="grid grid-cols-2 gap-2">
                <select className="w-full h-9 bg-[#161B26] border border-gray-800 rounded-lg px-2 text-xs text-gray-300 focus:outline-none focus:border-red-600">
                  <option value="">From</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
                <select className="w-full h-9 bg-[#161B26] border border-gray-800 rounded-lg px-2 text-xs text-gray-300 focus:outline-none focus:border-red-600">
                  <option value="">To</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Filter Submits (variant="danger" ও "outline" সেট করা হয়েছে) */}
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="danger"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide py-2.5 rounded-lg transition-all"
              >
                Apply Filters
              </Button>
              <Button
                variant="outline"
                className="w-full border border-gray-800 hover:bg-gray-800 text-gray-300 font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} /> Reset Filters
              </Button>
            </div>
          </div>

          {/* 🏎️ RIGHT COLUMN: INVENTORY LAYOUT */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#0E1118] border border-gray-800/60 rounded-xl px-5 py-3.5 shadow-md">
              <p className="text-sm text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold font-mono">1–6</span>{" "}
                of{" "}
                <span className="text-white font-semibold font-mono">120</span>{" "}
                results
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <select className="w-48 h-9 bg-[#161B26] border border-gray-800 rounded-lg px-3 text-xs text-gray-300 focus:outline-none focus:border-red-600">
                  <option value="newest">Sort by: Newest First</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>

                <div className="flex border border-gray-800 rounded-lg overflow-hidden bg-[#161B26] p-0.5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Grid of Car Items */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {CARS_DATA.map((car) => (
                <Card
                  key={car.id}
                  className={`bg-[#0E1118] border border-gray-800/80 hover:border-red-600/50 shadow-xl transition-all duration-300 group flex flex-col ${
                    viewMode === "list" ? "sm:flex-row sm:h-52 w-full" : ""
                  }`}
                >
                  {/* Image wrapper */}
                  <div
                    className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-1/3 h-48 sm:h-full" : "h-48 w-full"}`}
                  >
                    <Image
                      src={car.image}
                      alt={`${car.brand}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                      priority
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118]/80 via-transparent to-transparent"></div>
                    <button className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-red-600/20 transition-all">
                      <Heart
                        size={16}
                        className={
                          car.isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-white"
                        }
                      />
                    </button>
                  </div>

                  {/* Body Content (CardBody এরর দূর করতে স্ট্যান্ডার্ড div প্যাডিং ব্যবহার করা হয়েছে) */}
                  <div
                    className={`p-4 flex flex-col justify-between flex-1 ${viewMode === "list" ? "sm:w-2/3" : ""}`}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold block mb-1">
                        {car.brand}
                      </span>
                      <h2 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1 mb-1">
                        {car.brand} {car.model}
                      </h2>
                      <p className="text-xs text-gray-400 font-medium mb-3">
                        {car.year} <span className="text-gray-600 mx-1">•</span>{" "}
                        {car.type} <span className="text-gray-600 mx-1">•</span>{" "}
                        {car.engine}
                      </p>
                      <div className="text-xl font-bold font-mono text-red-500 mb-4">
                        ${car.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-800/60 pt-3">
                        <div className="flex items-center gap-1.5">
                          <Gauge size={14} className="text-gray-500" />
                          <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Fuel size={14} className="text-gray-500" />
                          <span>{car.fuel}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border border-gray-800 group-hover:border-red-600 group-hover:bg-red-600 text-gray-300 group-hover:text-white font-semibold py-1.5 rounded-lg transition-all duration-300 text-center text-sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* 🏁 CUSTOM PAGINATION (Pagination component টাইপ এরর এড়াতে বাটন দিয়ে পিক্সেল-পারফেক্ট করা হয়েছে) */}
            <div className="flex justify-center mt-6 border-t border-gray-800/60 pt-6">
              <div className="flex gap-1 bg-[#0E1118] border border-gray-800 p-1 rounded-xl shadow-lg">
                <Button
                  variant="outline"
                  className="min-w-9 h-9 p-0 text-gray-400 hover:text-white"
                >
                  &lt;
                </Button>
                <Button
                  variant="danger"
                  className="min-w-9 h-9 p-0 bg-red-600 text-white font-bold rounded-lg"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className="min-w-9 h-9 p-0 text-gray-400 hover:text-white"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="min-w-9 h-9 p-0 text-gray-400 hover:text-white"
                >
                  3
                </Button>
                <span className="min-w-9 h-9 flex items-center justify-center text-gray-500 font-mono">
                  ...
                </span>
                <Button
                  variant="outline"
                  className="min-w-9 h-9 p-0 text-gray-400 hover:text-white"
                >
                  10
                </Button>
                <Button
                  variant="outline"
                  className="min-w-9 h-9 p-0 text-gray-400 hover:text-white"
                >
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
