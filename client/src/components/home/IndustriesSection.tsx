import { motion } from "framer-motion";
import { Building2, Briefcase, School, ShoppingBag, Truck, Activity, Heart, Globe } from "lucide-react";

const industries = [
  {
    icon: <Building2 className="h-7 w-7" />,
    name: "Finance & Banking",
    description: "Secure payment systems, fraud detection, and digital banking platforms that streamline operations and enhance customer experience."
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    name: "Enterprise Solutions",
    description: "Custom software for large-scale operations, improving efficiency and reducing costs across the organization."
  },
  {
    icon: <School className="h-7 w-7" />,
    name: "Education",
    description: "Learning management systems and educational tools that transform the way institutions deliver content and engage students."
  },
  {
    icon: <ShoppingBag className="h-7 w-7" />,
    name: "Retail & E-commerce",
    description: "Advanced e-commerce platforms with inventory management, customer analytics, and seamless payment integrations."
  },
  {
    icon: <Truck className="h-7 w-7" />,
    name: "Logistics & Supply Chain",
    description: "Real-time tracking, route optimization, and inventory management systems for modern supply chains."
  },
  {
    icon: <Activity className="h-7 w-7" />,
    name: "Marketing & Media",
    description: "Content management, analytics, and automation tools to enhance marketing effectiveness and reach."
  },
  {
    icon: <Heart className="h-7 w-7" />,
    name: "Healthcare",
    description: "Patient management systems, telehealth solutions, and data analysis tools that improve healthcare delivery."
  },
  {
    icon: <Globe className="h-7 w-7" />,
    name: "Non-Profit & NGOs",
    description: "Donor management, campaign tools, and impact tracking systems to boost organizational effectiveness."
  }
];

export default function IndustriesSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming <span className="gradient-heading">Industries</span> Through Innovation
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our solutions address specific challenges across diverse sectors, helping organizations innovate and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 relative border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Color circle behind icon */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full -z-10"></div>
              
              <div className="text-purple-600 mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="text-neutral-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-700 font-medium">
            Don't see your industry? <a href="/contact" className="text-purple-700 underline hover:text-purple-800">Contact us</a> to discuss your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
}