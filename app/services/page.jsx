export const dynamic = 'force-static';

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "We offer premium web development services using the latest technologies to build fast, secure, and user-friendly websites.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
      features: [
        "Responsive website design",
        "Website speed and performance optimization",
        "E-commerce integration",
        "User-friendly dashboards",
        "Continuous support and updates"
      ]
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "We build high-performance mobile apps for iOS and Android using cutting-edge technologies and frameworks.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      features: [
        "Native iOS & Android apps",
        "Hybrid apps with React Native",
        "Smooth and attractive UI",
        "API integration",
        "Comprehensive testing and quality assurance"
      ]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "We design engaging and user-friendly interfaces that enhance user experience and increase conversions.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
      features: [
        "Modern UI design",
        "User experience improvement",
        "Responsive design for all devices",
        "Usability testing",
        "Complete brand identity design"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "We provide comprehensive digital marketing services to boost your brand visibility and attract more potential customers.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=80",
      features: [
        "Search Engine Optimization (SEO)",
        "Paid Ads Campaign Management",
        "Social Media Marketing",
        "Content Marketing",
        "Data analysis and performance reports"
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "We build complete and user-friendly online stores to help you sell your products or services online.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
      features: [
        "Full-featured online stores",
        "Payment gateway integration",
        "Inventory and order management",
        "Customized shopping experience",
        "Conversion rate optimization"
      ]
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "We offer creative and engaging content production services to enhance your brand and attract your target audience.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
      features: [
        "Professional content writing",
        "Creative graphic design",
        "Marketing video production",
        "Professional photography",
        "Complete content strategy development"
      ]
    }
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-900 text-white">
        <section className="py-24 px-8 sm:px-16 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
          <h1 className="text-5xl font-bold mb-4">Comprehensive Digital Solutions</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            We offer a wide range of digital services to help your business grow and thrive in the digital world.
          </p>
        </section>

        <section className="py-20 px-8 sm:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:border-blue-500 border border-gray-700"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-blue-400 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-8 sm:px-16 bg-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[{
              name: "Ahmed Mohamed",
              position: "Tech Company Manager",
              testimonial: "Working with Youssef's team transformed our business. They delivered an excellent website that reflects our brand and significantly increased our sales.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
            },
            {
              name: "Sara Ahmed",
              position: "Marketing Manager, Startup",
              testimonial: "The digital marketing services provided by Youssef drastically improved our online presence. We saw a 200% increase in organic traffic and a significant boost in leads.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
            },
            {
              name: "Mohamed Ali",
              position: "E-commerce Founder",
              testimonial: "The online store developed by Youssef's team was exactly what we needed. It's easy to manage, looks professional, and our sales have never been better.",
              image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&auto=format&fit=crop&q=80"
            }].map((client, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
                <div className="flex items-center mb-4">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{client.name}</h4>
                    <p className="text-sm text-gray-400">{client.position}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{client.testimonial}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
