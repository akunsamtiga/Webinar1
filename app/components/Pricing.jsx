'use client';
import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  // Data paket harga
  const pricingPlans = [
    {
      name: "Early Bird",
      price: "Gratis",
      duration: "",
      features: [
        "Akses live webinar",
        "Materi presentasi (PDF)",
        "Sertifikat elektronik",
        "Q&A terbatas"
      ],
      cta: "Daftar Sekarang",
      popular: false
    },
    {
      name: "Premium",
      price: "Rp 299.000",
      duration: "per peserta",
      features: [
        "Semua benefit Early Bird",
        "Rekaman sesi (1 tahun akses)",
        "Slide deck + template eksklusif",
        "Prioritas Q&A",
        "Bonus: Cheat Sheet AI Tools"
      ],
      cta: "Pilih Paket Ini",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "tim 5+ orang",
      features: [
        "Semua benefit Premium",
        "Sesi konsultasi privat 30 menit",
        "Laporan analisis kebutuhan AI",
        "Diskon grup 20%",
        "Dedicated account manager"
      ],
      cta: "Hubungi Kami",
      popular: false
    }
  ];

  // Variants animasi
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
    hidden: { y: 50, opacity: 0 },
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
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-400 rounded-full filter blur-3xl"></div>
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
              Investasi Pengetahuan
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Pilih paket yang sesuai dengan kebutuhan Anda. Nilai yang Anda dapatkan jauh lebih besar dari biaya investasinya.
          </motion.p>
        </motion.div>

        {/* Grid Pricing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg border-2 ${plan.popular ? 'border-green-500' : 'border-green-200'} hover:shadow-xl transition-all`}
            >
              {/* Badge Populer */}
              {plan.popular && (
                <div className="absolute top-3 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 transform translate-x-2 -translate-y-2 rotate-12 flex items-center">
                  <StarIcon className="w-3 h-3 mr-1" />
                  POPULER
                </div>
              )}

              <div className={`p-6 ${plan.popular ? 'bg-green-600' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-green-900'}`}>
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className={`text-3xl font-extrabold ${plan.popular ? 'text-white' : 'text-green-600'}`}>
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className={`text-sm ${plan.popular ? 'text-green-100' : 'text-green-500'}`}>
                      / {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Fitur */}
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className={`w-5 h-5 mt-0.5 mr-2 flex-shrink-0 ${plan.popular ? 'text-green-500' : 'text-green-400'}`} />
                      <span className="text-green-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-bold ${plan.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-100 hover:bg-green-200 text-green-800'} transition-colors`}
                >
                  {plan.cta}
                  {index === 0 && <ArrowRightIcon className="w-4 h-4 inline ml-2" />}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Garansi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-green-50/80 backdrop-blur-sm p-6 rounded-xl border border-green-200 max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Garansi 100% Puas</h4>
              <p className="text-green-700 text-sm mt-1">
                Jika webinar tidak sesuai ekspektasi, kami kembalikan uang Anda tanpa pertanyaan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;