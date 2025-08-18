"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  via-white to-pink-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-8 flex flex-col items-center w-full max-w-md">
        {/* รูปโปรไฟล์ */}
        <div className="relative mb-4">
          <img
            src={avatar || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-red-400 shadow-lg object-cover"
          />
          <label className="absolute bottom-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold cursor-pointer shadow hover:from-red-600 hover:to-pink-600 transition">
            เปลี่ยนรูป
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
        </div>

        {/* ชื่อสมาชิก */}
        <h1 className="text-2xl font-extrabold text-red-600 mb-2">NAME</h1>
        <span className="text-gray-500 mb-6">สมาชิกระดับ Silver</span>

        {/* ปุ่มแก้ไข/ออกจากระบบ */}
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition">
            แก้ไขโปรไฟล์
          </button>
          <button className="px-6 py-2 bg-gray-200 text-red-600 font-bold rounded-lg shadow hover:bg-red-100 transition">
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
}
