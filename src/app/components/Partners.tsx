"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Partners() {
  // Add more partner logos as needed
  const partners = [
    "/globe.svg",
    "/file.svg",
    "/window.svg",
    "/globe.svg",
    "/file.svg",
    "/window.svg"
  ];
  return (
    <section className="w-full py-20 bg-transparent overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-payclick-dark">Our Partners</h2>
      <div className="w-full relative">
        <div className="w-full flex items-center">
          <div className="carousel-track flex items-center animate-carousel whitespace-nowrap">
            {partners.map((src, idx) => (
              <div key={idx} className="inline-block mx-12">
                <Image src={src} alt={`Partner ${idx + 1}`} width={120} height={60} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((src, idx) => (
              <div key={partners.length + idx} className="inline-block mx-12">
                <Image src={src} alt={`Partner ${idx + 1}`} width={120} height={60} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-carousel {
          display: flex;
          animation: carousel 30s linear infinite;
        }
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}