"use client";

import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <>
      <div className="max-w-md mx-auto p-8 mt-16 bg-white rounded-2xl shadow-lg border border-red-100">
        <h2 className="text-3xl font-extrabold text-center text-red-600 mb-6 tracking-wide">
          สมัครสมาชิก
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            className="w-full p-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="email"
            placeholder="อีเมล"
            className="w-full p-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="w-full p-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
          >
            สมัครสมาชิก
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center">
          <span className="text-gray-500 mb-2 font-medium">มีบัญชีอยู่แล้ว?</span>
          <button
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
            onClick={() => router.push("/login")}
            type="button"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
      
    </>
  );
}
