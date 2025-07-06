"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      ),
      title: "Creative Design",
      description: "Our designs are unique, modern, and tailored to your brand identity, ensuring your website stands out from the competition."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      title: "Performance Optimized",
      description: "We build websites that load quickly and perform smoothly, providing an excellent user experience across all devices."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Mobile Responsive",
      description: "Our websites adapt perfectly to all screen sizes, ensuring a consistent experience for users on desktops, tablets, and smartphones."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: "Secure & Reliable",
      description: "We implement the latest security practices to ensure your website is protected against threats and remains reliable at all times."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      title: "SEO Optimized",
      description: "We build websites with search engine optimization in mind, helping your business rank higher in search results and attract more visitors."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance services to ensure your website remains up-to-date and functions perfectly."
    }
  ];

  return (
    <section className="py-32 px-8 sm:px-16 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">Our Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Our Exceptional</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-600/30 z-0 transform -skew-x-12"></span>
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Features</span>
          </h2>
          <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We combine creativity, technical expertise, and industry best practices to deliver outstanding digital solutions that exceed expectations and drive business growth. Our approach ensures your project stands out in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 group hover:border-blue-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-full -ml-12 -mb-12 z-0"></div>
              
              <div className="relative z-10">
                <div className="text-blue-400 mb-8 transform transition-all duration-300 group-hover:scale-110 bg-blue-900/40 p-5 rounded-xl inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">{feature.description}</p>
                <div className="pt-6 border-t border-gray-700">
                  <a href="#" className="text-blue-400 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-2">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center" data-aos="zoom-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 blur-xl opacity-30 rounded-2xl"></div>
            <a href="/services" className="relative inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-2xl text-lg">
              Explore All Our Services
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}