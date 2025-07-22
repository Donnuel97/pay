"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyPayClick() {
  return (
    <section className="relative w-full py-20 flex justify-center items-center" style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%)' }}>
      <div className="container mx-auto">
        <div
          className="w-full rounded-3xl shadow-2xl p-10 backdrop-blur-md transition-transform duration-200 hover:scale-105"
          style={{ background: 'rgba(255,255,255,0.75)' }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-payclick-dark"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why PayClick?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-0 items-center justify-end">
            <motion.div
              className="space-y-4 text-right"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="text-2xl font-bold text-payclick-dark">More than just Payments</h3>
              <ul className="list-disc list-inside space-y-2 text-payclick-gray">
                <li>Instant KYC verification</li>
                <li>Fast payments</li>
                <li>Track all history easily</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image src="/imgs/friends.png" alt="Illustration" width={500} height={300} className="rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Green abstract shape, bottom left */}
      <div className="absolute left-0 bottom-0 w-[320px] h-[180px] bg-green-400 rounded-full opacity-40 blur-3xl z-0" style={{transform: 'translate(-30%, 30%) rotate(-10deg)'}} />
    </section>
  );
}