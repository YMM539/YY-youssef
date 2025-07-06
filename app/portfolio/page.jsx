export const revalidate = 3600; // Revalidate every hour for ISR

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Technology Company Website",
      client: "Tech Solutions",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      description: "A comprehensive website for a technology company with an advanced control panel and user interface.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Shopping Application",
      client: "Marketplace",
      category: "Mobile Applications",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
      description: "A complete mobile application for e-shopping with a payment system and order management.",
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      link: "#"
    },
    {
      id: 3,
      title: "Educational Platform",
      client: "Learning Academy",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
      description: "A comprehensive educational platform with a content management system and interactive courses.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      client: "Food Chain",
      category: "Software",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      description: "A complete system for managing restaurants, orders, and inventory.",
      technologies: ["Angular", "Express.js", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      id: 5,
      title: "Real Estate Website",
      client: "Home Finder",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      description: "A platform for displaying, selling, and buying real estate with interactive maps.",
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      link: "#"
    },
    {
      id: 6,
      title: "Task Management Application",
      client: "Task Master",
      category: "Mobile Applications",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=80",
      description: "An application for managing tasks and projects with collaborative features.",
      technologies: ["Flutter", "Firebase", "Bloc", "Cloud Functions"],
      link: "#"
    }
  ];

  // Statistics data
  const stats = [
    { name: "Completed Projects", value: 120 },
    { name: "Satisfied Clients", value: 85 },
    { name: "Years of Experience", value: 7 },
    { name: "Awards", value: 15 }
  ];

  // Growth chart data
  const growthData = [
    { name: '2018', projects: 12, revenue: 50, clients: 10 },
    { name: '2019', projects: 25, revenue: 80, clients: 22 },
    { name: '2020', projects: 38, revenue: 120, clients: 35 },
    { name: '2021', projects: 52, revenue: 170, clients: 48 },
    { name: '2022', projects: 78, revenue: 250, clients: 65 },
    { name: '2023', projects: 120, revenue: 320, clients: 85 }
  ];

  // Team data
  const teamData = [
    { name: 'Frontend Developers', value: 12 },
    { name: 'Backend Developers', value: 8 },
    { name: 'UI/UX Designers', value: 6 },
    { name: 'Project Managers', value: 4 },
    { name: 'Quality Testers', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Clients data
  const clients = [
    { name: "Tech Solutions", logo: "https://via.placeholder.com/150" },
    { name: "Marketplace", logo: "https://via.placeholder.com/150" },
    { name: "Learning Academy", logo: "https://via.placeholder.com/150" },
    { name: "Food Chain", logo: "https://via.placeholder.com/150" },
    { name: "Home Finder", logo: "https://via.placeholder.com/150" },
    { name: "Task Master", logo: "https://via.placeholder.com/150" },
    { name: "Digital Hub", logo: "https://via.placeholder.com/150" },
    { name: "Smart Tech", logo: "https://via.placeholder.com/150" }
  ];

  return (
    <>
      <Header />
      
      <main className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="py-24 px-8 sm:px-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">
                Our Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Creations </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Speak for Themselves</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                We present a collection of distinguished projects that reflect our expertise and creativity in digital development.
                Discover how we helped our clients achieve their goals and exceed their expectations.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Browse Projects
                </a>
                <a href="#stats" className="px-8 py-4 bg-gray-800 border border-gray-600 text-gray-200 font-medium rounded-xl hover:bg-gray-700 transition-all duration-300">
                  Performance Statistics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 px-8 sm:px-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">
                Numbers That Speak of Our Success
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Statistics and Figures
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We are proud of our achievements over the past years, and these are some numbers that reflect our success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 p-8 text-center"
                >
                  <div className="text-5xl font-bold text-blue-400 mb-4">{stat.value}+</div>
                  <div className="text-xl text-gray-300">{stat.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Charts Section */}
        <section className="py-24 px-8 sm:px-16 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">
                Our Progress Over the Years
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Continuous Growth
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our journey of success in numbers, reflecting our commitment to excellence and continuous development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-center">Project and Client Evolution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={growthData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="name" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#333', border: '1px solid #555' }}
                        labelStyle={{ color: '#fff' }}
                      />
                      <Legend />
                      <Bar dataKey="projects" name="Projects" fill="#3B82F6" />
                      <Bar dataKey="clients" name="Clients" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-center">Our Team</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={teamData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {teamData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#333', border: '1px solid #555' }}
                        labelStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 sm:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium mb-5">
                Our Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A curated selection of projects we have implemented for our clients in various fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-blue-600 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600/80 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">Client: {project.client}</p>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 px-8 sm:px-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Are you ready to start your next project?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Let us help you turn your ideas into tangible reality. Contact us today to discuss your project.
            </p>
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

