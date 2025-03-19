"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className="relative bg-white flex flex-col md:flex-row items-center justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-10 text-white overflow-hidden"
    >
      {/* Background Shapes */}
      <motion.div
        className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-green-300 opacity-20 rounded-full filter blur-3xl"
        style={{
          top: `calc(15% - ${scrollY * 0.1}px)`,
          left: "5%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-300 opacity-20 rounded-full filter blur-3xl"
        style={{
          top: `calc(50% - ${scrollY * 0.15}px)`,
          right: "10%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 opacity-20 rounded-full filter blur-3xl"
        style={{
          top: `calc(85% - ${scrollY * 0.2}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />

      {/* Konten Kiri (Gambar) */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center md:justify-start lg:justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
          <Image
            src="/images/webinar3.jpg"
            alt="Tentang Webinar"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-lg px-0 md:px-6"
            priority
          />
        </div>
      </motion.div>

      {/* Konten Kanan (Teks dan Grid Fitur) */}
      <motion.div
        className="relative w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-gray-800 sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Tentang
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 px-2 md:px-0">
          Webinar ini dirancang untuk memberikan wawasan mendalam tentang perkembangan terbaru dalam kecerdasan buatan dan teknologi masa depan.
        </p>

        {/* Grid untuk Fitur */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Pembicara Ahli", desc: "Dari universitas & perusahaan teknologi terkemuka." },
            { title: "Materi Berkualitas", desc: "Pembelajaran mendalam & studi kasus nyata." },
            { title: "Sertifikat Resmi", desc: "Dapatkan sertifikat yang diakui industri." },
            { title: "Networking", desc: "Bertemu dengan profesional dan praktisi AI." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-b from-[#F0FFF050] to-[#F0FFF080] rounded-lg shadow-md hover:scale-[95%] transition duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gray-600 font-bold">{feature.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
