"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyPayClick from "./components/WhyPayClick";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  // Removed Access Your Transaction History section
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      {/* Removed Access Your Transaction History section */}
      <Features />
      <WhyPayClick />
      <Partners />
      <Footer />
    </div>
  );
}
