import { motion } from "framer-motion";
import { serviceItems } from "@/lib/data";
import { ArrowRight, Code, Palette, Smartphone, Cloud, Cpu, HelpCircle } from "lucide-react";

// Map of icon names to actual icon components
const iconMap = {
  Code: <Code className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  HelpCircle: <HelpCircle className="h-6 w-6" />
};

// Color gradient classes for different services
const gradientClasses = [
  "from-purple-600 to-indigo-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-blue-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-indigo-500 to-violet-600"
];

export default function ServicesSection() {
  return (
    <div className="relative py-24 bg-white">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50/30 to-white"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/30 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Our Solutions
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-heading">Premium Services</span> for Your Business
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We offer a comprehensive range of software solutions and consulting services
            to help your business leverage technology for growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className={`h-2 bg-gradient-to-r ${gradientClasses[index % gradientClasses.length]}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 rounded-xl p-3 bg-gradient-to-br ${gradientClasses[index % gradientClasses.length]} shadow-md mb-6`}>
                  <div className="w-full h-full flex items-center justify-center bg-white rounded-lg text-neutral-800">
                    {iconMap[service.icon as keyof typeof iconMap]}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.details.split('. ').map((detail, i) => (
                    detail && (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-600">{detail}</span>
                      </li>
                    )
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a
                    href="/services"
                    className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <p className="mt-4 text-neutral-500">
            Free consultation and project estimation
          </p>
        </div>
      </div>
    </div>
  );
}