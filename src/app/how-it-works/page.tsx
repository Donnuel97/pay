"use client";
import React from "react";
import { FaMobileAlt, FaWifi, FaTv, FaBolt, FaUser, FaCreditCard, FaCheckCircle, FaArrowRight, FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Select from our range of services: Airtime, Data, Cable TV, or Electricity bills.",
    icon: <FaUser className="text-3xl" />,
    details: [
      "Browse available services",
      "Select your preferred option",
      "View service details and pricing"
    ]
  },
  {
    number: "02",
    title: "Enter Details",
    description: "Provide the necessary information for your selected service.",
    icon: <FaMobileAlt className="text-3xl" />,
    details: [
      "Enter phone number, meter number, or smart card number",
      "Specify amount or select data plan",
      "Add optional email for receipt"
    ]
  },
  {
    number: "03",
    title: "Confirm Transaction",
    description: "Review your transaction details before proceeding to payment.",
    icon: <FaCheckCircle className="text-3xl" />,
    details: [
      "Verify all information is correct",
      "Check transaction amount",
      "Confirm recipient details"
    ]
  },
  {
    number: "04",
    title: "Make Payment",
    description: "Choose your preferred payment method and complete the transaction.",
    icon: <FaCreditCard className="text-3xl" />,
    details: [
      "Select payment method (Card, Transfer, USSD)",
      "Enter payment details securely",
      "Complete the transaction"
    ]
  },
  {
    number: "05",
    title: "Get Confirmation",
    description: "Receive instant confirmation and receipt for your transaction.",
    icon: <FaCheckCircle className="text-3xl" />,
    details: [
      "Instant transaction confirmation",
      "Download or share receipt",
      "Service activation notification"
    ]
  }
];

const services = [
  {
    title: "Airtime Recharge",
    icon: <FaMobileAlt className="text-4xl" />,
    description: "Top up your mobile airtime instantly",
    process: [
      "Select network provider",
      "Enter phone number",
      "Specify amount",
      "Make payment",
      "Receive instant credit"
    ]
  },
  {
    title: "Data Bundles",
    icon: <FaWifi className="text-4xl" />,
    description: "Purchase data bundles for all networks",
    process: [
      "Choose network provider",
      "Select data plan",
      "Enter phone number",
      "Complete payment",
      "Data activated instantly"
    ]
  },
  {
    title: "Cable TV",
    icon: <FaTv className="text-4xl" />,
    description: "Pay for cable TV subscriptions",
    process: [
      "Select cable provider",
      "Enter smart card number",
      "Choose subscription plan",
      "Make payment",
      "Service activated immediately"
    ]
  },
  {
    title: "Electricity Bills",
    icon: <FaBolt className="text-4xl" />,
    description: "Pay electricity bills online",
    process: [
      "Choose electricity provider",
      "Enter meter number",
      "Specify amount",
      "Complete payment",
      "Receive payment confirmation"
    ]
  }
];

const benefits = [
  {
    icon: <FaClock className="text-3xl" />,
    title: "24/7 Availability",
    description: "Access our services anytime, anywhere. No more waiting for business hours."
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Secure Transactions",
    description: "Your data and payments are protected with bank-level security encryption."
  },
  {
    icon: <FaCheckCircle className="text-3xl" />,
    title: "Instant Processing",
    description: "Most transactions are completed instantly with immediate confirmation."
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "24/7 Support",
    description: "Our customer support team is available round the clock to help you."
  }
];

export default function HowItWorksPage() {
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
          <Link href="/how-it-works" className="text-[#19C37D]">How it Works</Link>
          <Link href="/about" className="text-gray-700 hover:text-[#19C37D]">About Us</Link>
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
            How <span className="text-[#19C37D]">It Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get started with PayClick in just a few simple steps. Our platform makes digital payments 
            quick, secure, and hassle-free.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition flex items-center gap-2">
              Start Using PayClick
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Simple 4-Step Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#19C37D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 px-6 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Process</h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-[#19C37D] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#19C37D] mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{step.icon}</div>
                      <p className="text-gray-600 font-medium">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PayClick?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <FaShieldAlt className="text-3xl" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Security & Trust</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your security is our top priority. We use industry-standard encryption and security measures 
            to protect your transactions and personal information.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6">
              <h3 className="font-semibold mb-2">SSL Encryption</h3>
              <p className="text-gray-600">All data is encrypted using 256-bit SSL encryption</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">PCI Compliance</h3>
              <p className="text-gray-600">We are PCI DSS compliant for secure payment processing</p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Round-the-clock security monitoring and fraud detection</p>
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