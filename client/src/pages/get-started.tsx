import { Helmet } from "react-helmet";
import { faqItems, productItems } from "@/lib/data";
import { Link } from "wouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  CalendarIcon, 
  Check, 
  Handshake, 
  Users, 
  BarChart2 
} from "lucide-react";
import { format } from "date-fns";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  phone: z.string().optional(),
  product: z.string().min(1, { message: "Please select a product" }),
  preferredDate: z.date().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function GetStarted() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      product: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/request-demo", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "We'll get back to you to schedule a time that works for you.",
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
        <title>Get Started | Zaalima Development</title>
        <meta name="description" content="Get started with Zaalima Development. Schedule a demo, learn about our partnership programs, or get answers to your questions." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with Zaalima</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Take the first step towards transforming your business with our innovative solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="demo">Schedule a Demo</TabsTrigger>
            <TabsTrigger value="partner">Partner With Us</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
          </TabsList>
          
          {/* Schedule a Demo Tab */}
          <TabsContent value="demo" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Request a Demo</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
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
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="product"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product of Interest</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a product" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {productItems.map(product => (
                                <SelectItem key={product.id} value={product.title}>
                                  {product.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="Custom Solution">Custom Solution</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Demo Date (Optional)</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${!field.value ? "text-muted-foreground" : ""}`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements or questions?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isPending}>
                      {isPending ? "Submitting..." : "Request Demo"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-medium">1</div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg mb-1">Schedule Confirmation</h3>
                        <p className="text-neutral-600">Within 24 hours, our team will reach out to confirm your demo appointment.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-medium">2</div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg mb-1">Personalized Demo</h3>
                        <p className="text-neutral-600">A product specialist will showcase how our solution addresses your specific needs.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-medium">3</div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg mb-1">Q&A Session</h3>
                        <p className="text-neutral-600">Get answers to all your questions from our technical and business experts.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-medium">4</div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg mb-1">Custom Proposal</h3>
                        <p className="text-neutral-600">Receive a tailored proposal based on your requirements and budget.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Why Our Demos Are Different</h3>
                  <p className="text-neutral-600 mb-4">
                    We don't believe in generic presentations. Each demo is customized to your business needs and challenges, focusing on how our solutions can deliver real value to your organization.
                  </p>
                  <p className="text-neutral-600">
                    You'll leave with a clear understanding of implementation timelines, costs, and expected ROI.
                  </p>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Partner With Us Tab */}
          <TabsContent value="partner" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Partnership Opportunities</h2>
              <p className="text-lg text-neutral-600 mb-10 text-center">
                Join forces with Zaalima Development to deliver exceptional value to your clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <Handshake className="h-10 w-10 text-primary" />,
                    title: "Reseller Program",
                    description: "Become an authorized reseller of our products and solutions, with competitive margins and comprehensive sales support."
                  },
                  {
                    icon: <BarChart2 className="h-10 w-10 text-primary" />,
                    title: "Technology Partners",
                    description: "Integrate your technology with our platform to create powerful, combined solutions for mutual clients."
                  },
                  {
                    icon: <Users className="h-10 w-10 text-primary" />,
                    title: "Referral Partners",
                    description: "Earn commissions by referring clients who can benefit from our solutions and services."
                  }
                ].map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="bg-primary rounded-xl text-white p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Partner Program Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                  {[
                    "Dedicated partner manager",
                    "Sales and marketing resources",
                    "Technical training and certification",
                    "Co-marketing opportunities",
                    "Joint customer success stories",
                    "Competitive commission structure",
                    "Priority support channels",
                    "Regular product updates"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="bg-white text-primary hover:bg-neutral-100" asChild>
                  <Link href="/contact">Contact Our Partnership Team</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          {/* FAQs Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <p className="text-lg text-neutral-600 mb-10 text-center">
                Find answers to common questions about our products, services, and getting started.
              </p>
              
              <Accordion
                type="multiple"
                value={openItems}
                onValueChange={setOpenItems}
                className="mb-12"
              >
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-neutral-200 rounded-lg overflow-hidden mb-4 bg-white"
                  >
                    <AccordionTrigger className="px-5 py-4 font-semibold text-lg hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5">
                      <p className="text-neutral-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                
                {/* Additional Getting Started FAQs */}
                {[
                  {
                    id: "gs-faq-1",
                    question: "How long does implementation typically take?",
                    answer: "Implementation timelines vary based on the complexity of your requirements. Smaller projects can be completed in 2-4 weeks, while enterprise-scale implementations may take 3-6 months. During the demo, we'll provide a more specific timeline based on your needs."
                  },
                  {
                    id: "gs-faq-2",
                    question: "Do you offer free trials of your products?",
                    answer: "Yes, we offer limited-duration free trials for most of our products. These trials provide access to core functionality so you can evaluate how the solution fits your needs. For more comprehensive evaluations, we recommend scheduling a demo."
                  },
                  {
                    id: "gs-faq-3",
                    question: "What kind of support is included?",
                    answer: "All our products come with standard support including email and ticket-based assistance during business hours. We also offer premium support packages with 24/7 coverage, dedicated support representatives, and faster response times."
                  }
                ].map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-neutral-200 rounded-lg overflow-hidden mb-4 bg-white"
                  >
                    <AccordionTrigger className="px-5 py-4 font-semibold text-lg hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5">
                      <p className="text-neutral-600">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="bg-neutral-50 p-8 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-4">Still Have Questions?</h3>
                <p className="text-neutral-600 mb-6">
                  Our team is ready to answer any additional questions you might have about our products, services, or how we can help your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Support Center</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Social Proof */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Implementing Zaalima's CRM solution transformed our sales process, resulting in a 35% increase in conversion rates within the first quarter.",
                company: "Global Retail Corp",
                logo: "https://images.unsplash.com/photo-1516876437184-593fda40c8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                quote: "The level of customization and support we received from Zaalima exceeded our expectations. Their team truly understood our business needs.",
                company: "TechInnovate Inc.",
                logo: "https://images.unsplash.com/photo-1516876437184-593fda40c8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                quote: "Zaalima's cloud migration services allowed us to scale our operations seamlessly while reducing our infrastructure costs by 40%.",
                company: "Finanbridge Partners",
                logo: "https://images.unsplash.com/photo-1516876437184-593fda40c8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-neutral-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.company}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-xl text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss how our solutions can help you achieve your business goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-neutral-100" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
