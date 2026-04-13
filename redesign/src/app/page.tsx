'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Activity, ChevronRight, Menu, ShoppingBag } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-nordic-black selection:bg-nordic-cyan selection:text-nordic-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 hover:bg-nordic-black/20 group">
        <div className="flex items-center space-x-2">
          <Menu className="w-5 h-5 text-nordic-slate cursor-pointer hover:text-nordic-cyan transition-colors" />
          <div className="text-xl font-black tracking-tighter text-nordic-white uppercase">
            Nord <span className="text-nordic-cyan">Peak</span>
          </div>
        </div>
        
        <div className="hidden absolute left-1/2 -translate-x-1/2 space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] text-nordic-slate md:flex">
          <a href="#" className="hover:text-nordic-white transition-colors relative group">
            Performance
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-nordic-cyan transition-all group-hover:w-full" />
          </a>
          <a href="#" className="hover:text-nordic-white transition-colors relative group">
            Recovery
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-nordic-cyan transition-all group-hover:w-full" />
          </a>
          <a href="#" className="hover:text-nordic-white transition-colors relative group">
            Science
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-nordic-cyan transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <ShoppingBag className="w-5 h-5 text-nordic-slate cursor-pointer hover:text-nordic-cyan transition-colors" />
          <button className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] bg-nordic-white text-nordic-black rounded-full hover:bg-nordic-cyan hover:scale-105 transition-all shadow-xl shadow-nordic-cyan/10">
            Store
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        {/* Cinematic Background Image */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-nordic-black/40 via-nordic-black/60 to-nordic-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Nordic Recovery"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-1.5 mb-8 text-[9px] font-black tracking-[0.4em] uppercase border border-nordic-cyan/40 text-nordic-cyan bg-nordic-cyan/5 rounded-full backdrop-blur-md">
              Elite Recovery Systems
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl font-black tracking-tighter md:text-[10rem] text-gradient mb-8 leading-[0.85] uppercase"
          >
            PEAK <br /> <span className="opacity-80">RESILIENCE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed text-nordic-slate/80"
          >
            The intersection of Nordic minimalist design and clinical performance science. Engineered for those who refuse to compromise on recovery.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8"
          >
            <button className="group relative flex items-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] bg-nordic-cyan text-nordic-black overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore The Gear <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="flex items-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-nordic-white border border-nordic-white/10 hover:border-nordic-cyan transition-all">
              Watch The Series
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-nordic-cyan to-transparent" />
          <span className="text-[8px] font-bold tracking-[0.5em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="relative z-20 px-6 py-32 bg-nordic-black border-y border-nordic-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 md:grid-cols-3">
          <FeatureCard 
            icon={<Shield className="w-5 h-5" />}
            title="MIL-SPEC Standard"
            description="Our gear is tested in extreme sub-zero temperatures to ensure absolute structural integrity."
          />
          <FeatureCard 
            icon={<Activity className="w-5 h-5" />}
            title="Physio-Optimized"
            description="Designed in collaboration with elite sports therapists to target deep muscular recovery."
          />
          <FeatureCard 
            icon={<Zap className="w-5 h-5" />}
            title="Rapid Integration"
            description="Simple protocols that integrate seamlessly into your existing performance stack."
          />
        </div>
      </section>

      {/* Product Highlight */}
      <section className="px-6 py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <span className="text-nordic-cyan text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Seasonal Edit</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">The Recovery <br /> Essentials</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-nordic-cyan hover:text-nordic-white transition-colors">
              View All <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ProductCard 
              name="SpineArc Evo" 
              price="349 DKK" 
              category="Mobility" 
              image="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1000"
            />
            <ProductCard 
              name="Peak Compression" 
              price="599 DKK" 
              category="Recovery" 
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
            />
            <ProductCard 
              name="Nordic Massager" 
              price="1,249 DKK" 
              category="Percussion" 
              image="https://images.unsplash.com/photo-1518611012118-2960c8bad84a?auto=format&fit=crop&q=80&w=1000"
            />
            <ProductCard 
              name="IcePeak Tub" 
              price="8,900 DKK" 
              category="Cold Plunge" 
              image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 py-20 bg-nordic-black border-t border-nordic-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
          <div className="text-sm font-bold tracking-tighter uppercase mb-8 md:mb-0">
            Nord Peak © 2026 / Scandinavia
          </div>
          <div className="flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-nordic-cyan tr">Instagram</a>
            <a href="#" className="hover:text-nordic-cyan tr">Strava</a>
            <a href="#" className="hover:text-nordic-cyan tr">Newsletter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-10 space-y-6 border border-nordic-white/5 bg-gradient-to-br from-nordic-white/[0.03] to-transparent"
    >
      <div className="text-nordic-cyan">
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-tighter uppercase">{title}</h3>
      <p className="text-sm leading-relaxed text-nordic-slate font-medium">{description}</p>
    </motion.div>
  );
}

function ProductCard({ name, price, category, image }: { name: string, price: string, category: string, image: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="aspect-[3/4] mb-8 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 bg-nordic-charcoal">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-nordic-black/20 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-6 left-6">
          <span className="px-3 py-1 text-[8px] font-black uppercase tracking-[0.4em] bg-nordic-black/80 backdrop-blur-md rounded-full border border-nordic-white/10">
            {category}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-black tracking-tight uppercase group-hover:text-nordic-cyan transition-colors">{name}</h3>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nordic-slate mt-1">Physio-Grade Gear</p>
        </div>
        <p className="font-black text-sm text-nordic-cyan mt-1">{price}</p>
      </div>
    </motion.div>
  );
}
