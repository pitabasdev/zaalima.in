import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Star, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-28">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-100 rounded-full">
              <p className="text-purple-800 text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-1.5" /> Leading SaaS Provider Since 2015
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Businesses with <span className="gradient-heading">Innovative</span> SaaS Solutions
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Secure, Scalable, and Efficient Software for the Modern Enterprise. Transform your business operations today.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link href="/get-started">
                <Button size="lg" className="gradient-button text-white w-full sm:w-auto">
                  Get Started <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-purple-300 hover:bg-purple-50">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                <Shield className="h-4 w-4 text-purple-600 mr-1.5" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                <Zap className="h-4 w-4 text-purple-600 mr-1.5" />
                <span className="text-sm font-medium">Fast Implementation</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                <Star className="h-4 w-4 text-purple-600 mr-1.5" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Image frame with gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur-md opacity-20"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Business team using SaaS platform"
                  className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating stat cards */}
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg glass-effect"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-sm font-medium text-purple-800">Trusted by</p>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-neutral-500">Global businesses</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg glass-effect"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm font-medium text-purple-800">Customer</p>
                <p className="text-2xl font-bold">97%</p>
                <p className="text-xs text-neutral-500">Satisfaction rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
