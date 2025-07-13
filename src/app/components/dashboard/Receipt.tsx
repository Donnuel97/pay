import React from "react";

const Receipt: React.FC = () => (
  <>
    <h2 className="text-2xl font-bold text-payclick-dark mb-2">View Receipt</h2>
    <div className="flex flex-col items-center mb-4">
      <div className="w-40 h-56 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
        <span className="text-gray-400">[Receipt Image]</span>
      </div>
      <div className="flex gap-3 mt-2">
        <button className="bg-[#19C37D] text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-[#16a06a] transition">Share Receipt</button>
        <button className="bg-[#1A56DB] text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-[#1746a2] transition">Buy Another</button>
      </div>
    </div>
    <hr className="my-6 border-t border-gray-200" />
  </>
);

export default Receipt; 