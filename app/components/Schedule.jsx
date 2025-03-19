"use client";
import { motion } from "framer-motion";

const schedules = [
  {
    date: "Senin, 25 Maret 2025",
    time: "09:00 - 10:00",
    title: "Masa Depan AI di Industri Kreatif",
    speaker: "Dr. Hana Kim",
  },
  {
    date: "Senin, 25 Maret 2025",
    time: "10:15 - 11:15",
    title: "Penerapan Deep Learning di Perusahaan",
    speaker: "Prof. Jiwoo Park",
  },
  {
    date: "Senin, 25 Maret 2025",
    time: "11:30 - 12:30",
    title: "AI dan Etika: Tantangan Masa Depan",
    speaker: "Eunseo Jung",
  },
  {
    date: "Senin, 25 Maret 2025",
    time: "13:30 - 14:30",
    title: "Optimasi Model Machine Learning",
    speaker: "Minji Lee",
  },
  {
    date: "Selasa, 26 Maret 2025",
    time: "14:45 - 15:45",
    title: "Peran AI dalam Transformasi Digital",
    speaker: "Soojin Choi",
  },
  {
    date: "Selasa, 26 Maret 2025",
    time: "16:00 - 17:00",
    title: "Membangun AI yang Bertanggung Jawab",
    speaker: "Seoyeon Baek",
  },
];

export default function Schedule() {
  return (
    <section id="schedule-section" className="relative bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 text-gray-900">
      {/* Judul Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Jadwal Webinar
      </motion.h2>

      {/* Grid Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schedules.slice(0, 4).map((schedule, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-300">{schedule.date}</p>
            <p className="text-sm font-medium text-gray-300">{schedule.time}</p>
            <h3 className="text-xl font-bold mt-2">{schedule.title}</h3>
            <p className="text-gray-400 text-sm mt-1">Pembicara: {schedule.speaker}</p>
          </motion.div>
        ))}

        {/* Menampilkan 2 tambahan hanya di md+ */}
        {schedules.slice(4, 6).map((schedule, index) => (
          <motion.div
            key={index}
            className="hidden md:block p-6 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: (index + 4) * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-300">{schedule.date}</p>
            <p className="text-sm font-medium text-gray-300">{schedule.time}</p>
            <h3 className="text-xl font-bold mt-2">{schedule.title}</h3>
            <p className="text-gray-400 text-sm mt-1">Pembicara: {schedule.speaker}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
