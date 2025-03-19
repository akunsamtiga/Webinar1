"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("hero-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Variants untuk animasi scale secara bergantian dengan delay 1 detik per gambar
  const imageAnimation = {
    animate: (delay) => ({
      scale: [1, 1.05, 1], // Scale naik ke 1.05 lalu kembali ke 1
      transition: {
        duration: 1.5, // Durasi satu siklus animasi per gambar
        repeat: Infinity, // Looping terus menerus
        ease: "easeInOut",
        delay: delay, // Delay yang berbeda untuk tiap gambar agar berjalan bergantian
      },
    }),
  };

  return (
    <section
      id="hero-section"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-4 md:px-8 lg:px-20 py-10 text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/webinar3.jpg"
          alt="Webinar AI"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Konten Kiri (Judul & CTA) */}
      <motion.div
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-lg md:max-w-md lg:max-w-2xl md:ml-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Judul */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight px-5 md:px-0 md:pr-8 lg:pr-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          Webinar: Inovasi AI dalam Dunia Bisnis
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-base lg:text-xl text-gray-300 pr-0 md:pr-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          Temukan bagaimana kecerdasan buatan merevolusi industri dan strategi bisnis global.
        </motion.p>

        {/* Tombol CTA */}
        <motion.a
          href="#register"
          className="mt-6 inline-flex items-center px-6 md:px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            transition: "background-color 0.3s ease",
          }}
          whileHover={{ scale: 1.05, backgroundColor: "#0056b3" }}
          whileTap={{ scale: 0.95 }}
        >
          Daftar Sekarang
          <ArrowRightIcon className="w-6 h-6 ml-3" />
        </motion.a>
      </motion.div>

      {/* Gambar Karakter PNG (Samping Kanan) */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 md:mt-0 md:gap-2 md:mr-4"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {[
          { src: "/images/pp2.png", name: "Kim Jisoo, Ph.D.", title: "Pakar AI & Otomasi" },
          { src: "/images/pp4.png", name: "Park Minji, M.Sc.", title: "Spesialis Machine Learning" },
          { src: "/images/pp6.png", name: "Lee Haneul, S.T.", title: "Data Scientist Senior" },
        ].map((person, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Gambar dengan animasi looping yang bergantian */}
            <motion.div
              className="relative bg-gray-300 w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 border-2 border-gray-200 rounded-full overflow-hidden"
              variants={imageAnimation}
              initial="initial"
              animate="animate"
              custom={index * 1} // Delay bergantian (0s, 1s, 2s)
            >
              <Image
                src={person.src}
                alt={person.name}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            {/* Nama & Gelar */}
            <p className="mt-3 text-sm sm:text-base md:text-sm lg:text-lg font-semibold">{person.name}</p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-base text-gray-300">{person.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
