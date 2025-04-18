import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request data
      const contactSchema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
        message: z.string().min(10, { message: "Message must be at least 10 characters" }),
      });

      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you might save this to a database or send an email
      // Since we're using in-memory storage for this demo, we'll just return success
      
      // For demonstration, log the contact submission
      console.log("Contact form submission:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Demo request endpoint for the Get Started page
  app.post("/api/request-demo", async (req, res) => {
    try {
      // Validate request data
      const demoRequestSchema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
        company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
        phone: z.string().optional(),
        product: z.string().min(1, { message: "Please select a product" }),
        message: z.string().optional(),
      });

      const validatedData = demoRequestSchema.parse(req.body);
      
      // For demonstration, log the demo request
      console.log("Demo request submission:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Demo request submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Job application endpoint
  app.post("/api/apply-job", async (req, res) => {
    try {
      // Validate request data
      const jobApplicationSchema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
        position: z.string().min(1, { message: "Please select a position" }),
        experience: z.string().min(1, { message: "Please provide your experience" }),
        message: z.string().optional(),
      });

      const validatedData = jobApplicationSchema.parse(req.body);
      
      // For demonstration, log the job application
      console.log("Job application submission:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Application submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate request data
      const subscribeSchema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
      });

      const validatedData = subscribeSchema.parse(req.body);
      
      // For demonstration, log the subscription
      console.log("Newsletter subscription:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Subscription successful" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid email address", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
