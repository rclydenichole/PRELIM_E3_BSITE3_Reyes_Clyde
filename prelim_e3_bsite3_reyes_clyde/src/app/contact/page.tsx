'use client';

import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would send the data to your API here
    console.log("Form submitted:", formData);
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto py-16 px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out with questions, feedback, or just to say hello.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium dark:text-white">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      123 Tech Avenue<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Mon-Fri from 9am to 6pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      hello@yourcompany.com
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      We&apos;ll respond as soon as possible
                    </p>
                  </div>
                </div>
              </div>
              
        </div>
            </div>
            {/* Contact Form */}
            <div className="md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={isLoading}
                  >
                    {isLoading ? <Send className="animate-spin h-5 w-5 mr-3" /> : <Send className="h-5 w-5 mr-3" />}
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {isSubmitted && (
                  <div className="mt-4 text-green-600 dark:text-green-400 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
      </main>
    </ThemeProvider>
  );
}