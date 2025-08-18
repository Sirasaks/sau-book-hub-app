import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>
        {/* Popular Books */}
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
            หนังสือยอดนิยมประจำเดือน
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white border-2 border-red-100 rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="/file.svg" alt="เขมจิราต้องรอด" className="w-20 h-20 mb-2" />
              <h3 className="font-semibold text-red-600 mb-1">เขมจิราต้องรอด</h3>
              <p className="text-gray-500 text-sm">ลุ้นระทึก น่าติดตาม</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="/globe.svg" alt="ดาวดารดาษ" className="w-20 h-20 mb-2" />
              <h3 className="font-semibold text-red-600 mb-1">ดาวดารดาษ</h3>
              <p className="text-gray-500 text-sm">หลอน ขนลุกทุกตอน</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img src="/window.svg" alt="เมษาลาตะวัน" className="w-20 h-20 mb-2" />
              <h3 className="font-semibold text-red-600 mb-1">เมษาลาตะวัน</h3>
              <p className="text-gray-500 text-sm">เศร้าใจ ภาษาสวย</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
            หมวดหมู่ยอดนิยม
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "นิยายรัก",
              "แฟนตาซี",
              "สืบสวน",
              "วิทยาศาสตร์",
              "พัฒนาตนเอง",
              "จิตวิทยา",
              "ธุรกิจ",
              "ประวัติศาสตร์",
              "ศิลปะ",
              "การท่องเที่ยว",
              "หนังสือเด็ก",
            ].map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full font-medium shadow hover:bg-red-200 transition border border-red-200"
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Latest Reviews */}
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
            ⭐ รีวิวล่าสุดจากสมาชิก
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80 border-2 border-red-100">
              <h3 className="font-bold mb-2 text-red-600">📖 เขมจิราต้องรอด</h3>
              <p className="text-pink-600 mb-2">มัมหมีน้องเขม</p>
              <p className="text-gray-700 text-sm">
                เขมจิราสนุกมาก เนื้อเรื่องลุ้นระทึกและตัวละครน่ารัก ต้องมีแล้วนะทุกคน!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80 border-2 border-red-100">
              <h3 className="font-bold mb-2 text-red-600">📖 เมษาลาตะวัน</h3>
              <p className="text-pink-600 mb-2">แฟนสาวคุณเจค</p>
              <p className="text-gray-700 text-sm">
                อ่านแล้วอินมาก เนื้อหาเศร้าใจสุดๆ ภาษาสวยมาก
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg w-80 border-2 border-red-100">
              <h3 className="font-bold mb-2 text-red-600">📖 ดาวดารดาษ</h3>
              <p className="text-pink-600 mb-2">ไอ้หนุ่มหัวหงอก</p>
              <p className="text-gray-700 text-sm">
                เนื้อเรื่องชวนหลอนน่าติดตาม ขนลุกทุกครั้งที่อ่าน พระเอกเก่งมาก
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            พร้อมจะเป็นส่วนหนึ่งของชุมชนคนรักการอ่านแล้วหรือยัง?
          </h2>
          <Link href="/register">
            <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-xl hover:from-red-600 hover:to-pink-600 transition font-bold text-xl">
              สมัครสมาชิกเลย!
            </button>
          </Link>
        </section>
        
      </div>
      
    </>
    
  );
  
}