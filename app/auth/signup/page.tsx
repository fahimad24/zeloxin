"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Checkbox,
  Button,
} from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa6";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms & Conditions");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    data["agreeTerms"] = agreeTerms ? "true" : "false";

    alert(JSON.stringify(data, null, 2));
  };

  return (
    <main className="relative min-h-screen w-full bg-background flex items-center justify-start overflow-hidden font-sans">
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <Image
          src="/images/signIn-bg.jpg"
          alt="Supercar Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center">
        <div className="w-full max-w-115 bg-card/55 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/80 flex flex-col justify-between">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-red-600 font-extrabold block mb-2">
              Create Account
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Sign Up
            </h1>
            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed mb-6">
              Create an account to get started with Zelonix Motors.
            </p>

            <Form className="space-y-4" onSubmit={onSubmit}>
              {/* Full Name Field */}
              <TextField
                isRequired
                name="fullName"
                type="text"
                className="flex flex-col gap-1.5"
                validate={(value) => {
                  if (value.length < 2) {
                    return "Name must be at least 2 characters";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Full Name
                </Label>
                <div className="relative w-full">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiUser className="w-4 h-4" />
                  </span>
                  <Input
                    placeholder="Enter your full name"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg pl-11 pr-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              {/* Email Field */}
              <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1.5"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Email Address
                </Label>
                <div className="relative w-full">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiMail className="w-4 h-4" />
                  </span>
                  <Input
                    placeholder="Enter your email"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg pl-11 pr-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition duration-200"
                  />
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              {/* Password Field */}
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                className="flex flex-col gap-1.5"
                onChange={setPasswordValue}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Password
                </Label>
                <div className="relative w-full">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiLock className="w-4 h-4" />
                  </span>
                  <Input
                    placeholder="Create a password"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg pl-11 pr-11 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              {/* Confirm Password Field */}
              <TextField
                isRequired
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="flex flex-col gap-1.5"
                validate={(value) => {
                  if (value !== passwordValue) {
                    return "Passwords do not match";
                  }
                  return null;
                }}
              >
                <Label className="text-xs font-semibold text-gray-300 tracking-wide">
                  Confirm Password
                </Label>
                <div className="relative w-full">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <FiLock className="w-4 h-4" />
                  </span>
                  <Input
                    placeholder="Confirm your password"
                    className="w-full bg-[#080c14]/90 border border-gray-800/80 rounded-lg pl-11 pr-11 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center justify-between pt-1">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  isSelected={agreeTerms}
                  onChange={setAgreeTerms}
                >
                  <Checkbox.Content>
                    <Checkbox.Control className="border-gray-800 data-[selected=true]:bg-red-600 data-[selected=true]:border-red-600">
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <span className="text-xs font-medium text-gray-400 select-none">
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-red-600 font-bold hover:text-red-500 transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </span>
                  </Checkbox.Content>
                </Checkbox>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold text-xs sm:text-sm h-12 rounded-lg tracking-wide shadow-lg shadow-red-950/20 mt-2"
              >
                Create Account
              </Button>
            </Form>

            <div className="flex items-center my-5">
              <div className="grow border-t border-gray-800/60" />
              <span className="px-3 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                OR
              </span>
              <div className="grow border-t border-gray-800/60" />
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              <Button
                isIconOnly
                variant="outline"
                className="w-12 h-12 rounded-lg bg-[#080c14]/80 border-gray-800/70 text-gray-400 hover:text-white hover:border-gray-700 min-w-0"
              >
                <FaGoogle className="w-4 h-4" />
              </Button>

              <Button
                isIconOnly
                variant="outline"
                className="w-12 h-12 rounded-lg bg-[#080c14]/80 border-gray-800/70 text-gray-400 hover:text-white hover:border-gray-700 min-w-0"
              >
                <FaApple className="w-4 h-4" />
              </Button>

              <Button
                isIconOnly
                variant="outline"
                className="w-12 h-12 rounded-lg bg-[#080c14]/80 border-gray-800/70 text-gray-400 hover:text-white hover:border-gray-700 min-w-0"
              >
                <FaFacebookF className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-center text-xs sm:text-[13px] text-gray-400 mt-6 font-medium">
            {"Already have an account?"}{" "}
            <Link
              href="/auth/login"
              className="text-red-600 font-bold hover:text-red-500 transition-colors ml-0.5 text-xs sm:text-[13px]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
