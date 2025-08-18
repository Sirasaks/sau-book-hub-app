"use client";

import { useState } from "react";

export default function MemberDashboard() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState<string[]>([]);

  const handleAddReview = () => {
    if (review.trim() !== "") {
      setReviews([review, ...reviews]);
      setReview("");
    }
  };

  return (
    <div className=" p-6 space-y-12">
      <h1 className="px-10 text-3xl font-bold mb-6">ยินดีต้อนรับสู่ SAU BOOK HUB MEMBER </h1>

      {/* แนะนำหนังสือ */}
      <section>
        <h2 className="px-10 text-2xl font-semibold mb-4"> 📚 ชั้นหนังสือ</h2>
        <div className="px-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded shadow">📖 เขมจิราต้องรอด</div>
          <div className="p-4 border rounded shadow">📖 ดาวดารดาษ</div>
          <div className="p-4 border rounded shadow">📖 เมษาลาตะวัน</div>
        </div>
      </section>

      {/* หมวดหมู่ */}
      <section>
      <h2 className="px-10 text-2xl font-semibold mb-4">สำรวจตามหมวดหมู่</h2>
      <div className="px-10 flex flex-wrap gap-3">
        <span className="px-4 py-2 bg-gray-100 rounded-full">นิยายรัก</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">แฟนตาซี</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">สืบสวน</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">วิทยาศาสตร์</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">พัฒนาตนเอง</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">จิตวิทยา</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">ธุรกิจ</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">ประวัติศาสตร์</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">ศิลปะ</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">การท่องเที่ยว</span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">หนังสือเด็ก</span>
      </div>
      </section>

      {/* รีวิวหนังสือ */}
      <section>
      <h2 className="px-10 text-2xl font-semibold mb-4">⭐ รีวิวล่าสุด  </h2>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* รีวิว 1 */}
      <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">📖 เขมจิราต้องรอด</h3>
      <p className="text-gray-600 mb-2">มัมหมีน้องเขม</p>
      <p className="text-gray-800 text-sm">
        เขมจิราสนุกมาก มีเนื้อเรื่องลุ้นระทึกและตัวละครน่ารัก ต้องมีแล้วนะทุกคน เรื่องนี้นักเขียนตั้งใจสุดๆ
      </p>
      </div>

      {/* รีวิว 2 */}
      <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">📖 เมษาลาตะวัน</h3>
      <p className="text-gray-600 mb-2">แฟนสาวคุณเจค</p>
      <p className="text-gray-800 text-sm">
        อ่านแล้วอินมาก เนื้อหาเศร้าใจสุดๆ ภาษาสวยมาก
      </p>
      </div>

      {/* รีวิว 3 */}
      <div className="p-4 border rounded shadow">
      <h3 className="font-bold mb-2">📖 ดาวดารดาษ</h3>
      <p className="text-gray-600 mb-2">ไอ้หนุ่มหัวหงอก</p>
      <p className="text-gray-800 text-sm">
        เนื้อเรื่องชวนหลอนน่าติดตาม ขนลุกทุกครั้งที่อ่าน พระเอกเก่งมาก น
      </p>
      </div>

      {/* รีวิวหนังสือ */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">📝 เขียนรีวิวหนังสือ</h2>
        <div className="flex flex-col gap-2">
          <textarea
            className="border p-2 rounded w-full"
            rows={5}
            placeholder="เขียนรีวิวของคุณ..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button
            className="self-start px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-blue-700"
            onClick={handleAddReview}
          >
            โพสต์รีวิว
          </button>
        </div>

        {/* แสดงรีวิว */}
        <div className="mt-4 space-y-3">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-3 border rounded shadow bg-gray-50">
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* ห้องแชท */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">💬 ห้องแชท</h2>
        <div className="border rounded p-4 h-64 overflow-y-auto bg-gray-50">
          <p>ตุ๊บตั๊บ: ใครมีนิยายเกี่ยวกับเวทมนต์แนะนำบ้างคะ!</p>
          <p>เจลิ: เรามีนะคะ </p>
          <p>คุณ: อ่านเขมจิราจบแล้ว สนุกมากค่ะ สมชื่อเลย!</p>
        </div>
        <input
          type="text"
          placeholder="พิมพ์ข้อความ..."
          className="w-full mt-2 border p-2 rounded"
        />
      </section>
      </div>
      </section>
      </div>
  );
}
