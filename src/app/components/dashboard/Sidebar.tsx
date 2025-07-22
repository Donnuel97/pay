import React from "react";
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
  <div className="flex flex-col w-full h-full">
    {/* Navigation Section */}
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Navigation</h3>
      <nav className="flex flex-col gap-2 text-[16px] font-medium mb-4">
        <Link href="/" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Home</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Services</Link>
        <Link href="/how-it-works" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">How it Works</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">About Us</Link>
        <Link href="/faq" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">FAQs</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#19C37D] px-3 py-2 rounded transition">Contact</Link>
      </nav>
    </div>
    <hr className="border-t border-[#b3e0fc] my-2" />
    {/* Services Section */}
    <div>
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Services</h3>
      <div className="flex flex-col gap-2">
        {sidebarLinks.map((link, idx) => (
          <button
            key={link.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-150 w-full text-left border-2 ${activeSidebar === idx ? "bg-[#1A56DB] text-white border-[#1A56DB] shadow-lg" : "bg-white/80 text-[#1A56DB] border-transparent hover:bg-[#e0f2fe] hover:border-[#b3e0fc]"}`}
            onClick={() => { setActiveSidebar(idx); setActiveStep(0); }}
          >
            <span className={`text-2xl ${activeSidebar === idx ? "text-white" : "text-[#1A56DB]"}`}>{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar; 