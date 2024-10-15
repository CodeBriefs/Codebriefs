"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Contact, Home, User, Zap, X } from "lucide-react"
import Link from "next/link"
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"

const bootcamps = [
  {
    title: "Complete C and DSA",
    description: "Learn complete C programming language along with the basic and advanced concepts of DSA for Competitive Coding and Interviews",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-400 to-orange-500",
  },
  // Add more bootcamps here if needed
]

export default function FancyBootcampsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Appbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
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
              <Link className="flex items-center space-x-2" href="/">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link className="flex items-center space-x-2" href="/about">
                <User className="h-5 w-5" />
                <span>About</span>
              </Link>
              <Link className="flex items-center space-x-2" href="/contact">
                <Contact className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      <header className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], }}
            transition={{
              duration: 10, repeat: Infinity, repeatType: "reverse",
            }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Elevate Your Coding Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our intensive bootcamps and transform your passion for coding into a thriving career.
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bootcamps.map((bootcamp, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card
                className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <div className={`h-2 bg-gradient-to-r ${bootcamp.gradient}`} />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <span className="mr-3 p-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 text-white">
                      {bootcamp.icon}
                    </span>
                    {bootcamp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                    {bootcamp.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href={`/bootcamps/courses/cprog`}>
                    <Button variant="outline" className="font-semibold">Course Details</Button>
                  </Link>
                  <Link href="../pay">
                    <Button className="font-semibold">
                      Enroll Now{" "}
                      <motion.span animate={{ x: hoveredIndex === index ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </motion.span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}