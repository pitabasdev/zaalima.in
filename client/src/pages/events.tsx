import { Helmet } from "react-helmet";
import { eventItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays,
  MapPin,
  ExternalLink,
  Clock 
} from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events | Zaalima Development</title>
        <meta name="description" content="Join Zaalima Development for upcoming events, webinars, and product demonstrations." />
      </Helmet>

      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Webinars</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join us for insightful talks, workshops, and product demos.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="webinars">Webinars / Live Demos</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventItems.upcoming.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <CalendarDays className="h-4 w-4 text-neutral-500" />
                        {event.date}
                      </CardDescription>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-neutral-500" />
                        {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a href={event.registrationLink}>
                          Register Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="webinars" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventItems.webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{webinar.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4 text-neutral-500" />
                        {webinar.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600">{webinar.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a href={webinar.registrationLink}>
                          Register Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {eventItems.past.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <CalendarDays className="h-4 w-4 text-neutral-500" />
                        {event.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-neutral-600">{event.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Highlights:</h4>
                        <p className="text-neutral-600">{event.highlights}</p>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 mt-4">
                        <img
                          src={event.images[0]}
                          alt={event.title}
                          className="rounded-md object-cover w-full h-64"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Host a Private Event</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Interested in arranging a private workshop or training session for your team? We offer customized events tailored to your organization's needs.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Contact Us for Details</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-xl text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events and webinars.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-neutral-800 w-full"
              required
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-neutral-100">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
