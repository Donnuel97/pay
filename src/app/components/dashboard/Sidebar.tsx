import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarLink {
  icon: React.ReactNode;
  label: string;
}

interface SidebarProps {
  sidebarLinks: SidebarLink[];
  activeSidebar: number;
  setActiveSidebar: (idx: number) => void;
  setActiveStep: (idx: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarLinks, activeSidebar, setActiveSidebar, setActiveStep }) => (
  <aside className="hidden md:flex flex-col w-64 bg-white/80 border-r border-gray-200 py-10 px-6 space-y-8 shadow-lg min-h-screen">
    {/* Navigation Section */}
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Navigation</h3>
      <nav className="flex flex-col gap-2 text-[16px] font-medium mb-2">
        <Link href="/" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Home</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Services</Link>
        <Link href="/how-it-works" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">How it Works</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">About Us</Link>
        <Link href="/faq" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">FAQs</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Contact</Link>
      </nav>
    </div>
    <hr className="border-t border-gray-200 my-2" />
    {/* Services Section */}
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Services</h3>
      <div className="flex flex-col gap-2">
        {sidebarLinks.map((link, idx) => (
          <button
            key={link.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-150 w-full text-left ${activeSidebar === idx ? "bg-[#19C37D] text-white" : "text-gray-700 hover:bg-[#e0f2fe]"}`}
            onClick={() => { setActiveSidebar(idx); setActiveStep(0); }}
          >
            <span className="text-2xl">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar; 