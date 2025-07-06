"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 499,
      annualPrice: 4999,
      features: [
        "Responsive Website Design",
        "5 Pages",
        "Contact Form",
        "Mobile Optimization",
        "Basic SEO Setup",
        "1 Month Support",
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 999,
      annualPrice: 9999,
      features: [
        "Everything in Basic",
        "Up to 10 Pages",
        "Content Management System",
        "E-commerce Integration (up to 50 products)",
        "Advanced SEO Optimization",
        "Social Media Integration",
        "3 Months Support",
        "Performance Analytics"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large businesses with complex needs",
      monthlyPrice: 1999,
      annualPrice: 19999,
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Functionality",
        "Advanced E-commerce (unlimited products)",
        "Payment Gateway Integration",
        "User Authentication System",
        "Database Integration",
        "API Development",
        "12 Months Priority Support",
        "Monthly Performance Reports"
      ],
      popular: false,
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      bgHover: "hover:bg-blue-700",
      bgLight: "bg-blue-50",
      bgDark: "dark:bg-blue-900/40",
      text: "text-blue-600",
      textDark: "dark:text-blue-400",
      border: "border-blue-200",
      borderDark: "dark:border-blue-800",
    },
    purple: {
      bg: "bg-purple-600",
      bgHover: "hover:bg-purple-700",
      bgLight: "bg-purple-50",
      bgDark: "dark:bg-purple-900/40",
      text: "text-purple-600",
      textDark: "dark:text-purple-400",
      border: "border-purple-200",
      borderDark: "dark:border-purple-800",
    },
    indigo: {
      bg: "bg-indigo-600",
      bgHover: "hover:bg-indigo-700",
      bgLight: "bg-indigo-50",
      bgDark: "dark:bg-indigo-900/40",
      text: "text-indigo-600",
      textDark: "dark:text-indigo-400",
      border: "border-indigo-200",
      borderDark: "dark:border-indigo-800",
    }
  };

  return (
    <section className="py-24 px-8 sm:px-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-300 rounded-full text-sm font-medium mb-5">Pricing Plans</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">Choose Your Perfect Plan</h2>
          <div className="w-28 h-1.5 bg-green-600 dark:bg-green-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            We offer flexible pricing options to meet your specific needs and budget.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 text-lg ${isAnnual ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white font-medium'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)} 
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${isAnnual ? 'bg-green-600' : 'bg-gray-400'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`} />
            </button>
            <span className={`ml-3 text-lg ${isAnnual ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual <span className="text-green-600 dark:text-green-400 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => {
            const color = colorClasses[plan.color];
            
            return (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                  plan.popular ? 'border-2 ' + color.border + ' ' + color.borderDark + ' md:scale-105 z-10' : 'border border-gray-200 dark:border-gray-700'
                } bg-white dark:bg-gray-800 relative`}
              >
                {plan.popular && (
                  <div className={`absolute top-0 right-0 ${color.bg} text-white px-4 py-1 text-sm font-medium rounded-bl-lg`}>
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? color.bgLight + ' ' + color.bgDark : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${isAnnual ? (plan.annualPrice / 100).toFixed(0) : (plan.monthlyPrice / 100).toFixed(0)}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  <button className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${color.bg} ${color.bgHover} text-white shadow-lg`}>
                    Get Started
                  </button>
                </div>
                
                <div className="p-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color.text} ${color.textDark} mr-2 mt-0.5 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center p-8 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 shadow-xl" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us for a tailored solution that meets your specific requirements.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}