import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 1. الهيدر */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-black uppercase">
            INSURIFY
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold">
            <button className="bg-white border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all">
              Log in
            </button>
          </nav>
        </div>
      </header>

      {/* 2. القسم الرئيسي */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold mb-8">
            Drivers in UAE can save up to $1,100 a year
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Compare Cheap Car <br /> Insurance Quotes
          </h1>
          
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Unlock savings and exclusive discounts with instant, real-time rates.
          </p>

          {/* 3. صندوق Zip Code */}
          <div className="max-w-md mx-auto bg-white p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="p-6">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="w-full text-2xl font-bold py-3 outline-none border-b-2 border-gray-100 focus:border-black transition-colors mb-6"
              />
              <button className="w-full h-16 bg-black text-white rounded-2xl font-bold text-xl hover:scale-[1.02] transition-all shadow-xl shadow-black/20">
                Start Service
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
