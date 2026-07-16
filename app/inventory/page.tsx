"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Button, Card } from "@heroui/react";
import {
  Search,
  Grid,
  List,
  Heart,
  Gauge,
  Fuel,
  ChevronRight,
  RotateCcw,
  MapPin,
  Star,
} from "lucide-react";
import { debounce, countBy } from "lodash";
import Image from "next/image";

// ==========================================
// 🛠️ DATA TYPE DEFINITION
// ==========================================
interface ICarData {
  _id: { $oid: string };
  title: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  bodyType: string;
  condition: string;
  pricing: {
    price: number;
    discountPrice: number;
    currency: string;
    availability: string;
  };
  specifications: {
    mileage: number;
    fuelType: string;
    transmission: string;
    driveType: string;
    doors: number;
    seats: number;
    engine: {
      type: string;
      capacity: string;
      horsepower: number;
      torque: string;
      topSpeed: string;
      acceleration: string;
    };
  };
  features: string[];
  otherFeatures: string[];
  description: string;
  location: string;
  images: { thumbnail: string; cover: string; gallery: string[] };
  seller: { userId: string; name: string; email: string };
  seo: { metaTitle: string; metaDescription: string; keywords: string[] };
  statistics: { views: number; favorites: number; inquiries: number };
  status: string;
  isFeatured: boolean;
  isVerified: boolean;
  isSold: boolean;
  rating: number;
  reviews: number;
  createdBy: string;
  updatedBy: string;
  createdAt: { $date: string };
  updatedAt: { $date: string };
}

// ==========================================
// 🚗 MOCK DATA ARRAY
// ==========================================
const RAW_CARS_DATA: ICarData[] = [
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f111" },
    title: "Lamborghini Aventador SVJ",
    slug: "lambo-svj",
    brand: "lamborghini",
    model: "Aventador SVJ",
    year: 2023,
    bodyType: "coupe",
    condition: "new",
    pricing: {
      price: 517770,
      discountPrice: 500000,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 500,
      fuelType: "petrol",
      transmission: "automatic",
      driveType: "awd",
      doors: 2,
      seats: 2,
      engine: {
        type: "V12",
        capacity: "6.5 L",
        horsepower: 770,
        torque: "720 Nm",
        topSpeed: "350 km/h",
        acceleration: "2.8 sec",
      },
    },
    features: [
      "Air Conditioning",
      "Alloy Wheels",
      "Bluetooth",
      "LED Lights",
      "Traction Control",
    ],
    otherFeatures: [],
    description: "Extreme performance supercar",
    location: "Dhaka",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u1", name: "Ahmad", email: "a@a.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 100, favorites: 20, inquiries: 5 },
    status: "approved",
    isFeatured: true,
    isVerified: true,
    isSold: false,
    rating: 5,
    reviews: 10,
    createdBy: "Ahmad",
    updatedBy: "",
    createdAt: { $date: "2026-07-10T01:01:15.450Z" },
    updatedAt: { $date: "2026-07-10T01:01:15.450Z" },
  },
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f222" },
    title: "Ferrari 812 Superfast",
    slug: "ferrari-812",
    brand: "ferrari",
    model: "812",
    year: 2022,
    bodyType: "coupe",
    condition: "used",
    pricing: {
      price: 398000,
      discountPrice: 390000,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 2500,
      fuelType: "petrol",
      transmission: "automatic",
      driveType: "rwd",
      doors: 2,
      seats: 2,
      engine: {
        type: "V12",
        capacity: "6.5 L",
        horsepower: 789,
        torque: "718 Nm",
        topSpeed: "340 km/h",
        acceleration: "2.9 sec",
      },
    },
    features: [
      "Air Conditioning",
      "Alloy Wheels",
      "Keyless Entry",
      "LED Lights",
    ],
    otherFeatures: [],
    description: "V12 Masterpiece",
    location: "Dhaka",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u2", name: "Fahim", email: "f@f.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 80, favorites: 15, inquiries: 3 },
    status: "approved",
    isFeatured: false,
    isVerified: true,
    isSold: false,
    rating: 4.8,
    reviews: 8,
    createdBy: "Fahim",
    updatedBy: "",
    createdAt: { $date: "2026-06-15T01:01:15.450Z" },
    updatedAt: { $date: "2026-06-15T01:01:15.450Z" },
  },
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f333" },
    title: "Porsche 911 Carrera S",
    slug: "porsche-911",
    brand: "porsche",
    model: "911",
    year: 2023,
    bodyType: "coupe",
    condition: "new",
    pricing: {
      price: 122600,
      discountPrice: 0,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 50,
      fuelType: "petrol",
      transmission: "automatic",
      driveType: "rwd",
      doors: 2,
      seats: 4,
      engine: {
        type: "Flat-6",
        capacity: "3.0 L",
        horsepower: 443,
        torque: "530 Nm",
        topSpeed: "308 km/h",
        acceleration: "3.5 sec",
      },
    },
    features: ["Alloy Wheels", "Bluetooth", "Cruise Control", "LED Lights"],
    otherFeatures: [],
    description: "Iconic sports car",
    location: "Chittagong",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u1", name: "Ahmad", email: "a@a.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 120, favorites: 25, inquiries: 8 },
    status: "approved",
    isFeatured: true,
    isVerified: true,
    isSold: false,
    rating: 4.9,
    reviews: 12,
    createdBy: "Ahmad",
    updatedBy: "",
    createdAt: { $date: "2026-07-16T01:01:15.450Z" },
    updatedAt: { $date: "2026-07-16T01:01:15.450Z" },
  },
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f444" },
    title: "BMW M4 Competition",
    slug: "bmw-m4",
    brand: "bmw",
    model: "M4",
    year: 2023,
    bodyType: "coupe",
    condition: "new",
    pricing: {
      price: 89900,
      discountPrice: 85000,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 100,
      fuelType: "petrol",
      transmission: "automatic",
      driveType: "awd",
      doors: 2,
      seats: 4,
      engine: {
        type: "Inline-6",
        capacity: "3.0 L",
        horsepower: 503,
        torque: "650 Nm",
        topSpeed: "290 km/h",
        acceleration: "3.4 sec",
      },
    },
    features: [
      "Air Conditioning",
      "Alloy Wheels",
      "Bluetooth",
      "Parking Sensors",
    ],
    otherFeatures: [],
    description: "High performance coupe",
    location: "Dhaka",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u3", name: "Karim", email: "k@k.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 60, favorites: 10, inquiries: 2 },
    status: "approved",
    isFeatured: false,
    isVerified: false,
    isSold: false,
    rating: 4.7,
    reviews: 6,
    createdBy: "Karim",
    updatedBy: "",
    createdAt: { $date: "2026-07-01T01:01:15.450Z" },
    updatedAt: { $date: "2026-07-01T01:01:15.450Z" },
  },
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f555" },
    title: "Mercedes-AMG G 63",
    slug: "merc-g63",
    brand: "mercedes-benz",
    model: "G-Class",
    year: 2023,
    bodyType: "suv",
    condition: "used",
    pricing: {
      price: 185000,
      discountPrice: 180000,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 8000,
      fuelType: "petrol",
      transmission: "automatic",
      driveType: "awd",
      doors: 5,
      seats: 5,
      engine: {
        type: "V8",
        capacity: "4.0 L",
        horsepower: 577,
        torque: "850 Nm",
        topSpeed: "220 km/h",
        acceleration: "4.5 sec",
      },
    },
    features: [
      "Air Conditioning",
      "Alloy Wheels",
      "Bluetooth",
      "Keyless Entry",
      "Parking Sensors",
      "Sunroof",
    ],
    otherFeatures: [],
    description: "Iconic luxury off-roader",
    location: "Dhaka",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1520031607889-97599a9b1c74?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u2", name: "Fahim", email: "f@f.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 130, favorites: 30, inquiries: 10 },
    status: "approved",
    isFeatured: true,
    isVerified: true,
    isSold: false,
    rating: 4.9,
    reviews: 14,
    createdBy: "Fahim",
    updatedBy: "",
    createdAt: { $date: "2026-07-16T01:01:15.450Z" },
    updatedAt: { $date: "2026-07-16T01:01:15.450Z" },
  },
  {
    _id: { $oid: "6a582d5b39c4c8b2f19f666" },
    title: "Audi Q8 55 TFSI",
    slug: "audi-q8",
    brand: "audi",
    model: "Q8",
    year: 2023,
    bodyType: "suv",
    condition: "new",
    pricing: {
      price: 78500,
      discountPrice: 75000,
      currency: "USD",
      availability: "in_stock",
    },
    specifications: {
      mileage: 400,
      fuelType: "hybrid",
      transmission: "automatic",
      driveType: "awd",
      doors: 5,
      seats: 5,
      engine: {
        type: "V6 Hybrid",
        capacity: "3.0 L",
        horsepower: 335,
        torque: "500 Nm",
        topSpeed: "250 km/h",
        acceleration: "5.6 sec",
      },
    },
    features: [
      "Air Conditioning",
      "Alloy Wheels",
      "Bluetooth",
      "Parking Sensors",
      "Sunroof",
    ],
    otherFeatures: [],
    description: "Luxury SUV coupe",
    location: "Dhaka",
    images: {
      thumbnail:
        "https://images.unsplash.com/photo-1598380313936-397a61d1e43e?q=80&w=600",
      cover: "",
      gallery: [],
    },
    seller: { userId: "u1", name: "Ahmad", email: "a@a.com" },
    seo: { metaTitle: "", metaDescription: "", keywords: [] },
    statistics: { views: 65, favorites: 11, inquiries: 3 },
    status: "approved",
    isFeatured: false,
    isVerified: false,
    isSold: false,
    rating: 4.7,
    reviews: 6,
    createdBy: "Ahmad",
    updatedBy: "",
    createdAt: { $date: "2026-07-12T01:01:15.450Z" },
    updatedAt: { $date: "2026-07-12T01:01:15.450Z" },
  },
];

const ITEMS_PER_PAGE = 6;
const formatUSD = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

// ==========================================
// 🧱 STATIC COMPONENT (Moved outside of render to fix ESLint)
// ==========================================
interface IFilterSectionProps {
  title: string;
  data: { name: string; count: number }[];
  selectedSet: Set<string>;
  onChange: (value: string) => void;
}

const FilterSection = ({
  title,
  data,
  selectedSet,
  onChange,
}: IFilterSectionProps) => (
  <div>
    <h3 className="text-sm font-bold text-white mb-3 capitalize">{title}</h3>
    <div className="flex flex-col gap-2.5 max-h-50 overflow-y-auto pr-1">
      {data.map((item) => (
        <div
          key={item.name}
          className="flex justify-between items-center text-sm"
        >
          <label className="flex items-center gap-2.5 text-gray-400 text-sm capitalize cursor-pointer select-none">
            <input
              type="checkbox"
              checked={selectedSet.has(item.name)}
              onChange={() => onChange(item.name)}
              className="w-4 h-4 rounded accent-red-650 bg-[#161B26] border-gray-800 focus:ring-0 focus:ring-offset-0"
            />
            <span
              className={
                selectedSet.has(item.name) ? "text-white font-medium" : ""
              }
            >
              {item.name}
            </span>
          </label>
          <span className="text-xs bg-[#161B26] text-gray-400 px-2 py-0.5 rounded-full font-mono">
            {item.count}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function InventoryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<Set<string>>(
    new Set(),
  );
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<Set<string>>(
    new Set(),
  );
  const [selectedTransmissions, setSelectedTransmissions] = useState<
    Set<string>
  >(new Set());
  const [priceRange, setPriceRange] = useState<number[]>([10000, 600000]);
  const [yearFrom, setYearFrom] = useState<number | null>(null);
  const [yearTo, setYearTo] = useState<number | null>(null);
  const [currentSort, setCurrentSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Data Stats
  const filterStats = useMemo(() => {
    const brandCounts = countBy(RAW_CARS_DATA, "brand");
    const bodyCounts = countBy(RAW_CARS_DATA, "bodyType");
    const fuelCounts = countBy(RAW_CARS_DATA, "specifications.fuelType");
    const transCounts = countBy(RAW_CARS_DATA, "specifications.transmission");

    return {
      brands: Object.entries(brandCounts).map(([name, count]) => ({
        name,
        count,
      })),
      bodyTypes: Object.entries(bodyCounts).map(([name, count]) => ({
        name,
        count,
      })),
      fuelTypes: Object.entries(fuelCounts).map(([name, count]) => ({
        name,
        count,
      })),
      transmissions: Object.entries(transCounts).map(([name, count]) => ({
        name,
        count,
      })),
      years: Array.from(new Set(RAW_CARS_DATA.map((car) => car.year))).sort(
        (a, b) => a - b,
      ),
      maxPrice: RAW_CARS_DATA.length
        ? Math.max(...RAW_CARS_DATA.map((car) => car.pricing.price))
        : 600000,
    };
  }, []);

  // 2. Debounced Search (Fixed using useMemo instead of useCallback)
  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
      }, 300),
    [],
  );

  // 3. Checkbox toggler
  const handleFilterToggle = useCallback(
    (
      set: Set<string>,
      setter: React.Dispatch<React.SetStateAction<Set<string>>>,
      value: string,
    ) => {
      const newSet = new Set(set);
      if (newSet.has(value)) newSet.delete(value);
      else newSet.add(value);
      setter(newSet);
      setCurrentPage(1);
    },
    [],
  );

  // Filter Logic
  const filteredCars = useMemo(() => {
    return RAW_CARS_DATA.filter((car) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        car.title.toLowerCase().includes(lowerSearch) ||
        car.brand.toLowerCase().includes(lowerSearch) ||
        car.model.toLowerCase().includes(lowerSearch);

      const matchesBrand =
        selectedBrands.size === 0 || selectedBrands.has(car.brand);
      const matchesBody =
        selectedBodyTypes.size === 0 || selectedBodyTypes.has(car.bodyType);
      const matchesFuel =
        selectedFuelTypes.size === 0 ||
        selectedFuelTypes.has(car.specifications.fuelType);
      const matchesTrans =
        selectedTransmissions.size === 0 ||
        selectedTransmissions.has(car.specifications.transmission);
      const matchesPrice =
        car.pricing.price >= priceRange[0] &&
        car.pricing.price <= priceRange[1];
      const matchesYearFrom = yearFrom === null || car.year >= yearFrom;
      const matchesYearTo = yearTo === null || car.year <= yearTo;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesBody &&
        matchesFuel &&
        matchesTrans &&
        matchesPrice &&
        matchesYearFrom &&
        matchesYearTo
      );
    });
  }, [
    searchTerm,
    selectedBrands,
    selectedBodyTypes,
    selectedFuelTypes,
    selectedTransmissions,
    priceRange,
    yearFrom,
    yearTo,
  ]);

  // Sort Logic
  const sortedCars = useMemo(() => {
    const data = [...filteredCars];
    switch (currentSort) {
      case "price-low":
        data.sort((a, b) => a.pricing.price - b.pricing.price);
        break;
      case "price-high":
        data.sort((a, b) => b.pricing.price - a.pricing.price);
        break;
      case "newest":
        data.sort(
          (a, b) =>
            new Date(b.createdAt.$date).getTime() -
            new Date(a.createdAt.$date).getTime(),
        );
        break;
      case "mileage-low":
        data.sort(
          (a, b) => a.specifications.mileage - b.specifications.mileage,
        );
        break;
      default:
        break;
    }
    return data;
  }, [filteredCars, currentSort]);

  // Pagination Logic
  const totalItems = sortedCars.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedCars = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedCars, currentPage]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrands(new Set());
    setSelectedBodyTypes(new Set());
    setSelectedFuelTypes(new Set());
    setSelectedTransmissions(new Set());
    setPriceRange([10000, filterStats.maxPrice]);
    setYearFrom(null);
    setYearTo(null);
    setCurrentSort("newest");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-gray-200 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* 🏎️ HERO BANNER */}
      <div className="relative h-70 w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-linear-to-r from-black via-[#0f0505] to-black border-b border-red-950/30">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e50914_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800')] bg-cover bg-center opacity-25 mix-blend-luminosity mask-image-[linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0))]"></div>
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
            Explore our exclusive collection of premium cars.
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR FILTERS */}
          <div className="lg:col-span-1 flex flex-col gap-6 bg-[#0E1118] border border-gray-800/60 rounded-xl p-5 shadow-xl h-fit sticky top-4">
            {/* Search Input (Native & Fully Type-Safe) */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Search Inventory
              </h3>
              <div className="relative flex items-center w-full">
                <Search
                  size={18}
                  className="absolute left-3 text-gray-500 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search by name, brand..."
                  className="w-full h-10 pl-10 pr-3 bg-[#161B26] border border-gray-800 rounded-lg text-sm text-white placeholder:text-gray-500 hover:border-gray-700 focus:outline-none focus:border-red-600 transition-colors"
                  onChange={(e) => debouncedSetSearch(e.target.value)}
                />
              </div>
            </div>

            <hr className="border-gray-800/60" />

            <FilterSection
              title="Categories"
              data={filterStats.bodyTypes}
              selectedSet={selectedBodyTypes}
              onChange={(val) =>
                handleFilterToggle(selectedBodyTypes, setSelectedBodyTypes, val)
              }
            />
            <hr className="border-gray-800/60" />
            <FilterSection
              title="Brands"
              data={filterStats.brands}
              selectedSet={selectedBrands}
              onChange={(val) =>
                handleFilterToggle(selectedBrands, setSelectedBrands, val)
              }
            />
            <hr className="border-gray-800/60" />
            <FilterSection
              title="Fuel Type"
              data={filterStats.fuelTypes}
              selectedSet={selectedFuelTypes}
              onChange={(val) =>
                handleFilterToggle(selectedFuelTypes, setSelectedFuelTypes, val)
              }
            />
            <hr className="border-gray-800/60" />
            <FilterSection
              title="Transmission"
              data={filterStats.transmissions}
              selectedSet={selectedTransmissions}
              onChange={(val) =>
                handleFilterToggle(
                  selectedTransmissions,
                  setSelectedTransmissions,
                  val,
                )
              }
            />

            <hr className="border-gray-800/60" />

            {/* Price Range Slider (Native Standard Input) */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4">Price Range</h3>
              <input
                type="range"
                min={10000}
                max={filterStats.maxPrice}
                value={priceRange[1]}
                onChange={(e) => {
                  setPriceRange([priceRange[0], Number(e.target.value)]);
                  setCurrentPage(1);
                }}
                className="w-full accent-red-650 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400 font-mono">
                <span>{formatUSD(priceRange[0])}</span>
                <span>{formatUSD(priceRange[1])}</span>
              </div>
            </div>

            <hr className="border-gray-800/60" />

            {/* Year Dropdowns */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Year</h3>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={yearFrom || ""}
                  onChange={(e) => {
                    setYearFrom(e.target.value ? Number(e.target.value) : null);
                    setCurrentPage(1);
                  }}
                  className="w-full h-9 bg-[#161B26] border border-gray-800 rounded-lg px-2 text-xs text-gray-300 focus:outline-none focus:border-red-600 appearance-none"
                >
                  <option value="">From</option>
                  {filterStats.years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <select
                  value={yearTo || ""}
                  onChange={(e) => {
                    setYearTo(e.target.value ? Number(e.target.value) : null);
                    setCurrentPage(1);
                  }}
                  className="w-full h-9 bg-[#161B26] border border-gray-800 rounded-lg px-2 text-xs text-gray-300 focus:outline-none focus:border-red-600 appearance-none"
                >
                  <option value="">To</option>
                  {filterStats.years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr className="border-gray-800/60" />

            <Button
              onClick={resetFilters}
              className="w-full border border-gray-800 hover:bg-gray-800 text-gray-300 font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} /> Reset Filters
            </Button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#0E1118] border border-gray-800/60 rounded-xl px-5 py-3.5 shadow-md">
              <p className="text-sm text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold font-mono">
                  {totalItems > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}–
                  {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)}
                </span>{" "}
                of{" "}
                <span className="text-white font-semibold font-mono">
                  {totalItems}
                </span>{" "}
                results
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <select
                  value={currentSort}
                  onChange={(e) => {
                    setCurrentSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-48 h-9 bg-[#161B26] border border-gray-800 rounded-lg px-3 text-xs text-gray-300 focus:outline-none focus:border-red-600 appearance-none"
                >
                  <option value="newest">Sort by: Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="mileage-low">Mileage: Low to High</option>
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

            {totalItems === 0 && (
              <Card className="bg-[#0E1118] border border-gray-800/80 p-10 flex flex-col items-center justify-center text-center">
                <Search size={48} className="text-gray-700 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  No Cars Match Your Filters
                </h3>
                <Button
                  onClick={resetFilters}
                  className="mt-6 bg-red-600 text-white px-6 rounded-lg"
                >
                  Clear All Filters
                </Button>
              </Card>
            )}

            {/* Cards Grid */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {paginatedCars.map((car) => (
                <Card
                  key={car._id.$oid}
                  className={`bg-[#0E1118] border border-gray-800/80 hover:border-red-600/50 shadow-xl transition-all duration-300 group flex flex-col ${viewMode === "list" ? "sm:flex-row sm:h-60 w-full" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-1/3 h-48 sm:h-full" : "h-48 w-full"}`}
                  >
                    <Image
                      src={car.images.thumbnail}
                      alt={car.title}
                      fill
                      sizes="100wv"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0E1118]/90 via-transparent to-transparent"></div>

                    <button className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 hover:bg-red-600/20 transition-all z-10">
                      <Heart
                        size={16}
                        className={
                          car.statistics.favorites > 20
                            ? "fill-red-500 text-red-500"
                            : "text-white hover:text-red-500"
                        }
                      />
                    </button>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-gray-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      <MapPin size={12} className="text-red-500" />
                      {car.location}
                    </div>
                  </div>

                  <div
                    className={`p-4 flex flex-col justify-between flex-1 ${viewMode === "list" ? "sm:w-2/3" : ""}`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold">
                          {car.brand}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-800/50">
                          <Star size={12} className="fill-amber-400" />
                          {car.rating.toFixed(1)}
                          <span className="text-gray-500 font-normal">
                            ({car.reviews})
                          </span>
                        </div>
                      </div>

                      <h2 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1 mb-1">
                        {car.title}
                      </h2>
                      <p className="text-xs text-gray-400 font-medium mb-3 capitalize">
                        {car.year} <span className="text-gray-600 mx-1">•</span>{" "}
                        {car.bodyType}{" "}
                        <span className="text-gray-600 mx-1">•</span>{" "}
                        {car.specifications.engine.capacity}{" "}
                        {car.specifications.engine.type}
                      </p>

                      <div className="flex items-baseline gap-2 mb-4">
                        <div className="text-2xl font-bold font-mono text-red-500">
                          {formatUSD(car.pricing.price)}
                        </div>
                        {car.pricing.discountPrice > 0 && (
                          <div className="text-sm text-gray-600 line-through font-mono">
                            {formatUSD(car.pricing.discountPrice)}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-800/60 pt-3 capitalize">
                        <div className="flex items-center gap-1.5">
                          <Gauge size={14} className="text-gray-500" />
                          <span>{car.specifications.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Fuel size={14} className="text-gray-500" />
                          <span>{car.specifications.fuelType}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono">
                          <Star size={14} className="text-gray-500" />
                          <span>
                            {car.specifications.mileage.toLocaleString()} km
                          </span>
                        </div>
                      </div>

                      <Button className="w-full border border-gray-800 group-hover:border-red-600 group-hover:bg-red-600 text-gray-300 group-hover:text-white font-semibold py-2 rounded-lg transition-all duration-300 text-center text-sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 border-t border-gray-800/60 pt-6">
                <div className="flex gap-1.5 bg-[#0E1118] border border-gray-800 p-1.5 rounded-xl shadow-lg font-mono text-sm">
                  <Button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    isDisabled={currentPage === 1}
                    className="min-w-10 h-10 p-0 text-gray-400 border-gray-800 hover:text-white hover:bg-gray-800"
                  >
                    &lt;
                  </Button>

                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`min-w-10 h-10 p-0 font-bold rounded-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-gray-400 border-gray-800 hover:text-white hover:bg-gray-800"}`}
                    >
                      {i + 1}
                    </Button>
                  ))}

                  <Button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    isDisabled={currentPage === totalPages}
                    className="min-w-10 h-10 p-0 text-gray-400 border-gray-800 hover:text-white hover:bg-gray-800"
                  >
                    &gt;
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
