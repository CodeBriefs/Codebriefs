"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Code, BookOpen, Home, User, Contact, Laptop, Share2, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"

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
        <CodeChallengeSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Welcome to CodeBriefs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
              Explore the world of coding with insightful articles, tutorials, and learn to write clean and concise code.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/notes">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </motion.section>
  )
}

function FeaturedArticles() {
  const articles = [
    { title: "Getting Started with Git and GitHub", icon: Github, description: "Learning Version Control Systems (VCS) plays a crucial role in coding. It helps manage and deploy code with ease." },
    { title: "Advanced Python Techniques", icon: BookOpen, description: "Dive deep into Python's advanced features and boost your coding efficiency." },
    { title: "The Future of Web Development", icon: Share2, description: "Explore emerging trends and technologies shaping the future of web development." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
          Featured Articles
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="mb-4 p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                <item.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <Link href={`notes/tutorials/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button variant="link" className="mt-4 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeChallengeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Daily Code Challenge
            </h2>
            <p className="text-xl text-purple-100">
              Sharpen your coding skills with our daily challenges. Are you up for it?
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Challenge
            </Button>
          </div>
          <div className="lg:ml-auto">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <pre className="text-sm overflow-x-auto">
                <code className="language-javascript">
                  {`function findMissingNumber(nums) {
  // Your code here
  return missingNumber;
}

// Test the function
console.log(findMissingNumber([3, 0, 1])); // Should return 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Should return 8`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  const testimonials = [
    { name: "Alex Johnson", role: "Frontend Developer", content: "CodeBriefs has been an invaluable resource in my journey as a developer. The tutorials are clear, concise, and always up-to-date." },
    { name: "Sarah Lee", role: "Data Scientist", content: "I love the daily code challenges! They've helped me improve my problem-solving skills and learn new programming concepts." },
    { name: "Michael Brown", role: "Full Stack Engineer", content: "The community here is amazing. I've learned so much from the discussions and code reviews on CodeBriefs." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
          What Our Users Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&quot;{item.content}&quot;</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">
              Stay Updated
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
              Subscribe to our newsletter for the latest articles, tutorials, and coding tips.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-purple-300 dark:border-purple-700"
                placeholder="Enter your email" type="email"
              />
              <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}