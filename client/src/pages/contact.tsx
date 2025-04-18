import { Helmet } from "react-helmet";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { officeLocations } from "@/lib/data";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Github, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState(officeLocations[0]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
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

  return (
    <>
      <Helmet>
        <title>Contact Us | Zaalima Development</title>
        <meta name="description" content="Get in touch with Zaalima Development. Contact us for inquiries about our services, support, or partnership opportunities." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Have questions about our services? Ready to start a project? Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Sending..." : "Submit"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {officeLocations.map((location) => (
                  <Button 
                    key={location.id}
                    variant={activeLocation.id === location.id ? "default" : "outline"}
                    onClick={() => setActiveLocation(location)}
                    size="sm"
                  >
                    {location.city}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{activeLocation.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>{activeLocation.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>{activeLocation.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/zaalimadev/"
                  className="bg-neutral-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/zaalimadev"
                  className="bg-neutral-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572379405433&rdid=nDS72PreW7RTjz1g&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15uk2wS3Bp%2F#"
                  className="bg-neutral-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-neutral-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-neutral-700">Saturday - Sunday: Closed</p>
              <p className="mt-4 text-neutral-600">
                Our support team is available 24/7 for urgent inquiries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        </div>
        <div className="h-96 bg-neutral-200 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.040161162799!2d-122.3916806!3d37.7907908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f67f0d37c3%3A0x32c2e2a79b2aafd7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647627574027!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Zaalima Development Office Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}
