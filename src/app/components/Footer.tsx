export default function Footer() {
  return (
    <footer className="w-full bg-[#181A20] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-lg text-[#1A56DB] mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#19C37D] hover:underline">Home</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Services</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">How it works</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">About Us</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">FAQs</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h5 className="font-bold text-lg text-[#1A56DB] mb-4">Social Media Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#19C37D] hover:underline">Facebook</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Instagram</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">WhatsApp</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Twitter</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Snapchat</a></li>
            <li><a href="#" className="text-[#19C37D] hover:underline">Tiktok</a></li>
          </ul>
        </div>
        {/* Contact Us & Subscribe */}
        <div>
          <h5 className="font-bold text-lg text-[#1A56DB] mb-4">Contact Us</h5>
          <p className="text-[#19C37D] mb-2">contact@ShamzyDoings.com</p>
          <div className="flex space-x-3 mb-4">
            {/* Social icons (replace with real icons as needed) */}
            <span className="w-7 h-7 bg-[#19C37D] rounded-full flex items-center justify-center text-[#181A20] text-xl">f</span>
            <span className="w-7 h-7 bg-[#19C37D] rounded-full flex items-center justify-center text-[#181A20] text-xl">i</span>
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input type="email" placeholder="Email Address" className="flex-1 px-4 py-2 rounded bg-[#23262F] border border-[#23262F] text-white focus:outline-none" />
            <button type="submit" className="px-6 py-2 rounded bg-[#1A56DB] text-white font-semibold hover:bg-[#1746a2] transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-[#23262F]">
        This website is developed by ShamzyDoings © 2024, All Right Reserved.
      </div>
    </footer>
  );
}