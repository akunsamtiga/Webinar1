'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "User Interface Modern",
      desc: "Tampilan intuitif dan mudah digunakan untuk semua kalangan"
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Transaksi Cepat",
      desc: "Proses transaksi instan tanpa ribet, hemat waktu Anda"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Keamanan Terjamin",
      desc: "Teknologi enkripsi tingkat bank untuk melindungi data Anda"
    },
    {
      icon: <CheckBadgeIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Fitur Lengkap",
      desc: "Semua kebutuhan perbankan dalam satu aplikasi"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Tentang NH All One Bank
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-green-700 max-w-3xl mx-auto px-4"
          >
            Aplikasi mobile banking terdepan yang menghadirkan pengalaman perbankan digital yang revolusioner dengan tema "New & New"
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-green-800">Apa yang Akan Anda Dapatkan?</h3>
            <p className="text-sm sm:text-base text-green-700 leading-relaxed">
              Dalam seminar peluncuran NH All One Bank ini, kami akan memperkenalkan fitur-fitur revolusioner yang mengubah cara Anda bertransaksi dan mengelola keuangan dengan lebih efisien.
            </p>
            <ul className="space-y-3 sm:space-y-4" aria-label="Highlight aplikasi">
              {[
                "Live demo fitur-fitur unggulan aplikasi",
                "Cara registrasi dan aktivasi akun dengan mudah",
                "Tips & trik memaksimalkan penggunaan aplikasi",
                "Promo eksklusif khusus pengguna awal",
                "Sesi tanya jawab dengan tim developer"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-start text-green-800 text-sm sm:text-base"
                >
                  <span
                    className="inline-block w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <CheckBadgeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop Grid View */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-50 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-green-900">{feature.title}</h4>
                </div>
                <p className="text-green-700 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile/Tablet Carousel View */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {features.map((feature, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="p-3 bg-green-50 rounded-lg mb-4">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-bold text-green-900">{feature.title}</h4>
                      </div>
                      <p className="text-green-700 text-sm text-center">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg text-green-600 hover:bg-green-50"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg text-green-600 hover:bg-green-50"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? 'bg-green-600 w-6' : 'bg-green-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-green-600/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-green-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 sm:mb-6 text-center">Siapa yang Harus Hadir?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Nasabah NH Bank",
                desc: "Nasabah existing yang ingin merasakan kemudahan digital banking"
              },
              {
                title: "Calon Nasabah",
                desc: "Yang mencari solusi perbankan modern dan praktis"
              },
              {
                title: "Masyarakat Umum",
                desc: "Siapa saja yang tertarik dengan inovasi perbankan digital"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-green-100">
                <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2">{item.title}</h4>
                <p className="text-green-700 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;