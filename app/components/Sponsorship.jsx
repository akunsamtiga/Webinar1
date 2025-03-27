'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sponsorship = () => {
  // Data sponsor dan partner
  const sponsors = [
    {
      name: "Nodeflux",
      logo: "/images/1.png",
      tier: "platinum",
      url: "https://www.nodeflux.io/"
    },
    {
      name: "Bukalapak",
      logo: "/images/2.png",
      tier: "gold",
      url: "https://www.bukalapak.com/"
    },
    {
      name: "Telkom Indonesia",
      logo: "/images/3.png",
      tier: "gold",
      url: "https://www.telkom.co.id/"
    },
    {
      name: "XL Axiata",
      logo: "/images/4.png",
      tier: "silver",
      url: "https://www.xl.co.id/"
    },
    {
      name: "Elang Mahkota Teknologi",
      logo: "/images/5.png",
      tier: "silver",
      url: "https://emtek.co.id/"
    },
    {
      name: "Multipolar Technology",
      logo: "/images/6.webp",
      tier: "silver",
      url: "https://www.multipolar.com/"
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

  // Kelompokkan sponsor berdasarkan tier
  const platinumSponsors = sponsors.filter(sponsor => sponsor.tier === "platinum");
  const goldSponsors = sponsors.filter(sponsor => sponsor.tier === "gold");
  const silverSponsors = sponsors.filter(sponsor => sponsor.tier === "silver");

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
              Sponsor & Partner
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Terima kasih kepada sponsor dan partner yang mendukung acara ini.
          </motion.p>
        </motion.div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-center text-xl font-semibold text-green-800 mb-8">Platinum Sponsor</h3>
            <div className="flex flex-wrap justify-center gap-12">
              {platinumSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all"
                >
                  <div className="relative w-64 h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-center text-xl font-semibold text-green-800 mb-8">Gold Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {goldSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all"
                >
                  <div className="relative w-48 h-16">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-center text-xl font-semibold text-green-800 mb-8">Silver Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {silverSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-all"
                >
                  <div className="relative w-36 h-12">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-green-600/10 backdrop-blur-sm p-8 rounded-2xl border border-green-200 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-green-900 mb-4">Jadi Sponsor?</h3>
          <p className="text-green-700 mb-6">Dapatkan eksposur brand Anda di depan audiens profesional dan dapatkan benefit eksklusif sebagai sponsor.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-green-600 font-bold shadow-md hover:shadow-lg transition-all border border-green-300"
          >
            Hubungi Tim Sponsorship
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;