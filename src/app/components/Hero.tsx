"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faWifi, faTv, faBolt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleServiceClick = () => {
    setShowModal(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowModal(false);
    // Here you could save the email to state or context for tracking
  };

  return (
    <main className="relative overflow-hidden w-full py-20 flex justify-center items-center px-4" style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%)' }}>
      <div className="container mx-auto">
        <div
          className="w-full rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-8 items-center backdrop-blur-md"
          style={{ background: 'rgba(255,255,255,0.75)' }}
        >
          <div className="space-y-6">
            <motion.h1
              className="text-5xl font-bold leading-tight text-payclick-dark"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Pay Smarter, Live Better with PayClick!
            </motion.h1>
            <motion.p
              className="text-payclick-gray"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              A faster way to recharge, pay bills & unlock amazing discounts.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="text-center transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={handleServiceClick}>
                <div className="bg-red-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faMobileAlt} size="lg" className="text-red-600" />
                </div>
                <p className="text-sm mt-1">Airtime</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={handleServiceClick}>
                <div className="bg-green-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faWifi} size="lg" className="text-green-600" />
                </div>
                <p className="text-sm mt-1">Data</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={handleServiceClick}>
                <div className="bg-gray-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faTv} size="lg" className="text-gray-600" />
                </div>
                <p className="text-sm mt-1">Cable</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={handleServiceClick}>
                <div className="bg-yellow-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBolt} size="lg" className="text-yellow-600" />
                </div>
                <p className="text-sm mt-1">Power</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={handleServiceClick}>
                <div className="bg-blue-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faEllipsisH} size="lg" className="text-blue-600" />
                </div>
                <p className="text-sm mt-1">More</p>
              </div>
            </motion.div>
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <h3 className="font-bold text-payclick-dark">Get Our App</h3>
              <p className="text-payclick-gray text-sm">You can use our App for Better experience on smartphones</p>
              <div className="flex space-x-4 mt-4">
                <Image src="/imgs/appstore.png" alt="App Store" width={128} height={40} />
                <Image src="/imgs/googleplay.png" alt="Google Play" width={128} height={40} />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Placeholder for hero image */}
            <Image src="/imgs/header.png" alt="Hero Image" width={600} height={400} className="rounded-lg" />
          </motion.div>
        </div>
      </div>
      {/* Green abstract shape, bottom left */}
      <div className="absolute left-0 bottom-0 w-[420px] h-[320px] bg-green-400 rounded-full opacity-50 blur-3xl z-0" style={{transform: 'translate(-30%, 30%) rotate(-15deg)'}} />
      {/* Green abstract shape, top right (lighter, for balance) */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-green-200 rounded-full opacity-40 blur-3xl z-0" style={{transform: 'translate(30%, -20%)'}} />
      {/* Modal Popup for Email Verification */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative">
            <button className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4 text-payclick-dark">Verify Your Email</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#19C37D] text-base"
                required
              />
              {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
              <button type="submit" className="w-full bg-[#19C37D] text-white font-bold py-3 rounded-lg hover:bg-[#16a06a] transition">Verify & Continue</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}