import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-600 via-pink-500 to-red-400 shadow-lg">
      <div className="container flex flex-col justify-between py-4 sm:flex-row sm:items-center gap-2 px-6 mx-auto">
        <Link href="/" className="text-center text-3xl font-extrabold text-white drop-shadow-lg tracking-wide hover:scale-105 transition">
          SAU BOOK HUB
        </Link>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <Link href="/" className="px-4 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition">หน้าหลัก</Link>
          <Link href="/login" className="px-4 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition">เข้าสู่ระบบ</Link>
          <Link href="/register" className="px-4 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition">ลงทะเบียน</Link>
          <Link href="/profile" className="px-4 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition">โปรไฟล์</Link>
        </div>
      </div>
    </nav>
  );
}