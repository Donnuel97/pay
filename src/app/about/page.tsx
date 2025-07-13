"use client";
import React from "react";
import { FaHandshake, FaArrowRight, FaShieldAlt, FaRocket, FaBullseye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Security First",
    description: "Your security is our top priority. We use industry-standard encryption and security measures."
  },
  {
    icon: <FaHandshake />,
    title: "Trust & Reliability",
    description: "We build trust through consistent, reliable service and transparent operations."
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    description: "We continuously innovate to provide the best user experience and latest features."
  }
];

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "👨‍💼",
    bio: "Passionate about financial technology and making digital payments accessible to everyone."
  },
  {
    name: "Jane Smith",
    role: "CTO",
    avatar: "👩‍💻",
    bio: "Leading our technical team to build secure and scalable payment solutions."
  },
  {
    name: "Mike Johnson",
    role: "Head of Operations",
    avatar: "👨‍💼",
    bio: "Ensuring smooth operations and excellent customer service across all our services."
  }
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "₦500M+", label: "Transactions Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Customer Support" }
];

export default function AboutPage() {
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
          <Link href="/about" className="text-[#19C37D]">About Us</Link>
          <Link href="/faq" className="text-gray-700 hover:text-[#19C37D]">FAQs</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#19C37D]">Contact</Link>
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
            About <span className="text-[#19C37D]">PayClick</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re revolutionizing digital payments in Nigeria, making it easier for everyone to manage their bills and services.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition flex items-center gap-2">
              Start Using PayClick
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To simplify digital payments for every Nigerian by providing a secure, reliable, and user-friendly platform 
              that makes managing bills and services effortless.
            </p>
            <p className="text-lg text-gray-600">
              We believe that financial technology should be accessible to everyone, regardless of their technical expertise 
              or location. Our goal is to bridge the digital divide and empower Nigerians with the tools they need to 
              manage their digital lives effectively.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <FaBullseye className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Empowering Digital Payments</h3>
            <p className="text-gray-600">
              Making financial services accessible to everyone across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              PayClick was founded in 2020 with a simple vision: to make digital payments accessible to every Nigerian. 
              What started as a small team of passionate developers has grown into a trusted platform serving thousands 
              of users across the country.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We recognized the challenges that many Nigerians face when trying to pay for essential services like airtime, 
              data, cable TV, and electricity. Long queues, inconvenient locations, and limited payment options were 
              common frustrations. We set out to solve these problems by creating a comprehensive digital payment solution.
            </p>
            <p className="text-lg text-gray-600">
              Today, PayClick is proud to serve as a bridge between traditional payment methods and the digital future, 
              helping Nigerians embrace the convenience of online payments while maintaining the security and reliability 
              they expect.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-500">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#19C37D] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#19C37D] text-white">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join the PayClick Family</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of digital payments with PayClick.
          </p>
          <Link 
            href="/dashboard" 
            className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition inline-flex items-center gap-2"
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