import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-slate-200">
      
      {/* 1. الهيدر (Header) */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-black">
            INSURIFY
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold">
            <a href="#" className="hover:text-gray-500 transition">Car Insurance</a>
            <a href="#" className="hover:text-gray-500 transition">Home Insurance</a>
            <button className="bg-white border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              Log in
            </button>
          </nav>
        </div>
      </header>

      {/* 2. القسم الرئيسي (Hero Section) */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* إشعار علوي بسيط */}
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Drivers in UAE can save up to $1,100 a year
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
            Compare Cheap Car <br /> Insurance Quotes
          </h1>
          
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unlock savings and exclusive discounts with instant, real-time rates from 120+ top insurers.
          </p>

          {/* 3. صندوق إدخال البيانات (Zip Code Box) */}
          <div className="max-w-md mx-auto bg-white p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <div className="p-6">
              <div className="text-left mb-4">
                <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Enter Zip Code</label>
                <input 
                  type="text" 
                  placeholder="e.g. 33101" 
                  className="w-full text-2xl font-bold py-2 outline-none border-b-2 border-transparent focus:border-black transition-colors placeholder:text-gray-200"
                />
              </div>
              
              <button className="w-full h-16 bg-black text-white rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-3">
                Start Service
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* 4. شعارات الثقة (Trust Badges) */}
          <div className="mt-20 pt-10 border-t border-gray-50">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-8">Trusted by drivers nationwide</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-30 grayscale contrast-125">
              <span className="text-2xl font-black italic">FORBES</span>
              <span className="text-2xl font-black italic">REUTERS</span>
              <span className="text-2xl font-black italic">CNN</span>
              <span className="text-2xl font-black italic">CNBC</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
