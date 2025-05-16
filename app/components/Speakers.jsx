'use client';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Lim",
      title: "AI Research Lead at TechCorp",
      bio: "Pakar dengan 10+ tahun pengalaman dalam penerapan AI di industri finansial.",
      image: "/images/p7.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sarahlim",
        twitter: "https://twitter.com/sarahlim"
      }
    },
    {
      name: "Michael Chen",
      title: "CTO StartupAI",
      bio: "Membangun solusi AI untuk UMKM dengan pendekatan praktis.",
      image: "/images/p8.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen"
      }
    },
    {
      name: "Dr. Anisa Putri",
      title: "Dosen AI Universitas Teknologi",
      bio: "Peneliti bidang NLP dan penerapannya dalam bisnis.",
      image: "/images/p9.jpg",
      social: {
        linkedin: "https://linkedin.com/in/anisaputri",
        twitter: "https://twitter.com/anisaputri"
      }
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
      className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden"
      aria-labelledby="speakers-heading"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-400 rounded-full blur-2xl"></div>
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
            id="speakers-heading"
            variants={cardVariants}
            className="text-4xl lg:text-5xl font-bold text-green-900 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Pembicara Expert
            </span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Belajar langsung dari para praktisi yang telah sukses menerapkan AI di berbagai industri.
          </motion.p>
        </motion.div>

        {/* Speaker Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    Fokus Materi
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {["Implementasi AI Praktis", "Studi Kasus Nyata", "Solusi Industri Spesifik"].map((item, i) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-green-700 mb-6">
            Bergabunglah dengan <strong>{speakers.length}</strong> expert ini dalam webinar eksklusif
          </p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg shadow-lg font-bold hover:shadow-xl transition-all"
          >
            Daftar Sekarang
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
