"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Data Speakers dengan Nama & Title Korea
const speakers = [
  { name: "Dr. Hana Kim", title: "AI Researcher - Seoul AI Lab", image: "/images/pp1.png" },
  { name: "Prof. Jiwoo Park", title: "Professor - KAIST AI Department", image: "/images/pp2.png" },
  { name: "Soojin Choi", title: "Machine Learning Engineer Samsung AI", image: "/images/pp3.png" },
  { name: "Minji Lee", title: "Data Scientist - Naver Cloud", image: "/images/pp4.png" },
  { name: "Eunseo Jung", title: "AI Ethics Specialist - Korea University", image: "/images/pp5.png" },
  { name: "Seoyeon Baek", title: "Senior Researcher - LG AI Research", image: "/images/pp6.png" },
];

export default function Speakers() {
  return (
    <section id="speakers-section" className="relative bg-gray-100 py-16 px-6 sm:px-10 md:px-16 lg:px-24 text-gray-900">
      {/* Judul Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Pembicara Kami
      </motion.h2>

      {/* Grid Speakers */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.slice(0, 4).map((speaker, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Gambar Speaker */}
            <div className="relative w-full h-44 lg:h-54">
              <Image src={speaker.image} alt={speaker.name} layout="fill" objectFit="contain" priority className="rounded-t-lg bg-gray-200" />
            </div>

            {/* Informasi Speaker */}
            <div className="p-5 text-center">
              <h3 className="text-lg line-clamp-1 font-bold mb-1 lg:mb-0">{speaker.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{speaker.title}</p>
            </div>
          </motion.div>
        ))}

        {/* Menampilkan 2 tambahan hanya di md+ */}
        {speakers.slice(4, 6).map((speaker, index) => (
          <motion.div
            key={index}
            className="hidden md:block relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: (index + 4) * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Gambar Speaker */}
            <div className="relative w-full h-44 lg:h-54">
              <Image src={speaker.image} alt={speaker.name} layout="fill" objectFit="contain" priority className="rounded-t-lg bg-gray-200" />
            </div>

            {/* Informasi Speaker */}
            <div className="p-5 text-center">
              <h3 className="text-lg line-clamp-1 font-bold mb-1 lg:mb-0">{speaker.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{speaker.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
