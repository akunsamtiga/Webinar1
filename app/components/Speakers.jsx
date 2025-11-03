'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { LinkedinIcon, TwitterIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

const Speakers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const speakers = [
    {
      name: "Drs. Bambang Setiawan",
      title: "Direktur Utama NH Bank",
      bio: "Pemimpin visioner dengan pengalaman 20+ tahun di industri perbankan Indonesia.",
      image: "/images/p7.jpg",
      social: {
        linkedin: "https://linkedin.com/in/bambangsetiawan",
        twitter: "https://twitter.com/bambangsetiawan"
      }
    },
    {
      name: "Siti Rahayu, MBA",
      title: "Head of Digital Banking NH Bank",
      bio: "Arsitek di balik transformasi digital NH Bank dengan fokus customer experience.",
      image: "/images/p8.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sitirahayu",
        twitter: "https://twitter.com/sitirahayu"
      }
    },
    {
      name: "Ahmad Fauzi",
      title: "Chief Technology Officer",
      bio: "Expert teknologi fintech yang memimpin pengembangan NH All One App.",
      image: "/images/p9.jpg",
      social: {
        linkedin: "https://linkedin.com/in/ahmadfauzi",
        twitter: "https://twitter.com/ahmadfauzi"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
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

  const cardVariants = {
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
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden"
      aria-labelledby="speakers-heading"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            id="speakers-heading"
            variants={cardVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Narasumber Kami
            </span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg text-green-700 max-w-3xl mx-auto px-4"
          >
            Bertemu langsung dengan para pemimpin di balik inovasi NH All One Bank
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:grid grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-all"
            >
              <div className="relative h-80">
                <Image
                  src={speaker.image}
                  alt={`Foto ${speaker.name}`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                  priority={index < 2}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-900/70 to-transparent" aria-hidden="true"></div>
              </div>

              <div className="p-6 relative">
                <div className="flex gap-3 absolute -top-5 right-6">
                  <a
                    href={speaker.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${speaker.name}`}
                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Twitter ${speaker.name}`}
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-green-900">{speaker.name}</h3>
                <p className="text-green-600 font-medium mt-1">{speaker.title}</p>
                <p className="text-green-700 mt-3 text-sm">{speaker.bio}</p>

                <div className="mt-4 pt-4 border-t border-green-100">
                  <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider">
                    Topik Pembahasan
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {["Visi Digital Banking", "Fitur Inovatif Aplikasi", "Keamanan & Privasi"].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-green-800">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative px-4 sm:px-8">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {speakers.map((speaker, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 max-w-md mx-auto">
                    <div className="relative h-64 sm:h-80">
                      <Image
                        src={speaker.image}
                        alt={`Foto ${speaker.name}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index === currentSlide}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-900/70 to-transparent" aria-hidden="true"></div>
                    </div>

                    <div className="p-4 sm:p-6 relative">
                      <div className="flex gap-3 absolute -top-5 right-6">
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn ${speaker.name}`}
                          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={speaker.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Twitter ${speaker.name}`}
                          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                        >
                          <TwitterIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-green-900">{speaker.name}</h3>
                      <p className="text-green-600 font-medium mt-1 text-sm sm:text-base">{speaker.title}</p>
                      <p className="text-green-700 mt-3 text-xs sm:text-sm">{speaker.bio}</p>

                      <div className="mt-4 pt-4 border-t border-green-100">
                        <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider">
                          Topik Pembahasan
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {["Visi Digital Banking", "Fitur Inovatif Aplikasi", "Keamanan & Privasi"].map((item, i) => (
                            <li key={i} className="flex items-center text-xs sm:text-sm text-green-800">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" aria-hidden="true"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-green-600 hover:bg-green-50 z-10"
            aria-label="Previous speaker"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-green-600 hover:bg-green-50 z-10"
            aria-label="Next speaker"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {speakers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? 'bg-green-600 w-6' : 'bg-green-300'
                }`}
                aria-label={`Go to speaker ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-green-700 mb-4 sm:mb-6 px-4">
            Jangan lewatkan kesempatan bertemu langsung dengan <strong>{speakers.length} leader</strong> perbankan digital Indonesia
          </p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg font-bold hover:shadow-xl transition-all text-sm sm:text-base"
          >
            Daftar Sekarang
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;