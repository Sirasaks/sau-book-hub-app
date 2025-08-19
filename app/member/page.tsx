"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Star, StarHalf, MessageSquareMore, Search, Send, Filter, BookMarked } from "lucide-react";

// -----------------------------
// Helper UI bits
// -----------------------------
function Section({ title, subtitle, right, children }: { title: string; subtitle?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-700">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}

function Chip({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition shadow-sm hover:shadow ${
        active
          ? "bg-rose-600 text-white border-rose-600"
          : "bg-white text-rose-700 border-rose-200 hover:bg-rose-50"
      }`}
    >
      {children}
    </button>
  );
}

function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1" aria-label={`rating ${value} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {half && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
}

// -----------------------------
// Data
// -----------------------------
const ALL_CATEGORIES = [
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
] as const;

const BOOKS: Array<{
  id: string;
  title: string;
  desc: string;
  cover: string;
  categories: string[];
  rating: number;
}> = [
  {
    id: "khemjira",
    title: "เขมจิราต้องรอด",
    desc: "ลุ้นระทึก ตัวละครน่ารัก",
    cover: "/file.svg",
    categories: ["สืบสวน", "นิยายรัก"],
    rating: 4.7,
  },
  {
    id: "starfield",
    title: "ดาวดารดาษ",
    desc: "ชวนหลอน ขนลุกทุกตอน",
    cover: "/globe.svg",
    categories: ["แฟนตาซี"],
    rating: 4.4,
  },
  {
    id: "april",
    title: "เมษาลาตะวัน",
    desc: "เศร้าใจ ภาษาสวย",
    cover: "/window.svg",
    categories: ["นิยายรัก"],
    rating: 4.6,
  },
];

// -----------------------------
// Main Page
// -----------------------------
export default function MemberDashboard() {
  // Reviews state (persist to localStorage)
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedBook, setSelectedBook] = useState(BOOKS[0].id);
  const [reviews, setReviews] = useState<Array<{ id: string; bookId: string; text: string; rating: number; user: string; at: string }>>([]);

  // Category filter/search
  const [activeCat, setActiveCat] = useState<string>("ทั้งหมด");
  const [q, setQ] = useState("");

  // Chat
  const [chatText, setChatText] = useState("");
  const [chat, setChat] = useState<Array<{ who: "คุณ" | "ตุ๊บตั๊บ" | "เจลิ"; text: string; at: string }>>([
    { who: "ตุ๊บตั๊บ", text: "ใครมีนิยายเกี่ยวกับเวทมนต์แนะนำบ้างคะ!", at: new Date().toISOString() },
    { who: "เจลิ", text: "เรามีนะคะ", at: new Date().toISOString() },
    { who: "คุณ", text: "อ่านเขมจิราจบแล้ว สนุกมากค่ะ สมชื่อเลย!", at: new Date().toISOString() },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  // Load/persist localStorage
  useEffect(() => {
    try {
      const r = localStorage.getItem("sauhub_reviews");
      if (r) setReviews(JSON.parse(r));
      const c = localStorage.getItem("sauhub_chat");
      if (c) setChat(JSON.parse(c));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("sauhub_reviews", JSON.stringify(reviews));
      localStorage.setItem("sauhub_chat", JSON.stringify(chat));
    } catch {}
  }, [reviews, chat]);

  useEffect(() => {
    // Auto scroll chat to bottom
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [chat]);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((b) => {
      const matchCat = activeCat === "ทั้งหมด" || b.categories.includes(activeCat);
      const matchQ = !q || b.title.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [activeCat, q]);

  const handleAddReview = () => {
    const text = review.trim();
    if (!text) return;
    setReviews((prev) => [
      { id: crypto.randomUUID(), bookId: selectedBook, text, rating, user: "สมาชิก", at: new Date().toISOString() },
      ...prev,
    ]);
    setReview("");
    setRating(5);
  };

  const handleSendChat = () => {
    const text = chatText.trim();
    if (!text) return;
    setChat((prev) => [...prev, { who: "คุณ", text, at: new Date().toISOString() }]);
    setChatText("");
  };

  return (
    <div className="min-h-screen bg-rose-50/40">
      {/* Top banner */}
      <div className="relative isolate overflow-hidden border-b border-rose-100 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-700">SAU BOOK HUB – MEMBER</h1>
              <p className="text-gray-600">ยินดีต้อนรับกลับมา 🎉 ค้นหา แนะนำ และรีวิวหนังสือที่คุณรัก</p>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="ค้นหาหนังสือ..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-rose-200 bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                <Filter className="w-5 h-5 text-rose-500" />
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="justify-self-center">
              <Image src="/reading.png" alt="อ่านหนังสือ" width={320} height={220} className="drop-shadow-md rounded-2xl border border-rose-100 bg-white" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Left column */}
        <div className="space-y-12">
          {/* Shelf */}
          <Section title="📚 ชั้นหนังสือ" subtitle="เลือกดูตามหมวดหมู่ที่คุณสนใจ">
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip active={activeCat === "ทั้งหมด"} onClick={() => setActiveCat("ทั้งหมด")}>ทั้งหมด</Chip>
              {ALL_CATEGORIES.map((c) => (
                <Chip key={c} active={activeCat === c} onClick={() => setActiveCat(c)}>
                  {c}
                </Chip>
              ))}
            </div>
            {filteredBooks.length === 0 ? (
              <p className="text-sm text-gray-500">ไม่พบบุ๊กตามคำค้นหา</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredBooks.map((b) => (
                  <motion.div key={b.id} whileHover={{ y: -4 }} className="group bg-white rounded-2xl border border-rose-100 p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-xl border border-rose-100 bg-rose-50/50 p-3">
                        <Image src={b.cover} alt={b.title} width={56} height={56} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-rose-700 truncate flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-rose-500" /> {b.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{b.desc}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <Stars value={b.rating} />
                          <button className="text-xs inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-rose-200 text-rose-700 hover:bg-rose-50">
                            <BookMarked className="w-3.5 h-3.5" /> เพิ่มลงชั้น
                          </button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {b.categories.map((c) => (
                            <span key={c} className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </Section>

          {/* Reviews (static + user) */}
          <Section title="⭐ รีวิวล่าสุด" subtitle="รีวิวจากสมาชิกและของคุณ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Static 3 reviews to mirror original */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-bold mb-1 text-rose-700">📖 เขมจิราต้องรอด</h3>
                <p className="text-pink-600 text-sm mb-1">มัมหมีน้องเขม</p>
                <Stars value={4.5} />
                <p className="text-gray-700 text-sm mt-2">เขมจิราสนุกมาก เนื้อเรื่องลุ้นระทึกและตัวละครน่ารัก ต้องมีแล้วนะทุกคน!</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-bold mb-1 text-rose-700">📖 เมษาลาตะวัน</h3>
                <p className="text-pink-600 text-sm mb-1">แฟนสาวคุณเจค</p>
                <Stars value={4.0} />
                <p className="text-gray-700 text-sm mt-2">อ่านแล้วอินมาก เนื้อหาเศร้าใจสุดๆ ภาษาสวยมาก</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-bold mb-1 text-rose-700">📖 ดาวดารดาษ</h3>
                <p className="text-pink-600 text-sm mb-1">ไอ้หนุ่มหัวหงอก</p>
                <Stars value={4.2} />
                <p className="text-gray-700 text-sm mt-2">เนื้อเรื่องชวนหลอนน่าติดตาม ขนลุกทุกครั้งที่อ่าน พระเอกเก่งมาก</p>
              </div>
            </div>

            {/* User review composer */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              <div className="bg-white rounded-2xl border border-rose-100 p-5">
                <h4 className="font-semibold text-rose-700 mb-4">📝 เขียนรีวิวของคุณ</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="text-sm">เลือกหนังสือ
                    <select
                      className="mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-rose-300 border-rose-200"
                      value={selectedBook}
                      onChange={(e) => setSelectedBook(e.target.value)}
                    >
                      {BOOKS.map((b) => (
                        <option key={b.id} value={b.id}>{b.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm">ให้คะแนน (1-5)
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-rose-300 border-rose-200"
                    />
                  </label>
                </div>
                <textarea
                  rows={5}
                  placeholder="เขียนรีวิวของคุณ..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-3 w-full border rounded-lg p-3 bg-white/80 border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <button
                  onClick={handleAddReview}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow hover:from-rose-600 hover:to-pink-600"
                >
                  โพสต์รีวิว
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-rose-100 p-5">
                <h4 className="font-semibold text-rose-700 mb-4">รีวิวของสมาชิก</h4>
                <div className="space-y-3 max-h-[260px] overflow-auto pr-1">
                  {reviews.length === 0 ? (
                    <p className="text-sm text-gray-500">ยังไม่มีรีวิวจากคุณ ลองเขียนสักอันสิ ✍️</p>
                  ) : (
                    reviews.map((r) => {
                      const b = BOOKS.find((x) => x.id === r.bookId);
                      return (
                        <div key={r.id} className="p-3 border border-rose-100 rounded-xl bg-rose-50/30">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-rose-700">{b?.title}</p>
                            <Stars value={r.rating} />
                          </div>
                          <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{r.text}</p>
                          <p className="text-[11px] text-gray-400 mt-1">โดย {r.user} • {new Date(r.at).toLocaleString()}</p>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </Section>

          {/* Community Chat */}
          <Section title="💬 ห้องแชท" subtitle="พูดคุย แลกเปลี่ยนแนะนำหนังสือ">
            <div className="bg-white rounded-2xl border border-rose-100 p-5">
              <div ref={chatRef} className="border rounded-xl p-4 h-72 overflow-y-auto bg-rose-50/40">
                {chat.map((m, i) => (
                  <div key={i} className={`mb-3 flex ${m.who === "คุณ" ? "justify-end" : "justify-start"}`}>
                    <div className={`${m.who === "คุณ" ? "bg-rose-600 text-white" : "bg-white border border-rose-100 text-gray-800"} max-w-[75%] px-3 py-2 rounded-xl shadow-sm`}>
                      <p className="text-xs opacity-80 mb-0.5 flex items-center gap-1"><MessageSquareMore className="w-3 h-3" /> {m.who}</p>
                      <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  value={chatText}
                  onChange={(e) => setChatText(e.target.value)}
                  placeholder="พิมพ์ข้อความ..."
                  className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300 border-rose-200"
                />
                <button onClick={handleSendChat} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700">
                  <Send className="w-4 h-4" /> ส่ง
                </button>
              </div>
            </div>
          </Section>
        </div>

        {/* Right column (sidebar) */}
        <div className="space-y-6">
          {/* Profile card */}
          <div className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-pink-400 grid place-items-center text-white font-bold">JB</div>
              <div>
                <p className="font-semibold text-rose-700">สวัสดี, Jib</p>
                <p className="text-xs text-gray-500">สมาชิก SAU BOOK HUB</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <p className="text-xl font-bold text-rose-700">12</p>
                <p className="text-[11px] text-gray-500">รีวิว</p>
              </div>
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <p className="text-xl font-bold text-rose-700">7</p>
                <p className="text-[11px] text-gray-500">เล่มที่ชอบ</p>
              </div>
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <p className="text-xl font-bold text-rose-700">3</p>
                <p className="text-[11px] text-gray-500">กำลังอ่าน</p>
              </div>
            </div>
          </div>

          {/* Tips / Announcements */}
          <div className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <h4 className="font-semibold text-rose-700 mb-2">ประกาศชุมชน</h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>อัปเดตรายการหนังสือประจำเดือนสิงหาคม</li>
              <li>ท้าประลองรีวิวสั้น 3 บรรทัด ลุ้นรับเหรียญสมาชิก</li>
              <li>เพิ่มหมวดหมู่ใหม่: จิตวิทยาการสื่อสาร</li>
            </ul>
          </div>

          {/* Quick help */}
          <div className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <h4 className="font-semibold text-rose-700 mb-2">เริ่มต้นอย่างรวดเร็ว</h4>
            <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
              <li>ค้นหาหนังสือที่อยากอ่าน</li>
              <li>เพิ่มลงชั้นและเริ่มอ่าน</li>
              <li>เขียนรีวิวเพื่อช่วยสมาชิกคนอื่น ๆ</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-8">© {new Date().getFullYear()} SAU BOOK HUB • ทำด้วยความรักต่อการอ่าน</footer>
    </div>
  );
}
