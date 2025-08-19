"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-red-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-500 to-red-400 opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SAU BOOK HUB
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-pink-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            โลกของนักอ่านที่คุณจะได้ค้นพบ แบ่งปัน และเชื่อมต่อกับเพื่อนใหม่
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-red-100 transition"
            >
              สมัครสมาชิกฟรี
            </Link>
            <Link
              href="/member"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition"
            >
              สำรวจหนังสือ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
          📚 หนังสือยอดนิยม
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              title: "คำสาปแห่งป่าต้องห้าม",
              desc: "ลุ้นระทึกทุกบท บรรยายเหมือนจริงจนขนลุก",
              img: "/file.svg",
            },
            {
              title: "ดวงดาวและความฝัน",
              desc: "แฟนตาซีสุดตราตรึง พาคุณสู่ห้วงจักรวาลแห่งจินตนาการ",
              img: "/globe.svg",
            },
            {
              title: "เส้นทางสายหมอก",
              desc: "นิยายอบอุ่นหัวใจ สร้างแรงบันดาลใจให้ใช้ชีวิต",
              img: "/window.svg",
            },
          ].map((book, i) => (
            <motion.div
              key={book.title}
              className="bg-white p-8 rounded-3xl shadow-lg border border-red-100 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <Image
                src={book.img}
                alt={book.title}
                width={90}
                height={90}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-red-600 text-lg">{book.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{book.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white/70 border-t border-b border-red-100">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
          🔖 หมวดหมู่ที่กำลังมาแรง
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            "นิยายรัก",
            "แฟนตาซี",
            "สืบสวนสอบสวน",
            "วิทยาศาสตร์",
            "พัฒนาตนเอง",
            "จิตวิทยา",
            "ธุรกิจ",
            "ศิลปะ & วัฒนธรรม",
            "การท่องเที่ยว",
            "หนังสือเด็ก",
          ].map((cat) => (
            <motion.span
              key={cat}
              className="px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-medium rounded-full shadow hover:scale-110 transition"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              {cat}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white/60">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
          ⭐ รีวิวจากนักอ่าน
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {[
            {
              book: "คำสาปแห่งป่าต้องห้าม",
              user: "คุณฟ้าใส",
              text: "ตื่นเต้นทุกตอน อ่านแล้ววางไม่ลงจริง ๆ นักเขียนเก่งมาก",
            },
            {
              book: "ดวงดาวและความฝัน",
              user: "Dreamer",
              text: "เนื้อเรื่องอบอวลด้วยความอบอุ่น สร้างแรงบันดาลใจ",
            },
            {
              book: "เส้นทางสายหมอก",
              user: "นักเดินทาง",
              text: "อ่านแล้วอยากออกเดินทางทันที ภาษาสละสลวยสุด ๆ",
            },
          ].map((rev, i) => (
            <motion.div
              key={rev.book}
              className="bg-white p-8 rounded-2xl shadow border border-pink-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <h3 className="font-bold text-red-600">📖 {rev.book}</h3>
              <p className="text-pink-600 text-sm mt-1">{rev.user}</p>
              <p className="text-gray-700 text-sm mt-3">{rev.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-24 text-center bg-gradient-to-r from-red-600 via-pink-500 to-red-400 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold mb-6 drop-shadow">
          ร่วมเป็นส่วนหนึ่งของชุมชนคนรักการอ่านวันนี้
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-pink-100 mb-8">
          สร้างโปรไฟล์ แชร์รีวิวหนังสือของคุณ และค้นหามิตรภาพจากนักอ่านทั่วประเทศ
        </p>
        <Link href="/register">
          <motion.button
            className="px-10 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-red-100 transition text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            สมัครเลย!
          </motion.button>
        </Link>
      </motion.section>

  
    </div>
  );
}
