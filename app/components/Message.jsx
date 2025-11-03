'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const Message = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-xs"
        >
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-3 sm:p-4 rounded-lg shadow-lg relative">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-2 sm:ml-3 flex-1">
                <p className="text-xs sm:text-sm font-medium">
                  Landing Page <span className="font-bold">NH All One Bank</span>
                </p>
                <p className="text-[10px] sm:text-xs mt-1">
                  Versi 1.0 - New & New Theme. Hubungi developer jika ada pertanyaan.
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="ml-2 text-green-500 hover:text-green-700 flex-shrink-0"
                aria-label="Close"
              >
                <XMarkIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
            
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 10, ease: 'linear' }}
              className="h-0.5 sm:h-1 bg-green-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;