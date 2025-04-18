import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactInfoSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Start a <span className="gradient-heading">Conversation</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                Have questions about our services or want to discuss your project requirements? Our team is here to help you find the perfect solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-neutral-600">+91 8277035909</p>
                    <p className="text-neutral-500 text-sm">Monday-Friday, 9AM-6PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-neutral-600">info@zaalima.in</p>
                    <p className="text-neutral-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Office</h3>
                    <p className="text-neutral-600">123 Tech Park Avenue, Suite 500</p>
                    <p className="text-neutral-600">San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Business Hours</h3>
                    <p className="text-neutral-600">Monday-Friday: 9AM-6PM IST</p>
                    <p className="text-neutral-600">Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="https://x.com/zaalimadev" target="_blank" rel="noopener noreferrer" className="bg-neutral-100 p-3 rounded-full text-neutral-700 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8 7.9-4.9 1.2-.7 2.2-1.4 3.1-2.3z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/zaalimadev/" target="_blank" rel="noopener noreferrer" className="bg-neutral-100 p-3 rounded-full text-neutral-700 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5v1.5c.7-1 2-1.5 3.5-1.5 2.5 0 4.5 1.5 4.5 6v7h-5v-7c0-1-1-2-2-2z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572379405433&rdid=nDS72PreW7RTjz1g&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uk2wS3Bp%2F#" target="_blank" rel="noopener noreferrer" className="bg-neutral-100 p-3 rounded-full text-neutral-700 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/zaalimadev" target="_blank" rel="noopener noreferrer" className="bg-neutral-100 p-3 rounded-full text-neutral-700 hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Map or Image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-neutral-100 rounded-xl overflow-hidden h-full min-h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555019448!2d-122.50764089554595!3d37.75781499602708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1682455236598!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/50">
                  <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
                  <p className="text-neutral-600 mb-4">Schedule a free consultation to discuss your project</p>
                  <Button className="w-full gradient-button text-white group">
                    Book a Meeting
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}