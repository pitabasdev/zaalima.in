import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/chat-widget";

// Pages
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Products from "@/pages/products";
import Events from "@/pages/events";
import Interns from "@/pages/interns";
import Careers from "@/pages/careers";
import GetStarted from "@/pages/get-started";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/events" component={Events} />
          <Route path="/interns" component={Interns} />
          <Route path="/careers" component={Careers} />
          <Route path="/get-started" component={GetStarted} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ChatWidget />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
