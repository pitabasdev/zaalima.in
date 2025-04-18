import { Helmet } from "react-helmet";
import { companyValues, companyTimeline } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Users, 
  Award
} from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Zaalima Development</title>
        <meta name="description" content="Learn about Zaalima Development, a global SaaS company helping businesses transform digitally for over 10 years." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zaalima Development</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A global SaaS company helping businesses transform digitally for over 12 years.
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Zaalima Development is a global SaaS company helping businesses transform digitally for over 10 years. We combine technical expertise with industry knowledge to deliver solutions that drive growth and innovation.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Our team of engineers, designers, and consultants work together to create software that solves complex business challenges. We're committed to quality, innovation, and client success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold">12+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold">200+ Team Members</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold">15+ Countries</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Zaalima Development Team" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-neutral-700 italic">
              "Deliver robust and scalable software solutions that drive innovation."
            </p>
            <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-neutral-700">
                At Zaalima Development, we're on a mission to empower businesses through technology. We believe that the right software solutions can transform operations, enhance customer experiences, and drive growth. Our goal is to be a trusted partner in our clients' digital journeys, delivering solutions that not only meet current needs but also provide a foundation for future innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <motion.div 
              key={value.id}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-neutral-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Operating in 15+ countries, we have a diverse team that brings global perspective and local expertise to our clients' projects.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Global Map" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {companyTimeline.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-1/2"></div>
                <div className="z-10 flex items-center justify-center">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xs">
                    {event.year}
                  </div>
                </div>
                <div className={`w-1/2 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-right mr-6' : 'ml-6'}`}>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-neutral-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-xl text-white p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to work with us or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100 w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  View Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
