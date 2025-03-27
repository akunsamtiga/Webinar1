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
      answer: "Setelah mendaftar, Anda akan menerima email konfirmasi dengan link Zoom webinar 1 hari sebelum acara. Anda bisa join langsung melalui link tersebut saat webinar dimulai."
    },
    {
      question: "Apakah akan ada rekaman jika saya tidak bisa hadir live?",
      answer: "Ya, semua peserta paket Premium akan mendapatkan rekaman full webinar yang bisa diakses selama 1 tahun. Peserta gratis bisa upgrade ke paket Premium untuk mendapatkan rekaman."
    },
    {
      question: "Perangkat apa yang saya butuhkan untuk mengikuti?",
      answer: "Anda hanya perlu perangkat (laptop/HP) dengan koneksi internet stabil. Kami sarankan menggunakan laptop untuk pengalaman terbaik."
    },
    {
      question: "Apakah ada sertifikat partisipasi?",
      answer: "Ya, semua peserta akan mendapatkan sertifikat elektronik yang bisa diunduh setelah webinar selesai."
    },
    {
      question: "Bisakah saya bertanya langsung ke pembicara?",
      answer: "Tentu! Ada sesi Q&A khusus di akhir webinar. Peserta paket Premium akan mendapatkan prioritas pertanyaan."
    },
    {
      question: "Apa kebijakan refund jika saya tidak puas?",
      answer: "Kami menawarkan garansi 100% uang kembali jika Anda tidak puas dengan konten webinar. Cukup kirim email dalam 7 hari setelah acara."
    }
  ];

  // Variants animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Pertanyaan Umum
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang webinar ini.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-xl border border-green-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-green-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-green-600" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-6 overflow-hidden"
              >
                <div className="pb-6 text-green-700">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-green-700 mb-6">Masih ada pertanyaan lain?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Hubungi Tim Kami
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;