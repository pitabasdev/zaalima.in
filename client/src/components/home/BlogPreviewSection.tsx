import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of SaaS: Trends to Watch in 2025",
    excerpt: "Explore emerging technologies and methodologies that will shape the SaaS landscape in the coming years, from AI integration to microservices architecture.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2025",
    author: "Sarah Johnson",
    category: "Industry Insights",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to architect robust applications using microservices approach, focusing on scalability, maintainability, and deployment strategies.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 2, 2025",
    author: "Michael Chen",
    category: "Development",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Security Best Practices for Enterprise Applications",
    excerpt: "Discover essential security measures and protocols to protect your enterprise applications from modern threats and vulnerabilities.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 28, 2025",
    author: "Alex Rodriguez",
    category: "Security",
    readTime: "6 min read"
  }
];

export default function BlogPreviewSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
              Resources & Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest From Our <span className="gradient-heading">Blog</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/services">
              <Button variant="outline" className="group">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-700/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded flex items-center">
                    <Tag className="mr-1 h-3 w-3" />
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3.5 w-3.5 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-purple-700 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    <a>{post.title}</a>
                  </Link>
                </h3>
                
                <p className="text-neutral-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-neutral-500">{post.readTime}</span>
                  <Link href={`/blog/${post.id}`}>
                    <a className="text-purple-700 hover:text-purple-800 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-600 mb-4">
            Subscribe to our newsletter to receive the latest insights and industry updates
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex-grow"
            />
            <Button className="gradient-button text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}