import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Bell } from "lucide-react";

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to add the email to your newsletter list
    console.log("Newsletter form submitted");
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl">
          {/* Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-700/30 to-transparent" />
          <div className="absolute -bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full" />
          
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Bell className="h-5 w-5 mr-2" />
                    <div className="text-sm font-medium text-white/90">Stay Updated</div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-white/80 max-w-md mb-6">
                    Get the latest insights, industry trends, and tech news delivered to your inbox. No spam, just valuable content to help your business grow.
                  </p>
                  
                  <div className="flex items-center text-sm mt-6">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Industry insights</span>
                    
                    <svg className="w-5 h-5 ml-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Product updates</span>
                    
                    <svg className="w-5 h-5 ml-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Tech tips</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                      <Mail className="h-5 w-5 text-white/70 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-white/20 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      />
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Your name (optional)"
                        className="w-full bg-white/20 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-white hover:bg-white/90 text-indigo-700 font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center group"
                    >
                      Subscribe Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-white/60 mt-3 text-center">
                      You can unsubscribe at any time. Privacy Policy
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}