"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyPayClick from "./components/WhyPayClick";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the email submission, e.g., send to backend or redirect
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      {/* Email for Transaction History Section */}
      <section className="w-full flex justify-center py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg px-8 py-8 flex flex-col md:flex-row items-center gap-4 max-w-4xl w-full border border-blue-100"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1 text-payclick-dark">Access Your Transaction History</h3>
            <p className="text-gray-600 text-sm">Enter your email to view your past transactions securely.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#19C37D] w-full md:w-64 text-base"
            />
            <button
              type="submit"
              className="bg-[#19C37D] text-white px-6 py-3 rounded-lg font-semibold text-base shadow hover:bg-[#16a06a] transition w-full md:w-auto"
            >
              {submitted ? "Submitted!" : "Access History"}
            </button>
          </div>
        </form>
      </section>
      {/* End Email Section */}
      <Features />
      <WhyPayClick />
      <Partners />
      <Footer />
    </div>
  );
}
