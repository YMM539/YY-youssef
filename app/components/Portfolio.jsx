"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
      description: "A fully responsive e-commerce platform with advanced filtering and payment integration."
    },
    {
      title: "Corporate Branding",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
      description: "Complete brand identity redesign for a leading financial services company."
    },
    {
      title: "Mobile Application",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
      description: "Intuitive health tracking application with real-time analytics and personalized insights."
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=60",
      description: "Comprehensive digital marketing strategy that increased client conversion by 150%."
    }
  ];

  return (
    <section className="py-24 px-8 sm:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-5">Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">Recent Projects</h2>
          <div className="w-28 h-1.5 bg-purple-600 dark:bg-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-sm font-medium text-purple-300 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium mb-3">{project.category}</span>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <button className="mt-4 text-purple-600 dark:text-purple-400 font-medium flex items-center group-hover:underline">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:ml-2 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16" data-aos="fade-up">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}