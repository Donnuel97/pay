"use client";
import React from "react";
import { FaMobileAlt, FaWifi, FaTv, FaBolt, FaCreditCard, FaUniversity, FaMobile, FaShieldAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "airtime",
    title: "Airtime Recharge",
    icon: <FaMobileAlt className="text-4xl" />,
    description: "Top up your mobile airtime instantly for all major networks in Nigeria.",
    features: [
      "Instant delivery",
      "All networks supported",
      "24/7 availability",
      "Secure transactions",
      "No hidden fees"
    ],
    networks: ["MTN", "9mobile", "Airtel", "Glo"],
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: "data",
    title: "Data Bundles",
    icon: <FaWifi className="text-4xl" />,
    description: "Purchase affordable data bundles for all mobile networks with instant activation.",
    features: [
      "Affordable rates",
      "Multiple plans",
      "Instant activation",
      "Rollover options",
      "24/7 support"
    ],
    networks: ["MTN", "9mobile", "Airtel", "Glo"],
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: "cable",
    title: "Cable TV Subscription",
    icon: <FaTv className="text-4xl" />,
    description: "Pay for your cable TV subscriptions including DSTV, GOTV, and Startimes.",
    features: [
      "All providers supported",
      "Instant activation",
      "Flexible payment plans",
      "Auto-renewal options",
      "Customer support"
    ],
    providers: ["DSTV", "GOTV", "Startimes"],
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600"
  },
  {
    id: "electricity",
    title: "Electricity Bills",
    icon: <FaBolt className="text-4xl" />,
    description: "Pay your electricity bills for all major distribution companies in Nigeria.",
    features: [
      "All DisCos supported",
      "Instant confirmation",
      "Bill verification",
      "Payment history",
      "Receipt generation"
    ],
    providers: ["PHED", "IKEDC", "EKEDC", "AEDC"],
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-yellow-600"
  }
];

const paymentMethods = [
  {
    id: "card",
    title: "Credit/Debit Cards",
    icon: <FaCreditCard className="text-3xl" />,
    description: "Pay securely with your Visa, Mastercard, or Verve card",
    features: ["Instant processing", "Secure encryption", "All cards accepted"]
  },
  {
    id: "transfer",
    title: "Bank Transfer",
    icon: <FaUniversity className="text-3xl" />,
    description: "Transfer directly from your bank account",
    features: ["No additional fees", "Direct transfer", "24/7 available"]
  },
  {
    id: "ussd",
    title: "USSD",
    icon: <FaMobile className="text-3xl" />,
    description: "Pay using USSD codes from your mobile",
    features: ["Quick payment", "No internet needed", "Mobile banking"]
  }
];

export default function ServicesPage() {
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
          <Link href="/services" className="text-[#19C37D]">Services</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-[#19C37D]">How it Works</Link>
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
            Our <span className="text-[#19C37D]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our comprehensive range of digital payment services designed to make your life easier. 
            From airtime to electricity bills, we've got you covered.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition flex items-center gap-2">
              Start Using Our Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Supported Providers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {(service.networks || service.providers)?.map((provider) => (
                      <span key={provider} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <FaCheckCircle className="text-[#19C37D] text-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/dashboard" 
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition`}
                >
                  Get Started
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-6 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Payment Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method) => (
              <div key={method.id} className="text-center p-6 rounded-lg border border-gray-200 hover:border-[#19C37D] transition-colors">
                <div className="w-16 h-16 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {method.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center gap-2">
                      <FaCheckCircle className="text-[#19C37D] text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <FaShieldAlt className="text-3xl" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Secure & Reliable</h2>
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