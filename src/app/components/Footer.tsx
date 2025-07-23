export default function Footer() {
  return (
    <footer className="w-full bg-[#181A20] text-white pt-20 pb-12 border-t-4 border-[#23262F]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Top Row: Logo and Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 pb-12 border-b border-[#23262F]">
          {/* Logo and Legal */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 mb-3">
              <img src="/imgs/logo2.png" alt="PayClick.ng" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">PayClick.ng</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[#19C37D]">
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Fair Use Policy</a>
            </div>
            <div className="text-xs text-gray-400 mt-3">This website is developed by ShamzyDoings © 2024. All Right Reserved.</div>
          </div>
          {/* Navigation and Social */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6 text-base font-semibold">
              <a href="#" className="hover:text-[#19C37D]">HOME</a>
              <a href="#" className="hover:text-[#19C37D]">ABOUT US</a>
              <a href="#" className="hover:text-[#19C37D]">FAQS</a>
              <a href="#" className="hover:text-[#19C37D]">CONTACT US</a>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f text-xl hover:text-[#19C37D]"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter text-xl hover:text-[#19C37D]"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-xl hover:text-[#19C37D]"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube text-xl hover:text-[#19C37D]"></i></a>
              <a href="#" aria-label="Tiktok"><i className="fab fa-tiktok text-xl hover:text-[#19C37D]"></i></a>
            </div>
            <div className="flex flex-col items-center mt-6">
              <span className="text-sm mb-3">Get Our App</span>
              <div className="flex gap-3">
                <img src="/imgs/appstore.png" alt="App Store" className="h-10 w-auto" />
                <img src="/imgs/googleplay.png" alt="Google Play" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}