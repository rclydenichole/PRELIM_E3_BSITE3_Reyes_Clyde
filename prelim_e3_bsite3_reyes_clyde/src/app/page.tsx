//import React, { ReactNode } from 'react';
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/ThemeContext";


function Home() {

  return (
    <>
    <ThemeProvider>
      <Navbar />
      <main>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <h1 className="flex justify-center items-center flex-sm text-4xl font-bold mb-4 text-black dark:text-white">LYCEUM OF ALABANG RETAINS ISO 9001:2015 COMPLIANCE</h1>
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-2 md:text-base">
            Website created for Assignment 3 by Sir Alamo.
          </p>
        </div>
    </main>
    </ThemeProvider>
    
    </>
  );
}

export default Home;

