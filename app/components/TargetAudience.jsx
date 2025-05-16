'use client';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  ChartBarIcon,
  CodeBracketIcon,
  LightBulbIcon
} from '@heroicons/react/24/solid';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <BriefcaseIcon className="w-8 h-8 text-green-500" />,
      title: 'Profesional Bisnis',
      description:
        'CEO, Manajer, dan pengambil keputusan yang ingin memanfaatkan AI untuk efisiensi operasional',
      roles: ['CEO/CTO', 'Product Manager', 'Business Analyst']
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-green-500" />,
      title: 'Tim Teknologi',
      description:
        'Developer dan IT specialist yang ingin mengintegrasikan AI ke dalam sistem perusahaan',
      roles: ['Software Engineer', 'Data Scientist', 'IT Manager']
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-green-500" />,
      title: 'Startup Founder',
      description:
        'Pendiri startup yang mencari competitive edge dengan teknologi terkini',
      roles: ['Founder', 'Startup Team', 'Digital Entrepreneur']
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-green-500" />,
      title: 'Digital Marketer',
      description:
        'Profesional marketing yang ingin memanfaatkan AI untuk kampanye lebih efektif',
      roles: ['Digital Marketer', 'Content Creator', 'Growth Hacker']
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
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden"
      aria-labelledby="target-audience-heading"
    >
      {/* Dekorasi background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            id="target-audience-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Siapa yang Harus Hadir?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-green-800 max-w-3xl mx-auto"
          >
            Webinar ini dirancang khusus untuk profesional yang ingin memanfaatkan AI dalam bisnis dan karir mereka.
          </motion.p>
        </motion.div>

        {/* Grid Audience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all h-full"
              role="region"
              aria-labelledby={`audience-${index}-title`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="p-3 bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {audience.icon}
                </div>

                {/* Konten */}
                <h3
                  id={`audience-${index}-title`}
                  className="text-xl font-bold text-green-900 mb-2"
                >
                  {audience.title}
                </h3>
                <p className="text-green-800 mb-4 flex-grow">{audience.description}</p>

                {/* Role List */}
                <div className="pt-4 mt-auto border-t border-green-100">
                  <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">
                    Peran Terkait:
                  </h4>
                  <ul className="space-y-2">
                    {audience.roles.map((role, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span className="text-sm text-green-800">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
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
          <p className="text-green-800 mb-6">Tidak yakin apakah webinar ini cocok untuk Anda?</p>
          <motion.a
            href="#contact"
            title="Konsultasi Gratis"
            aria-label="Konsultasi Gratis"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-bold shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
          >
            Konsultasi Gratis
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
