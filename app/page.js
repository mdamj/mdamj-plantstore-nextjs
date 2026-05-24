"use client";

import React from 'react';

const Navigation = () => (
  <nav className="flex items-center justify-between px-8 md:px-24 py-8 sticky top-0 bg-[#101412]/80 backdrop-blur-md z-50 border-b border-white/5">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#d4e91c] rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
      </div>
      <span className="text-xl font-bold tracking-tight">Planto.</span>
    </div>
    <div className="hidden md:flex gap-12 text-sm font-medium">
      <a href="#" className="text-[#d4e91c]">Home</a>
      <a href="#" className="hover:text-[#d4e91c] transition-colors">Plant Type&apos;s</a>
      <a href="#" className="hover:text-[#d4e91c] transition-colors">More</a>
      <a href="#" className="hover:text-[#d4e91c] transition-colors">Contact</a>
    </div>
    <div className="flex gap-6 items-center">
      <button className="hover:text-[#d4e91c] transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </button>
      <button className="hover:text-[#d4e91c] transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
      </button>
      <button className="hover:text-[#d4e91c] transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center px-8 md:px-24 py-20 overflow-hidden">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.8] mb-8 tracking-tighter text-white">
          Breath Natural
        </h1>
        <p className="text-lg mb-10 opacity-60 leading-relaxed max-w-md text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-6 items-center">
          <button className="border border-white/40 text-white font-medium px-10 py-3 rounded-lg hover:bg-white hover:text-black transition-all">
            Explore
          </button>
          <button className="flex items-center gap-3 font-medium text-white hover:text-[#d4e91c] transition-colors group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4e91c]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            Live Demo...
          </button>
        </div>

        <div className="mt-20 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-sm relative overflow-hidden group">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
              <img src="/image.jpg" alt="Alina Patel" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Alina Patel</h4>
              <div className="flex text-[#d4e91c]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs opacity-60 italic leading-relaxed text-white">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...&quot;
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="relative z-10 scale-110 translate-x-12 translate-y-12">
          <img src="/plant1.png" alt="Main Plant" className="w-full h-auto object-contain rounded-3xl shadow-2xl" />
        </div>

        <div className="absolute top-0 right-[-10%] z-20 w-72 p-6 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl float-card">
          <div className="aspect-square bg-black/20 rounded-3xl overflow-hidden mb-4 relative">
            <img src="/plant2.png" alt="Calathea Plant" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold text-white">Trendy House Plant</p>
            <h4 className="text-xl font-bold flex justify-between items-center text-white">
              Calathea plant
              <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </h4>
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border border-white/20 text-sm font-bold text-white hover:bg-white hover:text-black transition-all">
            Buy Now
          </button>
          <div className="flex justify-center gap-1.5 mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20" />
            <div className="w-3 h-1.5 rounded-full bg-white" />
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#d4e91c]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </div>
  </section>
);

const ProductGrid = () => {
  const products = [
    { name: 'Calathea plant',    price: 'Rs. 309/-', image: '/plant1.png' },
    { name: 'Desk plant',        price: 'Rs. 359/-', image: '/plant2.png' },
    { name: 'Calathea ai plant', price: 'Rs. 399/-', image: '/plant3.png' },
    { name: 'Cal 874 plant',     price: 'Rs. 259/-', image: '/plant4.png' },
    { name: 'Show plant',        price: 'Rs. 759/-', image: '/plant5.png' },
    { name: 'Calat O2 plant',    price: 'Rs. 659/-', image: '/plant6.png' },
  ];

  return (
    <section className="py-32 px-8 md:px-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Our Top Selling</h2>
        <div className="w-24 h-1 bg-[#d4e91c] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, i) => (
          <div key={i} className="bg-[#181d1a] p-8 rounded-[3.5rem] border border-white/5 group hover:border-[#d4e91c]/20 transition-all duration-500">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-[#101412] mb-8 overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">{product.name}</h4>
              <p className="text-sm opacity-40 leading-relaxed text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between items-center pt-4">
                <p className="text-2xl font-bold text-white">{product.price}</p>
                <button className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-[#d4e91c] hover:text-black transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    { name: 'Main Josi',    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { name: 'Alina Thakur', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
    { name: 'Max Makvana',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  ];

  return (
    <section className="py-32 px-8 md:px-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Customer Review</h2>
        <div className="w-24 h-1 bg-[#d4e91c] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <div key={i} className="bg-[#181d1a] p-10 rounded-[3rem] border border-white/5 relative group hover:bg-[#1c221e] transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gray-600 overflow-hidden border-2 border-[#d4e91c]/20">
                <img src="/plant1.png" alt={test.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">{test.name}</h4>
                <div className="flex text-[#d4e91c]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="opacity-60 leading-relaxed italic text-white">&quot;{test.text}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0b0f0d] pt-32 pb-12 px-8 md:px-24">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 bg-[#d4e91c] rounded-full" />
          <span className="text-2xl font-bold tracking-tight text-white">Planto.</span>
        </div>
        <p className="opacity-40 leading-relaxed mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex gap-4">
          {['FB', 'TW', 'LI'].map(social => (
            <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity text-white font-bold text-xs">
              {social}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-[#d4e91c]">Quick Link&apos;s</h4>
        <ul className="space-y-4 text-white opacity-40 text-sm">
          <li><a href="#" className="hover:text-[#d4e91c] transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-[#d4e91c] transition-colors">Plant Type&apos;s</a></li>
          <li><a href="#" className="hover:text-[#d4e91c] transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-[#d4e91c] transition-colors">Privacy</a></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-[#d4e91c]">For Every Update&apos;s</h4>
        <div className="flex gap-2 max-w-md">
          <input type="email" placeholder="Enter Email.." className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm flex-grow focus:outline-none focus:border-[#d4e91c] text-white" />
          <button className="bg-white text-black font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#d4e91c] transition-all">SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-20 text-white">
      <p>Planto © All right reserve</p>
    </div>
  </footer>
);

export default function PlanterPage() {
  return (
    <div className="min-h-screen bg-[#101412] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .float-card { animation: float 6s ease-in-out infinite; }
        ::selection { background: #d4e91c; color: black; }
      `}</style>

      <Navigation />

      <main>
        <Hero />
        <ProductGrid />

        <section className="py-32 px-8 md:px-24 bg-[#0b0f0d]/30">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Our Best O2</h2>
            <div className="w-24 h-1 bg-[#d4e91c] mx-auto" />
          </div>
          <div className="bg-[#181d1a] rounded-[4rem] border border-white/5 p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 aspect-square relative group">
              <img
                src="/plant3.png"
                alt="Large Plant"
                className="w-full h-full object-cover rounded-[3rem] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">We Have Small And Best O2 Plants Collection&apos;s</h3>
              <p className="opacity-60 mb-10 max-w-md leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="border border-white/40 text-white font-medium px-10 py-4 rounded-xl hover:bg-white hover:text-black transition-all">
                Explore
              </button>
            </div>
          </div>
        </section>

        <Reviews />
      </main>

      <Footer />
    </div>
  );
}