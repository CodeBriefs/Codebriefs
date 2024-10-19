"use client";

import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { X, Code, Home, User, Contact, Server, Laptop } from "lucide-react";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Appbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: -300 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="fixed inset-y-0 left-0 w-full max-w-xs border-r border-border/40 bg-background p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link className="flex items-center space-x-2" href="/">
                  <Code className="h-6 w-6" />
                  <span className="font-bold">CodeBriefs</span>
                </Link>
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                  onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </button>
              </div>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link className="flex items-center space-x-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400" href="/">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link className="flex items-center space-x-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400" href="/bootcamps">
                  <Laptop className="h-5 w-5" />
                  <span>Bootcamps</span>
                </Link>
                <Link className="flex items-center space-x-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400" href="/about">
                  <User className="h-5 w-5" />
                  <span>About</span>
                </Link>
                <Link className="flex items-center space-x-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400" href="/contact">
                  <Contact className="h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <main className="flex-grow container mx-auto px-4 py-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-purple-800 dark:text-purple-300 mb-8"
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            Welcome to CodeBriefs
          </motion.h1>

          <motion.section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I am a passionate coder and technology enthusiast. While I prefer to keep my identity private,
              my work speaks for itself. This blog is my digital playground where I share insights,
              tutorials, and thoughts on the ever-evolving world of programming.
            </p>
          </motion.section>

          <motion.section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-300">
                <Code size={24} />
                <span>Java Development</span>
              </div>
              <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-300">
                <Code size={24} />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-300">
                <Server size={24} />
                <span>Backend Systems</span>
              </div>
            </div>
          </motion.section>
        </main>
        {/* <div className="space-x-4">
          <Link href="../pay">
            <Button variant="outline" className=" border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950">
              Support CodeBriefs
            </Button>
          </Link>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}