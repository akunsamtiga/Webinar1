'use client';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  // Animasi ringan saja
  const fadeIn = shouldReduceMotion
    ? {}
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section
      id="register"
      className="py-12 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
      aria-labelledby="register-heading"
    >
      {/* Background Decorative — lebih kecil dan fixed */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-green-300 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="register-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
              Daftar Sekarang
            </span>
          </h2>
          <p className="text-lg text-green-700">
            Isi formulir untuk mengamankan tempat di webinar eksklusif ini.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-6 border border-green-100 flex-1"
            role="form"
          >
            {isSuccess ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={!shouldReduceMotion && { hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } } }}
                className="text-center py-8"
                aria-live="polite"
              >
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Pendaftaran Berhasil!</h3>
                <p className="text-green-700 mb-4">
                  Email konfirmasi sudah dikirim. Cek inbox atau folder spam.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-green-600 hover:text-green-800 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  Daftar lagi
                </button>
              </motion.div>
            ) : (
              <>
                <fieldset className="space-y-5">
                  <legend className="sr-only">Form Pendaftaran Webinar</legend>

                  {/* Nama */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-1">
                      Nama Lengkap <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Nama wajib diisi' })}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name ? 'border-red-400' : 'border-green-200'
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
                      placeholder="Nama lengkap"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                      Email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email wajib diisi',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Format email tidak valid' }
                      })}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email ? 'border-red-400' : 'border-green-200'
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
                      placeholder="email@contoh.com"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Telepon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-1">
                      WhatsApp <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', {
                        required: 'Nomor wajib diisi',
                        pattern: { value: /^[0-9]+$/, message: 'Hanya angka' },
                        minLength: { value: 10, message: 'Minimal 10 digit' }
                      })}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.phone ? 'border-red-400' : 'border-green-200'
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
                      placeholder="08xxxxxxxxxx"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Paket */}
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-green-800 mb-1">
                      Pilih Paket <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <select
                      id="plan"
                      {...register('plan', { required: 'Pilih paket' })}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.plan ? 'border-red-400' : 'border-green-200'
                      } focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
                    >
                      <option value="">-- Pilih --</option>
                      <option value="free">Early Bird (Gratis)</option>
                      <option value="premium">Premium</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                    {errors.plan && (
                      <p role="alert" className="mt-1 text-sm text-red-600">{errors.plan.message}</p>
                    )}
                  </div>

                  {/* Pertanyaan */}
                  <div>
                    <label htmlFor="questions" className="block text-sm font-medium text-green-800 mb-1">
                      Pertanyaan / Kebutuhan
                    </label>
                    <textarea
                      id="questions"
                      rows={3}
                      {...register('questions')}
                      className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                      placeholder="Tulis pertanyaan (opsional)"
                    />
                  </div>
                </fieldset>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!shouldReduceMotion && { scale: 1.02 }}
                  whileTap={!shouldReduceMotion && { scale: 0.98 }}
                  className={`mt-6 w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg transition-opacity ${
                    isSubmitting ? 'opacity-70' : ''
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"/>
                    </svg>
                  ) : (
                    <>
                      Daftar Sekarang
                      <ArrowRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                <p className="mt-4 text-xs text-green-600 text-center">
                  Dengan mendaftar, Anda menyetujui <a href="/privacy" className="underline">Kebijakan Privasi</a>.
                </p>
              </>
            )}
          </motion.form>

          {/* Info Pendaftaran */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-green-600/10 backdrop-blur-sm p-6 rounded-2xl border border-green-100 flex-1"
            aria-labelledby="info-heading"
          >
            <h3 id="info-heading" className="text-2xl font-bold text-green-900 mb-4">Informasi Pendaftaran</h3>
            <ul className="space-y-3 mb-6" role="list">
              {[
                "Akses ke webinar live",
                "Materi presentasi (PDF)",
                "Sertifikat partisipasi",
                "Rekaman webinar (premium)",
                "Bonus template eksklusif"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
                  <span className="text-green-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/80 p-4 rounded-lg border border-green-200 mb-6">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Metode Pembayaran</h4>
              <p className="text-green-700 text-sm mb-2">Transfer bank, Kartu kredit, OVO, DANA, GoPay.</p>
            </div>

            <div className="bg-white/80 p-4 rounded-lg border border-green-200">
              <blockquote className="italic text-green-800">
                “Webinar ini sangat membantu! Materinya langsung bisa diterapkan.”
              </blockquote>
              <cite className="block mt-2 text-green-700 font-medium">— Andi Susanto, CEO RetailKu</cite>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Registration;
