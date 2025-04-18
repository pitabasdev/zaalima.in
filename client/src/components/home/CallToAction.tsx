import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="relative overflow-hidden rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background with gradient and pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 -z-10" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 mix-blend-overlay" />

        <div className="relative text-white text-center p-10 md:p-16 z-10">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full">
            <Rocket className="h-5 w-5 mr-2" />
            <span className="text-white font-medium">Join 500+ businesses already growing with Zaalima</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-shadow">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Get started with Zaalima Development today and discover how our
            innovative solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/get-started">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 w-full sm:w-auto font-medium text-base shadow-lg shadow-purple-800/20">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
