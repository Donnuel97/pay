"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faWifi, faTv, faBolt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <main className="relative bg-transparent overflow-hidden w-full py-20 flex justify-center items-center px-4">
      <div className="container mx-auto">
        <div
          className="w-full rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-8 items-center backdrop-blur-md"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(224,242,254,0.6) 50%, rgba(255,255,255,0.8) 100%)',
            border: '1px solid rgba(224,242,254,0.3)'
          }}
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
              <div className="text-center transition-transform duration-200 hover:scale-110">
                <div className="bg-red-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faMobileAlt} size="lg" className="text-red-600" />
                </div>
                <p className="text-sm mt-1">Airtime</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110">
                <div className="bg-green-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faWifi} size="lg" className="text-green-600" />
                </div>
                <p className="text-sm mt-1">Data</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110">
                <div className="bg-gray-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faTv} size="lg" className="text-gray-600" />
                </div>
                <p className="text-sm mt-1">Cable</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110">
                <div className="bg-yellow-200 p-3 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBolt} size="lg" className="text-yellow-600" />
                </div>
                <p className="text-sm mt-1">Power</p>
              </div>
              <div className="text-center transition-transform duration-200 hover:scale-110">
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
      {/* Green abstract shape */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-green-400 rounded-full opacity-60 blur-3xl z-0" style={{transform: 'translate(30%, -20%)'}} />
    </main>
  );
}