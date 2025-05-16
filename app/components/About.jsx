'use client';
import { motion } from 'framer-motion';
import {
  CheckBadgeIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const About = () => {
  const features = [
    {
      icon: <LightBulbIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Materi Inovatif",
      desc: "Kurikulum berbasis kasus nyata industri terkini"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Networking",
      desc: "Interaksi langsung dengan praktisi dan peserta lain"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Data Terkini",
      desc: "Analisis tren AI 2024 dan prediksi masa depan"
    },
    {
      icon: <CheckBadgeIcon className="w-8 h-8 text-green-500" aria-hidden="true" />,
      title: "Sertifikat",
      desc: "Bukti partisipasi yang bisa dibagikan di LinkedIn"
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

  return (
    <section className="relative py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-300 rounded-full blur-3xl will-change-[filter,transform] opacity-10"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-green-400 rounded-full blur-3xl will-change-[filter,transform] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
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
              Tentang Webinar
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Pelajari bagaimana revolusi AI dapat mentransformasi bisnis Anda dalam 2 jam sesi intensif.
          </motion.p>
        </motion.div>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-800">Apa yang Akan Anda Pelajari?</h3>
            <p className="text-green-700 leading-relaxed">
              Dalam webinar eksklusif ini, kami akan membongkar strategi implementasi AI yang telah terbukti meningkatkan efisiensi operasional bisnis hingga 73%.
            </p>
            <ul className="space-y-4" aria-label="Topik webinar">
              {[
                "Fundamental AI untuk bisnis",
                "Tools terkini yang bisa langsung diaplikasikan",
                "Studi kasus: Kesuksesan dan kegagalan",
                "Roadmap transformasi digital dengan AI"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-start text-green-800"
                >
                  <span
                    className="inline-block w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5"
                    aria-hidden="true"
                  >
                    <CheckBadgeIcon className="w-4 h-4 text-green-600" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Fitur */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
        </div>

        {/* Target Peserta */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-green-600/10 backdrop-blur-sm p-8 rounded-2xl border border-green-200"
        >
          <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Untuk Siapa Webinar Ini?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Profesional Bisnis",
                desc: "CEO, Manajer, dan Decision Maker yang ingin memanfaatkan AI"
              },
              {
                title: "Developer & IT Specialist",
                desc: "Yang ingin mengintegrasikan AI ke dalam sistem perusahaan"
              },
              {
                title: "Startup Founder",
                desc: "Mencari competitive edge dengan teknologi terkini"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                <h4 className="font-bold text-green-800 text-lg mb-2">{item.title}</h4>
                <p className="text-green-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
