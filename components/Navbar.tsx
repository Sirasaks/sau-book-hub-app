import Link from "next/link";
import React from "react";
import { BookOpen, User, LogIn, UserPlus, Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-600 via-pink-500 to-red-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-white drop-shadow tracking-wide hover:scale-105 transition-transform"
          >
            <BookOpen className="w-7 h-7 text-white" />
            SAU BOOK HUB
          </Link>

          {/* Menu */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/90 text-red-600 font-medium hover:bg-red-100 hover:text-red-700 transition"
            >
              <Home className="w-4 h-4" /> หน้าหลัก
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/90 text-red-600 font-medium hover:bg-red-100 hover:text-red-700 transition"
            >
              <LogIn className="w-4 h-4" /> เข้าสู่ระบบ
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/90 text-red-600 font-medium hover:bg-red-100 hover:text-red-700 transition"
            >
              <UserPlus className="w-4 h-4" /> ลงทะเบียน
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/90 text-red-600 font-medium hover:bg-red-100 hover:text-red-700 transition"
            >
              <User className="w-4 h-4" /> โปรไฟล์
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="sm:hidden p-2 rounded-md bg-white/20 text-white hover:bg-white/30">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
