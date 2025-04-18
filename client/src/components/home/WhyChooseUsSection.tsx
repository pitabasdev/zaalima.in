import { motion } from "framer-motion";
import { Award, Clock, Users, Zap, Shield, Headset, Lightbulb, BarChart } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    title: "Fast Development",
    description: "We deliver high-quality software at unprecedented speed using our optimized development workflow."
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Enterprise Security",
    description: "Built-in security measures to protect your data and ensure compliance with regulations."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Experienced Team",
    description: "Our team comprises senior developers with expertise across multiple technologies and domains."
  },
  {
    icon: <Award className="h-6 w-6 text-green-600" />,
    title: "Award-Winning Solutions",
    description: "Our work has been recognized for excellence in design, functionality, and innovation."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
    title: "Innovative Approach",
    description: "We stay ahead of the curve by continuously researching and implementing emerging technologies."
  },
  {
    icon: <Clock className="h-6 w-6 text-orange-600" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support ensures your systems run smoothly at all times."
  },
  {
    icon: <BarChart className="h-6 w-6 text-red-600" />,
    title: "Data-Driven Insights",
    description: "Our solutions provide actionable analytics to help you make informed business decisions."
  },
  {
    icon: <Headset className="h-6 w-6 text-pink-600" />,
    title: "Dedicated Account Manager",
    description: "A single point of contact who understands your business needs and ensures project success."
  }
];

export default function WhyChooseUsSection() {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full opacity-70 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-heading">Zaalima Advantage</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            What makes our solutions stand out in a crowded marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="mb-4 bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our Success by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-4xl font-bold text-white mb-1">96%</div>
                <div className="text-sm text-white/80">Client satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/80">Projects delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-4xl font-bold text-white mb-1">12+</div>
                <div className="text-sm text-white/80">Years of experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-white/80">Industry experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}