'use client';

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";
import { Users, Award, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto py-16 px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;re on a mission to build amazing experiences and bring innovative solutions to our users.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Our Story</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Founded in 2023, our company began with a simple vision: to create technology that makes people&apos;s lives better. 
              What started as a small team of passionate developers has grown into a diverse group of talented individuals 
              all working toward that same goal.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Through our journey, we&apos;ve faced challenges, celebrated victories, and learned countless lessons. We&apos;ve 
              evolved our approach while staying true to our core values of integrity, innovation, and user-centered design.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we continue to push boundaries and explore new frontiers in technology, always with our users&apos; 
              needs at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12 px-4 rounded-xl mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Core Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Passion</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We&apos;re driven by a deep love for what we do. This passion fuels our creativity and pushes us to deliver exceptional results.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Excellence</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We hold ourselves to the highest standards in everything we create, constantly seeking to improve and refine our work.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Collaboration</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in the power of teamwork. By combining our diverse perspectives and skills, we achieve more together.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Impact</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive to create positive change through our work, focusing on solutions that make a meaningful difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 overflow-hidden">
                {/* Optional: Add actual image here */}
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">Sarah Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Passionate about technology and business strategy.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">David Chen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">CTO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Expert in software architecture and emerging technologies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 dark:text-white">Maya Patel</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Lead Designer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Creates beautiful, intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="max-w-4xl mx-auto py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We&apos;re always looking for talented individuals who share our passion and values. 
              Check out our careers page to learn about open positions.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              View Careers
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </ThemeProvider>
  );
}