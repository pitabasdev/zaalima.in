import { Helmet } from "react-helmet";
import { careerOpenings } from "@/lib/data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  CheckCircle,
  Briefcase,
  Heart,
  Users,
  TrendingUp,
  Coffee,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  position: z.string().min(1, { message: "Please select a position" }),
  experience: z.string().min(1, { message: "Please provide your experience" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      experience: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/apply-job", data);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      form.reset();
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data);
  }

  function handleApplyNow(jobId: number, jobTitle: string) {
    setSelectedJob(jobId);
    form.setValue("position", jobTitle);
    setIsDialogOpen(true);
  }

  return (
    <>
      <Helmet>
        <title>Careers | Zaalima Development</title>
        <meta name="description" content="Join our team of talented professionals. Explore career opportunities at Zaalima Development and be part of our innovative journey." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Be part of a team that's passionate about building innovative solutions and making a difference.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="h-10 w-10 text-primary" />,
              title: "Meaningful Work",
              description: "Work on projects that make a real impact for businesses across the globe."
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-primary" />,
              title: "Growth Opportunities",
              description: "Continuous learning, mentorship programs, and clear career progression paths."
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Collaborative Culture",
              description: "Work with talented, diverse teams that value innovation and creativity."
            },
            {
              icon: <Coffee className="h-10 w-10 text-primary" />,
              title: "Work-Life Balance",
              description: "Flexible schedules, remote work options, and focus on employee wellbeing."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <p className="text-neutral-700 mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handleApplyNow(job.id, job.title)}
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[25px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            {[
              {
                title: "Application",
                description: "Submit your application and resume through our careers page."
              },
              {
                title: "Initial Screening",
                description: "Our recruitment team reviews your application and may schedule a brief phone call."
              },
              {
                title: "Technical Assessment",
                description: "Complete a relevant assessment based on the role you're applying for."
              },
              {
                title: "Offer",
                description: "Successful candidates will receive an offer with details about the role and compensation."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row mb-12 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0 ml-14 md:ml-0 relative">
                  {index % 2 === 0 ? (
                    <div className="md:hidden"></div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                  {index % 2 === 0 && (
                    <div className="hidden md:block">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  )}
                </div>

                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 z-10">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 md:pl-8">
                  {index % 2 === 1 && (
                    <div className="hidden md:block">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  )}
                  {(index % 2 === 0 || true) && (
                    <div className="md:hidden">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Employee Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Working at Zaalima Development has been a tremendous growth opportunity. The collaborative culture and challenging projects have helped me develop both professionally and personally.",
                name: "Alex Chen",
                role: "Senior Software Engineer",
                years: "3 years at Zaalima"
              },
              {
                quote: "What I appreciate most about Zaalima is how they value work-life balance while still delivering exceptional results for clients. The leadership truly cares about employee wellbeing.",
                name: "Sarah Johnson",
                role: "UX Designer",
                years: "2 years at Zaalima"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-neutral-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-neutral-500">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* No Positions? */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Briefcase className="h-12 w-12 text-primary mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and tell us why you'd be a great addition to Zaalima Development.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </div>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Apply for Position</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for this position. We'll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-1 years">0-1 years</SelectItem>
                        <SelectItem value="1-3 years">1-3 years</SelectItem>
                        <SelectItem value="3-5 years">3-5 years</SelectItem>
                        <SelectItem value="5+ years">5+ years</SelectItem>
                        <SelectItem value="10+ years">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter / Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you're interested in this position and why you'd be a great fit."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
