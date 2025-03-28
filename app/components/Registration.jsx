'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

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

  return (
    <section id="register" className="relative py-12 bg-gradient-to-b from-green-50 to-white overflow-hidden">
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
              Daftar Sekarang
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-green-700 max-w-3xl mx-auto"
          >
            Isi formulir berikut untuk mengamankan tempat Anda di webinar eksklusif ini.
          </motion.p>
        </motion.div>

        {/* Form dan Info */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form Pendaftaran */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-green-100">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Pendaftaran Berhasil!</h3>
                  <p className="text-green-700 mb-6">
                    Kami telah mengirimkan email konfirmasi ke alamat Anda. Silakan cek inbox atau folder spam.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-green-600 hover:text-green-800 font-medium underline"
                  >
                    Daftar lagi
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-5">
                    {/* Nama Lengkap */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Nama lengkap wajib diisi' })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300' : 'border-green-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="Masukkan nama lengkap"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email wajib diisi',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email tidak valid'
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-green-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="email@contoh.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Nomor WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-1">
                        Nomor WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone', { 
                          required: 'Nomor WhatsApp wajib diisi',
                          pattern: {
                            value: /^[0-9]+$/,
                            message: 'Hanya angka yang diperbolehkan'
                          },
                          minLength: {
                            value: 10,
                            message: 'Nomor terlalu pendek'
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300' : 'border-green-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="81234567890"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Perusahaan */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-green-800 mb-1">
                        Perusahaan/Institusi
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Nama perusahaan (opsional)"
                      />
                    </div>

                    {/* Paket */}
                    <div>
                      <label htmlFor="plan" className="block text-sm font-medium text-green-800 mb-1">
                        Pilih Paket <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="plan"
                        {...register('plan', { required: 'Pilih paket pendaftaran' })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.plan ? 'border-red-300' : 'border-green-200'} focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      >
                        <option value="">-- Pilih Paket --</option>
                        <option value="free">Early Bird (Gratis)</option>
                        <option value="premium">Premium (Rp 299.000)</option>
                        <option value="enterprise">Enterprise (Custom)</option>
                      </select>
                      {errors.plan && (
                        <p className="mt-1 text-sm text-red-600">{errors.plan.message}</p>
                      )}
                    </div>

                    {/* Pertanyaan */}
                    <div>
                      <label htmlFor="questions" className="block text-sm font-medium text-green-800 mb-1">
                        Pertanyaan/Kebutuhan Khusus
                      </label>
                      <textarea
                        id="questions"
                        rows={3}
                        {...register('questions')}
                        className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tulis pertanyaan atau kebutuhan khusus Anda..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex justify-center items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-bold shadow-lg hover:shadow-xl transition-all ${isSubmitting ? 'opacity-80' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memproses...
                        </>
                      ) : (
                        <>
                          Daftar Sekarang
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Privacy Policy */}
                  <p className="mt-4 text-xs text-green-600 text-center">
                    Dengan mendaftar, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.
                  </p>
                </>
              )}
            </form>
          </motion.div>

          {/* Info Pendaftaran */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-green-600/10 backdrop-blur-sm p-8 rounded-2xl border border-green-200 h-full">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Informasi Pendaftaran</h3>

              <div className="space-y-6">
                {/* Benefit List */}
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Apa yang Anda dapatkan:</h4>
                  <ul className="space-y-3">
                    {[
                      "Akses ke webinar live",
                      "Materi presentasi (PDF)",
                      "Sertifikat partisipasi",
                      "Rekaman webinar (untuk paket premium)",
                      "Bonus template eksklusif"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-green-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Info */}
                <div className="bg-white/80 p-5 rounded-xl border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Metode Pembayaran:</h4>
                  <p className="text-green-700 mb-3 text-sm">Untuk paket berbayar, pembayaran dapat dilakukan melalui:</p>
                  <div className="flex flex-wrap gap-3">
                    {['Bank Transfer', 'Credit Card', 'OVO', 'DANA', 'Gopay'].map((method, i) => (
                      <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimoni */}
                <div className="bg-white/80 p-5 rounded-xl border border-green-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold">
                        AS
                      </div>
                    </div>
                    <div>
                      <p className="text-green-800 italic mb-2">
                        "Webinar ini sangat informatif! Saya langsung bisa aplikasikan ilmunya di bisnis saya."
                      </p>
                      <p className="text-green-700 font-medium">Andi Susanto</p>
                      <p className="text-green-600 text-sm">CEO RetailKu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;