import { Helmet } from "react-helmet";
import { productItems } from "@/lib/data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  BarChart2,
  Settings,
  Check
} from "lucide-react";
import TechStackSection from "@/components/home/TechStackSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const iconComponents: Record<string, React.ReactNode> = {
  Users: <Users className="h-6 w-6" />,
  ClipboardList: <ClipboardList className="h-6 w-6" />,
  BarChart2: <BarChart2 className="h-6 w-6" />,
  Settings: <Settings className="h-6 w-6" />
};

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | Zaalima Development</title>
        <meta name="description" content="Explore our range of SaaS products including Zaalima CRM, HR Suite, ERP, and custom SaaS applications." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Scalable and efficient software solutions designed to meet your business needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {productItems.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  {iconComponents[product.icon]}
                </div>
                <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
                <p className="text-neutral-600 mb-6">{product.description}</p>

                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/get-started">
                    <Button className="flex-1">Request Demo</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="flex-1">Learn More</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Products?</h2>
            <p className="text-neutral-600">
              Our SaaS solutions are built with the latest technologies and best practices to ensure security, scalability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Architecture",
                description: "Our products are built to grow with your business, handling increased loads without performance issues."
              },
              {
                title: "Robust Security",
                description: "We implement multiple layers of security to protect your data and ensure compliance with regulations."
              },
              {
                title: "Seamless Integration",
                description: "Connect with your existing systems and third-party services through our comprehensive API."
              },
              {
                title: "Customization Options",
                description: "Tailor our products to fit your specific business processes and workflows."
              },
              {
                title: "Regular Updates",
                description: "Benefit from continuous improvements, new features, and security patches."
              },
              {
                title: "Dedicated Support",
                description: "Get help when you need it with our responsive customer support team."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <TechStackSection />
      <TestimonialsSection />
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-xl text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We can build tailored software solutions to address your unique business challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
