'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Bagaimana cara mengikuti webinar ini?",
      answer: "Setelah mendaftar, Anda akan menerima email konfirmasi dengan link Zoom webinar 1 hari sebelum acara."
    },
    {
      question: "Apakah akan ada rekaman jika saya tidak bisa hadir live?",
      answer: "Ya, semua peserta paket Premium akan mendapatkan rekaman full webinar yang bisa diakses selama 1 tahun."
    },
    {
      question: "Perangkat apa yang saya butuhkan untuk mengikuti?",
      answer: "Anda hanya perlu perangkat (laptop/HP) dengan koneksi internet stabil."
    },
    {
      question: "Apakah ada sertifikat partisipasi?",
      answer: "Ya, semua peserta akan mendapatkan sertifikat elektronik yang bisa diunduh setelah webinar selesai."
    },
    {
      question: "Bisakah saya bertanya langsung ke pembicara?",
      answer: "Tentu! Ada sesi Q&A khusus di akhir webinar. Peserta Premium mendapat prioritas."
    },
    {
      question: "Apa kebijakan refund jika saya tidak puas?",
      answer: "Kami menawarkan garansi 100% uang kembali jika Anda tidak puas dengan konten webinar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Pertanyaan Umum
            </span>
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang webinar ini.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-green-200 bg-white transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  <span className="text-green-900 font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-green-600" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-green-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-green-700 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition"
          >
            Hubungi Tim Kami
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
