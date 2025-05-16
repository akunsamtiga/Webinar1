'use client';
import { motion } from 'framer-motion';
import { ClockIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const iconMap = {
  clock: ClockIcon,
  check: CheckCircleIcon,
};

const schedule = [
  {
    time: "19:00 - 19:15",
    title: "Registrasi & Sambutan",
    description: "Pembukaan acara dan perkenalan singkat",
    icon: "check"
  },
  {
    time: "19:15 - 20:00",
    title: "Keynote: Tren AI 2024",
    description: "Pemaparan tren terkini dan prediksi masa depan AI",
    icon: "clock",
    highlight: true
  },
  {
    time: "20:00 - 20:45",
    title: "Studi Kasus Implementasi",
    description: "Bagaimana perusahaan top mengintegrasikan AI",
    icon: "clock"
  },
  {
    time: "20:45 - 21:15",
    title: "Sesi Q&A",
    description: "Tanya jawab langsung dengan pembicara",
    icon: "clock"
  },
  {
    time: "21:15 - 21:30",
    title: "Penutupan",
    description: "Kesimpulan dan informasi follow-up",
    icon: "check"
  }
];

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

const Schedule = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden" aria-labelledby="schedule-heading">
      {/* Dekorasi background (blur dikurangi) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-300 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-400 rounded-full filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            id="schedule-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Agenda Webinar
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Jadwal lengkap acara dan materi yang akan dibahas
          </motion.p>
        </motion.div>

        {/* Info Tanggal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-green-100 max-w-2xl mx-auto"
        >
          <div className="flex items-center" aria-label="Tanggal acara">
            <CalendarIcon className="w-6 h-6 text-green-700 mr-3" aria-hidden="true" />
            <div>
              <p className="text-sm text-green-700">Tanggal</p>
              <p className="font-bold text-green-900">25 Juni 2024</p>
            </div>
          </div>
          <div className="flex items-center" aria-label="Waktu acara">
            <ClockIcon className="w-6 h-6 text-green-700 mr-3" aria-hidden="true" />
            <div>
              <p className="text-sm text-green-700">Waktu</p>
              <p className="font-bold text-green-900">19:00 - 21:30 WIB</p>
            </div>
          </div>
          <div className="flex items-center" aria-label="Durasi acara">
            <svg className="w-6 h-6 text-green-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-green-700">Durasi</p>
              <p className="font-bold text-green-900">2.5 Jam</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-6 h-full w-0.5 bg-green-200" aria-hidden="true"></div>

            {schedule.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-16 pb-10 ${index === schedule.length - 1 ? '' : 'border-l-2 border-green-200'}`}
                >
                  <div
                    className={`absolute top-1 left-6 w-4 h-4 rounded-full flex items-center justify-center ${item.highlight ? 'bg-green-600 ring-4 ring-green-200' : 'bg-green-400'}`}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className={`p-6 rounded-xl ${item.highlight ? 'bg-green-600 text-white' : 'bg-white'} shadow-sm border ${item.highlight ? 'border-green-700' : 'border-green-100'} transition-all`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <p className={`font-mono font-medium ${item.highlight ? 'text-green-100' : 'text-green-700'} w-32 flex-shrink-0`}>
                        {item.time}
                      </p>
                      <div>
                        <h3 className={`text-lg font-bold ${item.highlight ? 'text-white' : 'text-green-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-1 ${item.highlight ? 'text-green-50' : 'text-green-700'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Catatan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 bg-green-50/70 backdrop-blur-sm p-6 rounded-xl border border-green-200 max-w-3xl mx-auto text-center"
        >
          <p className="text-green-700">
            <span className="font-bold">Note:</span> Setelah registrasi, Anda akan menerima email konfirmasi dengan link Zoom dan reminder 1 jam sebelum acara dimulai.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
