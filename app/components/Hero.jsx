'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRightIcon, CalendarIcon, ClockIcon, PlayCircleIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/webinar3.webp"
          alt="Latar belakang webinar AI"
          fill
          quality={90}
          priority={false}
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-green-800/60 will-change-[opacity]" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-green-800/30 will-change-[opacity]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-8 md:pt-16 pb-14 md:pb-28 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 text-sm font-medium mb-6 shadow-lg"
            >
              <span
                className="w-2.5 h-2.5 rounded-full bg-green-300 mr-2 animate-pulse"
                aria-hidden="true"
              ></span>
              Sesi Eksklusif • Kuota Terbatas
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
                Transformasi Digital
              </span>{' '}
              <br />
              <span className="text-white">dengan Kecerdasan Buatan</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-green-100 mt-6 mb-8 max-w-2xl leading-relaxed"
            >
              Kuasai teknik mutakhir implementasi AI dalam bisnis melalui workshop interaktif bersama praktisi industri ternama.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg border border-green-300/20">
                <CalendarIcon className="w-6 h-6 text-green-300 mr-3" aria-hidden="true" />
                <div>
                  <p className="text-xs text-green-200">Tanggal</p>
                  <p className="font-medium text-white">25 Juni 2024</p>
                </div>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg border border-green-300/20">
                <ClockIcon className="w-6 h-6 text-green-300 mr-3" aria-hidden="true" />
                <div>
                  <p className="text-xs text-green-200">Waktu</p>
                  <p className="font-medium text-white">19:00 - 21:00 WIB</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(74, 222, 128, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-6 py-4 rounded-xl shadow-lg font-semibold transition-all duration-300"
                aria-label="Daftar sekarang gratis"
              >
                <PlayCircleIcon className="w-6 h-6" aria-hidden="true" />
                Daftar Sekarang - Gratis!
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl border-2 border-green-300 text-green-100 font-semibold hover:bg-white/10 transition-colors shadow-lg"
                aria-label="Lihat kurikulum"
              >
                Lihat Kurikulum
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.4, duration: 0.8 },
            }}
            className="relative h-full w-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="relative w-full h-full max-w-xl mx-auto"
              >
                <Image
                  src="/images/webinar3.webp"
                  alt="Ilustrasi transformasi digital dengan AI"
                  fill
                  quality={90}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
