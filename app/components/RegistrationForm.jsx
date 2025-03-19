"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Nomor telepon tidak valid";
    }
    if (!formData.occupation.trim()) newErrors.occupation = "Pekerjaan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registrasi berhasil!");
      setFormData({ name: "", email: "", phone: "", occupation: "" });
      setErrors({});
    }
  };

  return (
    <section id="registration-form" className="relative bg-gray-50 py-16 px-6 sm:px-10 md:px-16 lg:px-24 text-gray-900">
      {/* Judul Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Form Pendaftaran
      </motion.h2>

      {/* Form Registrasi */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Gradient Blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>

        {/* Input Nama */}
        <div className="mb-6 relative">
          <label className="block font-medium text-gray-700">Nama Lengkap</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Input Email */}
        <div className="mb-6 relative">
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Input Nomor Telepon */}
        <div className="mb-6 relative">
          <label className="block font-medium text-gray-700">Nomor Telepon</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan nomor telepon"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Input Pekerjaan */}
        <div className="mb-6 relative">
          <label className="block font-medium text-gray-700">Pekerjaan</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan pekerjaan"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          />
          {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
        </div>

        {/* Tombol Submit */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-tr from-green-900 to-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          whileTap={{ scale: 0.95 }}
        >
          Daftar Sekarang
        </motion.button>
      </motion.form>
    </section>
  );
}
