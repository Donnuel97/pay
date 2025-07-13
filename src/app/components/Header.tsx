import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Image src="/imgs/logo.png" alt="PayClick.ng" width={150} height={40} />
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-payclick-gray hover:text-payclick-blue">Home</a>
        <a href="#" className="text-payclick-gray hover:text-payclick-blue">About Us</a>
        <a href="#" className="text-payclick-gray hover:text-payclick-blue">FAQs</a>
      </nav>
      <Link
        href="/dashboard"
        className="bg-[#19C37D] text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-[#16a06a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#19C37D] focus:ring-offset-2"
        style={{ boxShadow: '0 4px 16px 0 rgba(25,195,125,0.15)' }}
      >
        Get Started
      </Link>
    </header>
  );
}