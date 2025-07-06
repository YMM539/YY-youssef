"use client";

export const dynamic = 'force-static';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <Features />
      <Portfolio />
      <Pricing />
      <Footer />
    </div>
  );
}
