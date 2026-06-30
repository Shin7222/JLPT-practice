"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah web ini gratis digunakan?",
    a: "Ya, semua fitur latihan soal dan materi belajar di web ini dapat digunakan secara gratis.",
  },
  {
    q: "Dari mana sumber soal-soalnya?",
    a: "Soal disusun berdasarkan pola dan standar soal JLPT dari tahun-tahun sebelumnya, disesuaikan dengan tingkat kesulitan tiap level (N5–N1).",
  },
  {
    q: "Apakah hasil test saya disimpan?",
    a: "Saat ini progres test disimpan secara lokal di perangkat kamu. Fitur penyimpanan akun dan riwayat lengkap sedang dalam pengembangan.",
  },
  {
    q: "Apakah ada simulasi listening seperti ujian asli?",
    a: "Untuk versi awal, bagian listening disajikan dalam bentuk transkrip teks. Fitur audio asli sedang direncanakan untuk pembaruan selanjutnya.",
  },
  {
    q: "Bagaimana cara memulai latihan?",
    a: 'Klik tombol "Mulai Test" di halaman utama, pilih level JLPT yang sesuai kemampuanmu, lalu kerjakan soal sesuai waktu yang tersedia.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="px-4 sm:px-6 py-14 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
        Pertanyaan Umum
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`text-indigo-400 text-xl transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
