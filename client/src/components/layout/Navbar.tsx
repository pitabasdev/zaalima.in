import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Settings,
  Users,
  Package,
  Calendar,
  Briefcase,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const NavLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/about", label: "About", icon: Users },
  { href: "/products", label: "Products", icon: Package },
  { href: "/careers", label: "Careers", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: MessageSquare },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-white border-b"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="group flex items-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src="/zaalima-logo.png"
                    alt="Zaalima Development Logo"
                    className="h-10 md:h-12 w-auto"
                  />
                </motion.div>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NavLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(link.href)
                    ? "text-purple-700 bg-purple-50"
                    : "text-neutral-600 hover:text-purple-700 hover:bg-purple-50/50"
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-purple-50 rounded-md -z-0"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </a>
              </Link>
            ))}
            <div className="pl-2 ml-2 border-l border-gray-200">
              <Link href="/get-started">
                <Button size="sm" className="gradient-button text-white shadow-sm">
                  Get Started <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l-purple-100 p-0">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <h3 className="text-xl font-bold text-white mb-4">
                        <span className="text-primary">Zaalima</span> Development
                      </h3>
                    </div>
                  </div>
                </div>
                <nav className="p-4">
                  <div className="mb-4 pb-4 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-500 mb-3 px-2">Navigation</p>
                    <div className="space-y-1">
                      {NavLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link key={link.href} href={link.href}>
                            <a
                              className={`flex items-center py-2 px-3 rounded-md ${isActive(link.href)
                                ? "bg-purple-50 text-purple-700 font-medium"
                                : "text-neutral-700 hover:bg-purple-50/50 hover:text-purple-700"
                                }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Icon className="h-4 w-4 mr-3" />
                              {link.label}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link href="/get-started">
                      <Button
                        className="w-full gradient-button text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-neutral-500 mt-4">
                      Need help? <a href="/contact" className="text-purple-600 font-medium hover:underline">Contact support</a>
                    </p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
