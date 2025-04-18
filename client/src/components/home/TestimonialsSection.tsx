import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Zaalima Development transformed our business with their custom software solution. The team understood our requirements perfectly and delivered a product that exceeded our expectations. The attention to detail and commitment to quality were exceptional.",
    author: "Jennifer Reynolds",
    position: "CTO, GlobalTech Innovations",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuePgcLHoHXzzC-BMHBgfQELXvPXAzDWWfNQ&usqp=CAU"
  },
  {
    id: 2,
    content:
      "Working with Zaalima was a game-changer for our startup. Their team's expertise in modern technologies allowed us to bring our idea to market faster than expected. The intuitive UX design they created resulted in a 40% increase in user engagement.",
    author: "Michael Chen",
    position: "Founder, NexusAI",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8VjgS9YFGgVZ5_V5KxP9VKfRinJqcBFTFw&usqp=CAU"
  },
  {
    id: 3,
    content:
      "The e-commerce platform developed by Zaalima helped us scale our operations smoothly during peak seasons. Their cloud architecture ensured 99.9% uptime even during our busiest holiday sales. I highly recommend their services for businesses looking to scale.",
    author: "Sarah Johnson",
    position: "E-commerce Director, RetailPlus",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGXqoYXW8G5x6QDgk16cYx4jTQ-i_kL9VGw&usqp=CAU"
  },
  {
    id: 4,
    content:
      "Zaalima Development's healthcare solution streamlined our patient management processes, resulting in a 30% increase in operational efficiency. Their understanding of HIPAA compliance and data security gave us complete confidence in the system.",
    author: "Dr. Robert Martinez",
    position: "Medical Director, HealthFirst Clinic",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VdJ0YCj81oecCwJPBVlJQEfcmw_XFHvM2g&usqp=CAU"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-heading">Clients Say</span> About Us
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We take pride in our client relationships and the impact our solutions have on their businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-100 rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-100 rounded-full" />
              
              <div className="relative">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-1 text-purple-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M11.43 2C6.711 2 2.123 6.401 2.123 12.333c0 5.73 4.097 9.813 9.307 9.667 1.688-.048 3.14-1.076 3.14-2.733 0-1.542-1.341-2.435-2.9-2.34-1.571.097-2.862-1.28-2.862-2.99 0-1.684 1.386-3.215 2.613-3.215h10.454c.59 0 1.125-.536 1.125-1.216V7.833C22.999 4.565 18.656 2 11.43 2z" />
                  </svg>
                </div>
                
                <div className="mb-6 pl-7">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <p className="text-neutral-700 mb-6 italic pl-7">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-800">{testimonial.author}</h4>
                      <p className="text-sm text-neutral-500">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="h-10 w-20">
                    <img 
                      src={testimonial.companyLogo} 
                      alt="Company logo" 
                      className="h-full w-full object-contain grayscale opacity-70"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_0lsB5YRCjw3hb-RsJh3g7FH_5y4-AiEAJmKMd9AcAhbUF2qqIUHN-Wt_XsptHwqDw&usqp=CAU" alt="Client Logo" className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QwopW8DSpMxZPLO9l-waMQQ171lYjFVl-g&usqp=CAU" alt="Client Logo" className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkk9EeJglrAc9FgxpOZlnpj1L6VKHi34UZSw&usqp=CAU" alt="Client Logo" className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4aPcXPTKlbvLGQHW3-Fua1YR4dCnHvkRjw&usqp=CAU" alt="Client Logo" className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ElFHxqFBOy0mGKvRVMQR3_GCkkQc0l2AvQ&usqp=CAU" alt="Client Logo" className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}