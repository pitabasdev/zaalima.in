import { Helmet } from "react-helmet";
import { internshipPrograms, internTestimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Calendar, 
  Award, 
  DollarSign,
  GraduationCap,
  BookOpen,
  Users,
  Code
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Interns() {
  return (
    <>
      <Helmet>
        <title>Internship Programs | Zaalima Development</title>
        <meta name="description" content="Join Zaalima Development's internship program. Gain real-world experience, work on live projects, and learn from industry experts." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Internship Opportunities</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Start your career with hands-on experience and mentorship from industry experts.
          </p>
        </div>
      </div>

      {/* Why Intern with Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Intern with Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-primary" />,
              title: "Hands-on Experience",
              description: "Work on real projects with real clients using the latest technologies and tools."
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Mentorship",
              description: "Learn from experienced professionals who will guide you throughout your internship journey."
            },
            {
              icon: <BookOpen className="h-8 w-8 text-primary" />,
              title: "Learning Opportunities",
              description: "Access to workshops, training sessions, and resources to enhance your skills."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Programs */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Internship Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-neutral-500" />
                      Duration: {program.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <p className="text-neutral-600">{program.requirements}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What You'll Do:</h4>
                      <p className="text-neutral-600">{program.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/get-started">Apply Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Apply</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Submit Your Application</h3>
                  <p className="text-neutral-600">
                    Fill out our online application form with your details, resume, and a brief description of why you're interested in interning with us.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Technical Assessment</h3>
                  <p className="text-neutral-600">
                    Complete a brief technical assessment to demonstrate your current skills and aptitude for the internship program.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interview</h3>
                  <p className="text-neutral-600">
                    If shortlisted, you'll be invited for an interview with our team to discuss your background, skills, and goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Onboarding</h3>
                  <p className="text-neutral-600">
                    Selected candidates will receive an offer letter and be invited to our onboarding program to kick-start your internship journey.
                  </p>
                </div>
              </li>
            </ol>
            
            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link href="/get-started">Apply for an Internship</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Intern Testimonials */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Intern Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <p className="text-neutral-600 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.university}</p>
                  <p className="text-sm text-primary">{testimonial.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate & Stipend Info */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Certificate & Stipend Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Internship Certificate</h3>
            </div>
            <p className="text-neutral-600 mb-4">
              Upon successful completion of the internship program, all interns receive an official certificate from Zaalima Development highlighting:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-600">
              <li>Duration of the internship</li>
              <li>Projects worked on</li>
              <li>Skills developed</li>
              <li>Performance evaluation</li>
            </ul>
            <p className="mt-4 text-neutral-600">
              This certificate serves as a valuable addition to your resume, demonstrating your practical experience and skills to future employers.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Stipend & Benefits</h3>
            </div>
            <p className="text-neutral-600 mb-4">
              We believe in recognizing the value our interns bring to the organization. Our internship programs include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-600">
              <li>Competitive monthly stipend based on the program and performance</li>
              <li>Flexible working hours</li>
              <li>Transportation allowance (for in-office interns)</li>
              <li>Free access to learning resources and courses</li>
              <li>Opportunity to join our team full-time upon successful completion</li>
            </ul>
            <p className="mt-4 text-neutral-600">
              The specific stipend amount will be discussed during the interview process and will be based on your qualifications and the internship program.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary rounded-xl text-white mx-4 sm:mx-8 md:mx-16 p-10 md:p-16 text-center mb-16">
        <div className="mb-6">
          <Lightbulb className="h-12 w-12 mx-auto" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Take the first step towards a rewarding career in technology by applying for our internship program.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100" asChild>
          <Link href="/get-started">Apply Now</Link>
        </Button>
      </div>
    </>
  );
}
