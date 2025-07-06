"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main className="w-full bg-gray-900 py-4 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">
                  Web Development & Design
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Creating Digital Experiences
                  </span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We transform your ideas into exceptional digital solutions that captivate users and drive business growth in today's competitive landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    Start Your Project
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gray-800 border border-gray-600 text-gray-200 font-medium rounded-xl hover:bg-gray-700 transition-all duration-300 flex items-center"
                  >
                    <span>Watch Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-[630px] w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 md:block hidden"></div>
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                alt="Digital Experience" 
                fill 
                style={{ objectFit: 'cover' }}
                className="brightness-75"
                priority
              />
              
              <div className="absolute bottom-10 right-10 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 z-20 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Live Projects</span>
                </div>
                <p className="text-gray-300 text-sm">Over 200+ successful projects delivered to clients worldwide</p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-700">
            <div className="p-6 text-center border-r border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-1">200+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="p-6 text-center border-r border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-1">98%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="p-6 text-center border-r border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}