import { Helmet } from "react-helmet";
import { serviceItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  Cpu,
  HelpCircle
} from "lucide-react";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TechStackSection from "@/components/home/TechStackSection";

const iconComponents: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  HelpCircle: <HelpCircle className="h-6 w-6" />
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Zaalima Development</title>
        <meta name="description" content="Explore our comprehensive range of services including SaaS development, UI/UX design, mobile & web app development, cloud integration, and more." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to meet the unique needs of your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  {iconComponents[service.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-500 mb-4">{service.description}</p>
                <p className="text-neutral-700 mb-6">{service.details}</p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-neutral-600">
              We follow a structured approach to ensure high-quality, on-time delivery of your software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We understand your business needs and objectives through in-depth consultation and research."
              },
              {
                step: "2",
                title: "Planning",
                description: "Our team creates a comprehensive project plan including timeline, resources, and deliverables."
              },
              {
                step: "3",
                title: "Development",
                description: "We build your solution using agile methodologies, with regular updates and feedback cycles."
              },
              {
                step: "4",
                title: "Deployment",
                description: "We launch your solution and provide ongoing support and maintenance as needed."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <TechStackSection />


      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-xl text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business grow and succeed in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/get-started">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
