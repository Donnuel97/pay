"use client";
import Image from "next/image";


export default function Partners() {
  // Use images from imgs/carousel folder
  const partners = [
    "/imgs/carousel/Logo.svg.png",
    "/imgs/carousel/airtel_logo.svg.png",
    "/imgs/carousel/gotv_entertaining_africa_logo.svg.png",
    "/imgs/carousel/layer1.png",
    "/imgs/carousel/image 2.png",
    "/imgs/carousel/aedcelectricity_icon.jpeg.png",
    "/imgs/carousel/bedc_electricity_plc_logo.png.png",
    "/imgs/carousel/Ellipse 8.png"
  ];
  return (
    <section className="w-full py-20 bg-transparent overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-payclick-dark">Our Partners</h2>
      <div className="w-full relative">
        <div className="w-full flex items-center">
          <div className="carousel-track flex items-center animate-carousel whitespace-nowrap">
            {partners.map((src, idx) => (
              <div key={idx} className="inline-block mx-12">
                <Image src={src} alt={`Partner ${idx + 1}`} width={180} height={90} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((src, idx) => (
              <div key={partners.length + idx} className="inline-block mx-12">
                <Image src={src} alt={`Partner ${idx + 1}`} width={250} height={250} />
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