import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiAmazon, SiGooglecloud, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithub, SiGitlab } from "react-icons/si";

const techStack = [
  { 
    name: "React", 
    icon: <SiReact className="w-10 h-10 text-[#61DAFB]" />,
    description: "Building dynamic user interfaces"
  },
  { 
    name: "Node.js", 
    icon: <SiNodedotjs className="w-10 h-10 text-[#339933]" />,
    description: "Backend and API development"
  },
  { 
    name: "AWS", 
    icon: <SiAmazon className="w-10 h-10 text-[#FF9900]" />,
    description: "Cloud infrastructure and services"
  },
  { 
    name: "Google Cloud", 
    icon: <SiGooglecloud className="w-10 h-10 text-[#4285F4]" />,
    description: "Cloud computing solutions"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="w-10 h-10 text-[#47A248]" />,
    description: "NoSQL database solutions"
  },
  { 
    name: "PostgreSQL", 
    icon: <SiPostgresql className="w-10 h-10 text-[#336791]" />,
    description: "Relational database management"
  },
  { 
    name: "Docker", 
    icon: <SiDocker className="w-10 h-10 text-[#2496ED]" />,
    description: "Containerization for deployment"
  },
  { 
    name: "Kubernetes", 
    icon: <SiKubernetes className="w-10 h-10 text-[#326CE5]" />,
    description: "Container orchestration platform"
  },
  { 
    name: "Terraform", 
    icon: <SiTerraform className="w-10 h-10 text-[#7B42BC]" />,
    description: "Infrastructure as code"
  },
  { 
    name: "Jenkins", 
    icon: <SiJenkins className="w-10 h-10 text-[#D33833]" />,
    description: "CI/CD automation"
  },
  { 
    name: "GitHub", 
    icon: <SiGithub className="w-10 h-10 text-[#181717]" />,
    description: "Version control and collaboration"
  },
  { 
    name: "GitLab", 
    icon: <SiGitlab className="w-10 h-10 text-[#FC6D26]" />,
    description: "DevOps platform"
  }
];

export default function TechStackSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-4">
            Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built With Modern <span className="gradient-heading">Technologies</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver high-performance, scalable solutions for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-3">
                {tech.icon}
              </div>
              <h3 className="font-medium text-lg mb-1">{tech.name}</h3>
              <p className="text-sm text-neutral-500">{tech.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-500">
            Our engineers constantly evaluate and adopt the best technologies to ensure optimal performance, security, and scalability.
          </p>
        </div>
      </div>
    </div>
  );
}