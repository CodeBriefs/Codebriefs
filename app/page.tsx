"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Code, Home, User, Contact, Laptop } from "lucide-react"
import Link from "next/link"
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import FeaturedArticles from "@/components/FeaturedArticles"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-500">
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
      <main className="flex-1">
        <HeroSection />
        <FeaturedArticles />
        {/* <CodeChallengeSection /> */}
        {/* <TestimonialSection /> */}
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </div>
  )
}