import { Link } from "wouter";
import { Facebook, Linkedin, Twitter, Github, MapPin, Phone, Mail, Instagram, Youtube } from "lucide-react";
import { careerOpenings } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-primary">Zaalima</span> Development
            </h3>
            <p className="mb-4">
              Empowering businesses with innovative SaaS solutions for over a decade.
            </p>
            <Link href="/contact" className="mt-4 inline-block">
              <a className="inline-block px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300">
                Contact Us
              </a>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-white transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition duration-300">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-white transition duration-300">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="hover:text-white transition duration-300">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="hover:text-white transition duration-300">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  Cloud Integration
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  AI & Automation
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition duration-300">
                  Technical Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>123 Tech Park, Innovation Ave, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>+91 8277035909</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span>info@zaalima.in</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <p>&copy; 2025 Zaalima Development. All rights reserved.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/zaalimadev/"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/zaalimadev"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572379405433"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
           
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}