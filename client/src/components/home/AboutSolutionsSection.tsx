import { Code, PaintbrushVertical, Cloud, Database, Server, Shield } from "lucide-react";
import { motion } from "framer-motion";

const featureItems = [
  {
    icon: <Code className="h-6 w-6 text-purple-600" />,
    title: "Custom Development",
    description:
      "Tailored software solutions built to address your unique business challenges and requirements.",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: <PaintbrushVertical className="h-6 w-6 text-rose-500" />,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces designed to enhance user experience and drive engagement with your software.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: <Cloud className="h-6 w-6 text-sky-500" />,
    title: "Cloud Integration",
    description:
      "Seamless integration with cloud platforms for scalable, reliable, and secure operations.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: <Database className="h-6 w-6 text-amber-500" />,
    title: "Data Management",
    description:
      "Powerful data solutions that help you store, process, and analyze your business information efficiently.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: <Server className="h-6 w-6 text-emerald-500" />,
    title: "API Development",
    description:
      "Robust API solutions enabling seamless integration between different systems and applications.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: "Security Solutions",
    description:
      "Advanced security implementations to protect your data and applications from vulnerabilities.",
    gradient: "from-indigo-500 to-violet-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function AboutSolutionsSection() {
  return (
    <div className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-heading">Powerful Solutions</span> for Modern Businesses
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            With over a decade of experience, Zaalima Development is trusted by
            global enterprises to deliver innovative SaaS solutions that drive
            business growth. Our team of experts specializes in custom software
            development, UI/UX design, and cloud integration, ensuring our clients
            stay ahead in today's digital landscape.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 card-hover"
              variants={itemVariants}
            >
              <div className={`w-14 h-14 mb-5 rounded-xl p-3 bg-gradient-to-br ${item.gradient} shadow-md`}>
                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.a 
            href="/services"
            className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View our full service catalog
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
