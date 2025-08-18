"use client";

import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/member");
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-16 bg-white rounded-2xl shadow-lg border border-red-100">
      <h2 className="text-3xl font-extrabold text-center text-red-600 mb-6 tracking-wide">
        เข้าสู่ระบบ
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
          เข้าสู่ระบบ
        </button>
      </form>
      <div className="mt-6 text-center text-gray-500">
        ยังไม่มีบัญชี?{" "}
        <span
          className="text-red-500 font-semibold cursor-pointer hover:underline"
          onClick={() => router.push("/register")}
        >
          สมัครสมาชิก
        </span>
      </div>
    </div>
    
  );
  <Footer />

}