"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Download PayClick App",
    description: "Available soon on Play Store & App Store",
  },
  {
    id: 2,
    title: "Sign Up & Verify",
    description: "Quick phone number verification",
  },
  {
    id: 3,
    title: "Access Services",
    description: "Airtime, Data, Cable TV, Power",
  },
  {
    id: 4,
    title: "Track Transactions",
    description: "View history easily in-app",
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-20 flex justify-center items-center" style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%)' }}>
      <div className="container mx-auto">
        <div
          className="w-full rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-8 items-center backdrop-blur-md"
          style={{ background: 'rgba(255,255,255,0.75)' }}
        >
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src="/imgs/phone-hand.png" alt="Phone Image" width={500} height={900} className="rounded-lg" />
            </motion.div>
          </div>
          <div className="space-y-8 w-full">
            <h2 className="text-4xl font-bold text-payclick-dark">Simple. Secure. Swift.</h2>
            <p className="text-payclick-gray">To get discounts;</p>
            <div className="flex flex-col space-y-6 w-full">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex items-center bg-[#19C37D] rounded-full px-6 py-4 w-full shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full text-2xl font-bold text-black mr-6 border-4 border-[#19C37D]">
                    {step.id}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                    <span className="font-bold text-lg md:text-xl text-[#0A2540] mr-4">{step.title}</span>
                    <span className="text-white text-base md:text-lg text-right w-full md:w-auto">{step.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Green abstract shape, bottom right */}
      <div className="absolute right-0 bottom-0 w-[340px] h-[220px] bg-green-400 rounded-full opacity-40 blur-3xl z-0" style={{transform: 'translate(30%, 30%) rotate(10deg)'}} />
    </section>
  );
}