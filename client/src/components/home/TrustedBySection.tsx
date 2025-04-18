// components/sections/trusted-by.tsx
import { clientLogos } from "@/lib/data";
import { LogoCarousel } from "@/components/ui/logo-carousel";

export default function TrustedBySection() {
  return (
    <div className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Our Clients
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Leading <span className="gradient-heading">Companies</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Partnering with organizations across industries to deliver cutting-edge software solutions
          </p>
        </div>

        <LogoCarousel
          logos={clientLogos}
          speed={0.2}
        />

        {/* <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">Join Our Growing Client Portfolio</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
              See how our solutions can help transform your business with custom software
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Book a Consultation
            </motion.a>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}