import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Global Finance Dashboard",
    category: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive financial analytics platform for a Fortune 500 company, enabling real-time decision making and predictive insights."
  },
  {
    id: 2,
    title: "MediTrack Healthcare Platform",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A secure patient management system that streamlines healthcare delivery while ensuring data privacy and compliance."
  },
  {
    id: 3,
    title: "EduConnect Learning System",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "An interactive learning platform implemented across 50+ universities, improving student engagement and learning outcomes."
  }
];

export default function PortfolioSection() {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-heading">Successful Projects</span> We've Delivered
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/services">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-700 text-white text-xs font-medium px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/products`}>
                    <a className="text-purple-700 hover:text-purple-800 font-medium text-sm flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Let's Build Your Next Project</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Have a challenging project in mind? Our team of experts can help you transform your ideas into reality.
          </p>
          <Link href="/contact">
            <Button className="gradient-button text-white">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}