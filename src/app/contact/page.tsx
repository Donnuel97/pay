"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset, FaArrowRight, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] via-white to-[#e0f2fe]">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/imgs/logo.png" alt="PayClick.ng" width={140} height={36} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-[16px] font-medium">
          <Link href="/" className="text-gray-700 hover:text-[#19C37D]">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#19C37D]">Services</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-[#19C37D]">How it Works</Link>
          <Link href="/about" className="text-gray-700 hover:text-[#19C37D]">About Us</Link>
          <Link href="/faq" className="text-gray-700 hover:text-[#19C37D]">FAQs</Link>
          <Link href="/contact" className="text-[#19C37D]">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="bg-[#19C37D] text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-[#16a06a] transition">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-[#19C37D]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Have questions or need support? We're here to help you 24/7. Reach out to us through any of the channels below.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition flex items-center gap-2">
              Start Using PayClick
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#19C37D] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#16a06a] transition flex items-center justify-center gap-2"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    123 Victoria Island, Lagos, Nigeria<br />
                    P.O. Box 12345, Lagos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone Numbers</h3>
                  <p className="text-gray-600">
                    +234 800 PAYCLICK<br />
                    +234 901 234 5678
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-600">
                    info@payclick.ng<br />
                    support@payclick.ng
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white hover:bg-[#16a06a] transition">
                  <FaFacebook />
                </a>
                <a href="#" className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white hover:bg-[#16a06a] transition">
                  <FaTwitter />
                </a>
                <a href="#" className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white hover:bg-[#16a06a] transition">
                  <FaInstagram />
                </a>
                <a href="#" className="w-12 h-12 bg-[#19C37D] rounded-full flex items-center justify-center text-white hover:bg-[#16a06a] transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#19C37D]">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust PayClick for their digital payment needs.
          </p>
          <Link 
            href="/dashboard" 
            className="bg-white text-[#19C37D] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Start Using PayClick
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/imgs/logo.png" alt="PayClick.ng" width={120} height={32} className="mb-4" />
              <p className="text-gray-400">
                Your trusted partner for digital payments in Nigeria.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white">Airtime Recharge</Link></li>
                <li><Link href="/services" className="hover:text-white">Data Bundles</Link></li>
                <li><Link href="/services" className="hover:text-white">Cable TV</Link></li>
                <li><Link href="/services" className="hover:text-white">Electricity Bills</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How it Works</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Live Chat</Link></li>
                <li><Link href="/contact" className="hover:text-white">Email Support</Link></li>
                <li><Link href="/contact" className="hover:text-white">Phone Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PayClick.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 