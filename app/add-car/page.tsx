"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Checkbox,
  Button,
} from "@heroui/react";
import {
  FiChevronDown,
  FiUploadCloud,
  FiCpu,
  FiDollarSign,
  FiZap,
  FiCheckSquare,
  FiFileText,
  FiImage,
  FiSend,
  FiX,
} from "react-icons/fi";

export default function AddNewCarPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [features, setFeatures] = useState<Record<string, boolean>>({
    ABS: false,
    "Air Conditioning": false,
    "Alloy Wheels": false,
    Bluetooth: false,
    "Cruise Control": false,
    "Electric Seats": false,
    "Keyless Entry": false,
    "LED Lights": false,
    "Parking Sensors": false,
    "Rear Camera": false,
    Sunroof: false,
    "Traction Control": false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = (formData.get("carTitle") as string) || "";
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const brand = (formData.get("brand") as string) || "";
    const model = (formData.get("model") as string) || "";
    const year = Number(formData.get("year")) || new Date().getFullYear();
    const bodyType = (formData.get("bodyType") as string) || "";
    const condition = (formData.get("condition") as string) || "";

    const price = Number(formData.get("price")) || 0;
    const discountPriceVal = formData.get("discountPrice")
      ? Number(formData.get("discountPrice"))
      : 0;
    const availability = (formData.get("availability") as string) || "";

    const mileage = Number(formData.get("mileage")) || 0;
    const fuelType = (formData.get("fuelType") as string) || "";
    const transmission = (formData.get("transmission") as string) || "";
    const driveType = (formData.get("driveType") as string) || "";
    const doors = Number(formData.get("doors")) || 0;
    const seats = Number(formData.get("seats")) || 0;

    const engineType = (formData.get("engineType") as string) || "";
    const engineCapacity = (formData.get("engineCapacity") as string) || "";
    const horsepower = Number(formData.get("horsepower")) || 0;
    const torque = (formData.get("torque") as string) || "";
    const topSpeed = (formData.get("topSpeed") as string) || "";
    const acceleration = (formData.get("zeroToHundred") as string) || "";

    const selectedFeatures = Object.keys(features).filter(
      (key) => features[key],
    );

    const otherFeaturesRaw = (formData.get("otherFeatures") as string) || "";
    const otherFeatures = otherFeaturesRaw
      ? otherFeaturesRaw
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean)
      : [];

    const imgNames = images.map((file) => file.name);

    const mongoDbPayload = {
      title,
      slug,
      brand,
      model,
      year,
      bodyType,
      condition,
      pricing: {
        price,
        discountPrice: discountPriceVal,
        currency: "USD",
        availability,
      },
      specifications: {
        mileage,
        fuelType,
        transmission,
        driveType,
        doors,
        seats,
        engine: {
          type: engineType,
          capacity: engineCapacity,
          horsepower,
          torque,
          topSpeed,
          acceleration,
        },
      },
      features: selectedFeatures,
      otherFeatures,
      description,
      images: {
        thumbnail: imgNames[0] || "",
        cover: imgNames[0] || "",
        gallery: imgNames,
      },
      seller: {
        userId: "",
        name: "",
        email: "",
        phone: "",
      },
      seo: {
        metaTitle: `${title} | For Sale`,
        metaDescription: description.substring(0, 150),
        keywords: [brand.toLowerCase(), model.toLowerCase(), "supercar"],
      },
      statistics: {
        views: 0,
        favorites: 0,
        inquiries: 0,
      },
      status: "pending",
      isFeatured: false,
      isVerified: false,
      isSold: false,
      createdBy: "",
      updatedBy: "",
      createdAt: {
        $date: new Date().toISOString(),
      },
      updatedAt: {
        $date: new Date().toISOString(),
      },
    };

    console.log("MongoDB Payload:", JSON.stringify(mongoDbPayload, null, 2));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: checked,
    }));
  };

  const processFiles = (fileList: FileList) => {
    const validFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/"),
    );
    setImages((prev) => [...prev, ...validFiles].slice(0, 10));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <main className="min-h-screen w-full bg-background text-text font-sans pb-16">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative w-full h-65 sm:h-65 rounded-2xl overflow-hidden border border-border shadow-2xl mb-10 select-none">
          <Image
            src="/images/banner-4.png"
            alt="Supercar Header Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-linear-to-r from-[#05070c] via-[#05070c]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-[#05070c]/90 via-transparent to-black/30 z-10" /> */}

          <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 flex flex-col justify-end h-full">
            <nav className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 text-muted mb-10">
              <span>Inventory</span>
              <span className="text-muted">/</span>
              <span className="text-primary">Add New Car</span>
            </nav>
            <h1 className="text-2xl sm:text-5xl font-bold text-white tracking-tight mb-2">
              Add New Car
            </h1>
            <p className="text-muted text-xs sm:text-sm max-w-xl leading-relaxed">
              Fill the details below to add a new car to your inventory.
            </p>
          </div>
        </div>

        <Form className="space-y-8" onSubmit={onSubmit}>
          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiCpu className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Basic Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TextField
                isRequired
                name="carTitle"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Car Title <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. Lamborghini Aventador SVJ"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              <TextField name="brand" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Brand <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="brand"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Brand
                    </option>
                    <option value="lamborghini">Lamborghini</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="porsche">Porsche</option>
                    <option value="mclaren">McLaren</option>
                    <option value="aston_martin">Aston Martin</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField
                isRequired
                name="model"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Model <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. Aventador SVJ"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              <TextField name="year" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Year <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="year"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Year
                    </option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="bodyType" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Body Type <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="bodyType"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Body Type
                    </option>
                    <option value="coupe">Coupe</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="convertible">Convertible</option>
                    <option value="hypercar">Hypercar</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="condition" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Condition <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="condition"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Condition
                    </option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="pre-owned">Certified Pre-Owned</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>
            </div>
          </div>

          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiDollarSign className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Pricing & Availability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TextField
                isRequired
                name="price"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Price <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. $450,000"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              <TextField name="discountPrice" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Discount Price
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. $425,000 (optional)"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField name="availability" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Availability <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="availability"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Availability
                    </option>
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                    <option value="reserved">Reserved</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField
                isRequired
                name="mileage"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Mileage (km) <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 12,500"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              <TextField name="fuelType" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Fuel Type <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="fuelType"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Fuel Type
                    </option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="transmission" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Transmission <span className="text-primary">*</span>
                </Label>
                <div className="relative w-full">
                  <select
                    required
                    name="transmission"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Transmission
                    </option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="dual_clutch">Dual Clutch</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="driveType" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Drive Type
                </Label>
                <div className="relative w-full">
                  <select
                    name="driveType"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Drive Type
                    </option>
                    <option value="awd">AWD</option>
                    <option value="rwd">RWD</option>
                    <option value="fwd">FWD</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="doors" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Doors
                </Label>
                <div className="relative w-full">
                  <select
                    name="doors"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Doors
                    </option>
                    <option value="2">2 Doors</option>
                    <option value="4">4 Doors</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>

              <TextField name="seats" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Seats
                </Label>
                <div className="relative w-full">
                  <select
                    name="seats"
                    defaultValue=""
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-muted focus:text-text focus:outline-none focus:border-primary/60 appearance-none transition duration-200"
                  >
                    <option value="" disabled hidden>
                      Select Seats
                    </option>
                    <option value="2">2 Seats</option>
                    <option value="4">4 Seats</option>
                    <option value="5">5 Seats</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </TextField>
            </div>
          </div>

          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiZap className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Engine & Performance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TextField name="engineType" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Engine Type
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. V12"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField
                name="engineCapacity"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Engine Capacity
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 6.5L"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField name="horsepower" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Horsepower
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 770 hp"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField name="torque" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Torque
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 720 Nm"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField name="topSpeed" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Top Speed
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 350 km/h"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>

              <TextField name="zeroToHundred" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  0-100 km/h
                </Label>
                <div className="relative w-full">
                  <Input
                    placeholder="e.g. 2.8 sec"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                  />
                </div>
              </TextField>
            </div>
          </div>

          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiCheckSquare className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Car Features
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Object.keys(features).map((feature) => (
                <div
                  key={feature}
                  className="flex items-center border border-gray-800/60 bg-[#080c14]/40 px-4 py-3 rounded-xl hover:border-gray-700/80 transition duration-200 select-none"
                >
                  <Checkbox
                    id={feature}
                    isSelected={features[feature]}
                    onChange={(checked) =>
                      handleFeatureChange(feature, checked)
                    }
                  >
                    <Checkbox.Content>
                      <Checkbox.Control className="border-gray-800 data-[selected=true]:bg-primary data-[selected=true]:border-primary">
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <span className="text-xs font-semibold text-gray-300 ml-2">
                        {feature}
                      </span>
                    </Checkbox.Content>
                  </Checkbox>
                </div>
              ))}
            </div>

            <TextField
              name="otherFeatures"
              className="flex flex-col gap-1.5 pt-2"
            >
              <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                Other Features
              </Label>
              <div className="relative w-full">
                <Input
                  placeholder="Add any additional features..."
                  className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg px-4 py-3 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 transition duration-200"
                />
              </div>
            </TextField>
          </div>

          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiFileText className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Description
              </h2>
            </div>

            <div className="relative flex flex-col gap-2">
              <textarea
                name="description"
                maxLength={1000}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a detailed description about the car..."
                className="w-full h-40 bg-[#080c14]/90 border border-gray-800/80 rounded-xl p-4 text-xs sm:text-sm text-text placeholder-muted focus:outline-none focus:border-primary/60 resize-none transition duration-200"
              />
              <span className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-bold text-muted">
                {description.length} / 1000
              </span>
            </div>
          </div>

          <div className="bg-[#0b0f19]/40 border border-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 shadow-inner">
                <FiImage className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-extrabold text-white tracking-wide">
                Images
              </h2>
            </div>

            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-800/80 hover:border-red-600/40 rounded-2xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer bg-[#080c14]/30 hover:bg-[#080c14]/60 transition duration-200"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
              />
              <div className="w-12 h-12 rounded-xl bg-gray-900/80 flex items-center justify-center text-gray-500 border border-gray-800/40">
                <FiUploadCloud className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-semibold text-gray-300">
                  Drag & drop images here or{" "}
                  <span className="text-red-600 font-bold hover:underline">
                    click to browse
                  </span>
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">
                  Upload up to 10 images (JPG, PNG, WebP)
                </p>
              </div>
            </div>

            {images?.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
                {images.map((file, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 group bg-gray-950"
                  >
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      fill
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="absolute top-2 right-2 bg-black/70 hover:bg-red-600 text-white p-1 rounded-lg text-xs transition duration-200"
                    >
                      <FiX className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-4">
            <Button
              type="button"
              className="border border-gray-800 hover:border-gray-700 bg-transparent text-muted hover:text-white px-8 h-12 rounded-xl text-xs sm:text-sm font-extrabold transition duration-200"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-[#dc2626] hover:bg-red-700 text-white px-8 h-12 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 tracking-wide shadow-lg shadow-red-950/30 transition duration-200"
            >
              <FiSend className="w-4 h-4" />
              Publish Car
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
}
