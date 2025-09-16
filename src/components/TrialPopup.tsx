'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TrialPopupProps {
  visible: boolean;
  onClose: () => void;
}

const TrialPopup: React.FC<TrialPopupProps> = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  const generat_text =
    "You’ll be connected to our WhatsApp representative who will provide you with all the details you need to get started. They'll also guide you through the process of subscribing to the service.";

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white max-w-md w-full p-6 rounded-2xl border border-blue-500 shadow-2xl text-center relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          Let&#39;s Get You Set Up
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          {generat_text}
        </p>
        <a
          href="https://wa.me/923020548889"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Talk to Our Representative
        </a>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default TrialPopup;
