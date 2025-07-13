"use client";
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaMobileAlt, FaWifi, FaTv, FaBolt, FaCreditCard, FaShieldAlt, FaHeadset, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: <FaHeadset className="text-2xl" />,
    questions: [
      {
        question: "What is PayClick?",
        answer: "PayClick is a digital payment platform that allows you to pay for airtime, data bundles, cable TV subscriptions, and electricity bills online. We provide secure, instant, and convenient payment solutions for all your daily needs."
      },
      {
        question: "Is PayClick safe to use?",
        answer: "Yes, PayClick is completely safe to use. We use industry-standard SSL encryption to protect your data and transactions. We are also PCI DSS compliant and have multiple security measures in place to ensure your information is secure."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods including credit/debit cards (Visa, Mastercard, Verve), bank transfers, and USSD payments. All payment methods are secure and processed instantly."
      },
      {
        question: "Do you charge any fees?",
        answer: "PayClick charges minimal processing fees that are clearly displayed before each transaction. There are no hidden fees, and you'll always see the exact amount you'll be charged before confirming your payment."
      }
    ]
  },
  {
    id: "airtime",
    title: "Airtime Recharge",
    icon: <FaMobileAlt className="text-2xl" />,
    questions: [
      {
        question: "Which networks do you support for airtime recharge?",
        answer: "We support all major Nigerian mobile networks including MTN, 9mobile, Airtel, and Glo. You can recharge airtime for any of these networks instantly."
      },
      {
        question: "How long does airtime recharge take?",
        answer: "Airtime recharges are processed instantly. You should receive your airtime credit within 1-2 minutes of successful payment confirmation."
      },
      {
        question: "What is the minimum amount for airtime recharge?",
        answer: "The minimum amount for airtime recharge is ₦50. You can recharge any amount above this limit."
      },
      {
        question: "Can I recharge airtime for someone else?",
        answer: "Yes, you can recharge airtime for any Nigerian phone number. Simply enter the recipient's phone number during the recharge process."
      }
    ]
  },
  {
    id: "data",
    title: "Data Bundles",
    icon: <FaWifi className="text-2xl" />,
    questions: [
      {
        question: "What data plans are available?",
        answer: "We offer various data plans ranging from 500MB to 10GB and more, depending on the network provider. Plans and prices may vary by network."
      },
      {
        question: "How long do data bundles last?",
        answer: "Data bundle validity depends on the plan you choose. Most plans are valid for 30 days, but some may have different validity periods. Check the plan details before purchase."
      },
      {
        question: "Can I buy data for any network?",
        answer: "Yes, you can purchase data bundles for MTN, 9mobile, Airtel, and Glo networks. Simply select your preferred network and data plan."
      },
      {
        question: "What happens if my data purchase fails?",
        answer: "If your data purchase fails, your payment will be refunded within 24-48 hours. You can also contact our support team for immediate assistance."
      }
    ]
  },
  {
    id: "cable",
    title: "Cable TV",
    icon: <FaTv className="text-2xl" />,
    questions: [
      {
        question: "Which cable TV providers do you support?",
        answer: "We support major cable TV providers including DSTV, GOTV, and Startimes. You can pay for subscriptions, renewals, and upgrades."
      },
      {
        question: "How do I find my smart card number?",
        answer: "Your smart card number is usually displayed on your decoder or can be found in your account settings. It's typically a 10-12 digit number."
      },
      {
        question: "Can I pay for cable TV subscriptions in installments?",
        answer: "Currently, we offer full payment for cable TV subscriptions. Installment payment options may be available in the future."
      },
      {
        question: "How long does cable TV payment take to reflect?",
        answer: "Cable TV payments are processed instantly and should reflect on your account within 5-10 minutes of successful payment."
      }
    ]
  },
  {
    id: "electricity",
    title: "Electricity Bills",
    icon: <FaBolt className="text-2xl" />,
    questions: [
      {
        question: "Which electricity distribution companies do you support?",
        answer: "We support major electricity distribution companies including PHED, IKEDC, EKEDC, and AEDC. More companies will be added soon."
      },
      {
        question: "How do I find my meter number?",
        answer: "Your meter number is displayed on your electricity meter. It's usually a 10-12 digit number that uniquely identifies your meter."
      },
      {
        question: "Can I pay electricity bills for any amount?",
        answer: "Yes, you can pay any amount for your electricity bill. The minimum amount is ₦100, and you can pay partial or full amounts."
      },
      {
        question: "How long does electricity payment take to reflect?",
        answer: "Electricity payments are processed instantly and should reflect on your account within 15-30 minutes of successful payment."
      }
    ]
  },
  {
    id: "payment",
    title: "Payment & Security",
    icon: <FaCreditCard className="text-2xl" />,
    questions: [
      {
        question: "Are my payment details secure?",
        answer: "Yes, your payment details are completely secure. We use bank-level encryption and never store your card details on our servers."
      },
      {
        question: "What should I do if my payment fails?",
        answer: "If your payment fails, check your payment method and try again. If the problem persists, contact our support team for assistance."
      },
      {
        question: "Can I get a refund if I make a mistake?",
        answer: "Refunds are processed on a case-by-case basis. Contact our support team immediately if you notice an error in your transaction."
      },
      {
        question: "Do you store my personal information?",
        answer: "We only store information necessary for transaction processing and customer support. Your data is protected and never shared with third parties."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("general");

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
          <Link href="/faq" className="text-[#19C37D]">FAQs</Link>
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
            Frequently Asked <span className="text-[#19C37D]">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about PayClick services, payments, and account management.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition flex items-center gap-2">
              Start Using PayClick
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-6 bg-white">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  activeCategory === category.id
                    ? 'border-[#19C37D] bg-[#19C37D] text-white'
                    : 'border-gray-200 bg-white hover:border-[#19C37D] hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm opacity-75">{category.questions.length} questions</p>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
                <div className="px-8 pt-6 pb-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-8 h-8 bg-[#19C37D] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                </div>
                {category.questions.map((q, qIdx) => (
                  <div key={qIdx} className="border-t border-gray-100">
                    <button
                      onClick={() => toggleQuestion(category.id, qIdx)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#19C37D] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                          Q
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-2">{q.question}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              {category.icon}
                              {category.title}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`transform transition-transform ${expandedQuestions[`${category.id}-${qIdx}`] ? 'rotate-180' : ''}`}>
                        <FaChevronDown className="text-gray-400" />
                      </div>
                    </button>
                    {expandedQuestions[`${category.id}-${qIdx}`] && (
                      <div className="px-8 pb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                            A
                          </div>
                          <div className="text-gray-600 leading-relaxed">
                            {q.answer}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#19C37D] rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <FaHeadset className="text-3xl" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#19C37D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#16a06a] transition"
            >
              Contact Support
            </Link>
            <Link 
              href="/dashboard" 
              className="border-2 border-[#19C37D] text-[#19C37D] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#19C37D] hover:text-white transition"
            >
              Start Using PayClick
            </Link>
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