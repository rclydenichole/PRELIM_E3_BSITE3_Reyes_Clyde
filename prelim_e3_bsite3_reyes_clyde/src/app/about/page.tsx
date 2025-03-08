'use client';

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar";
import { Target, Eye, ShieldUser, Check } from "lucide-react";

export default function About() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto py-16 px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LYCEUM OF ALABANG EDUCATIONAL STATEMENT</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Philosophy</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            An institution that provides quality and relevant instruction and innovation for the next generation to improve the lives of individuals; physically, emotionally, morally, and spiritually adhere to the principle of God.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            “I will instruct you and teach in the way you should go; I will counsel you with my loving eyes on you.” – Psalm 32:8
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 py-12 px-4 rounded-xl mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Our Core Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                Lyceum of Alabang shall provide world-class education and training through competent personnel, high-end facilities, advanced technology, and equipment and accredited curricula of industry-based courses.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                Lyceum of Alabang envisions becoming one of the nation’s leading educational institutions involved in the pursuit and advancement of knowledge, skills, and values for personal, community and national development.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <ShieldUser className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Quality Policy</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                We, at the Lyceum of Alabang, commit ourselves to exceed the expectations of our stakeholders through continual improvement for effective and efficient provision of quality education and training. We will ensure that all our academic and non-academic processes and activities are aligned with their voice.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Check className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold dark:text-white">Impact</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Impart knowledge and intellectual skills and nurture different qualities of mind and character such as curiosity, critical judgment, ethical awareness, and creative imagination.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Provide quality competence development and enhancement program for faculty and staff to ensure optimum learning and l excellent service to all stakeholders.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Provide quality high-end facilities and equipment instrumental to the enhancement and advance of learning.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Develop individuals who are skilled in identifying, clarifying, choosing, and putting into practice decisions that are relevant to their personal, social, and cultural development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}