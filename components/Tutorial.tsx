'use client'

import { MDXRemote } from 'next-mdx-remote'
import CodeSnippet from '@/components/Codesnippet'
import { ComponentProps, useEffect, useState } from 'react'
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"
import { BookOpen, Code, Lightbulb, X, Home, User, Contact } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link";

type CodeSnippetProps = ComponentProps<typeof CodeSnippet>

const components = {
  p: ({ children }: { children: React.ReactNode }) => (
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 leading-relaxed text-foreground"
    >
      {children}
    </motion.p>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 mt-12"
    >
      <h1 className="text-4xl font-bold pb-2 text-foreground relative">
        <span>{children}</span>
        <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-primary"></span>
      </h1>
      <hr className="border-t border-primary/20 mt-4" />
    </motion.div>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 mt-8"
    >
      <h2 className="text-3xl font-semibold text-primary flex items-center">
        <BookOpen className="mr-2 h-6 w-6" />
        {children}
      </h2>
      <hr className="border-t border-primary/10 mt-2" />
    </motion.div>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-medium text-primary-foreground mb-3 mt-6 flex items-center"
    >
      <Code className="mr-2 h-5 w-5" />
      {children}
    </motion.h3>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <motion.ul 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="list-disc pl-6 mb-4 space-y-2 text-foreground"
    >
      {children}
    </motion.ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <motion.ol 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="list-decimal pl-6 mb-4 space-y-2 text-foreground"
    >
      {children}
    </motion.ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-2 text-foreground">
      <span>{children}</span>
    </li>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6 relative"
    >
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary"></div>
      {children}
    </motion.div>
  ),
  code: (props: CodeSnippetProps) => <CodeSnippet {...props} />,
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="border-l-4 border-primary pl-4 italic my-4 text-foreground bg-primary/10 p-4 rounded-r-lg"
    >
      <Lightbulb className="inline-block mr-2 h-5 w-5 text-primary" />
      {children}
    </motion.blockquote>
  ),
}

export default function TutorialContent({ source, slug }: { source: any, slug: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-8 text-center text-[#9333EA]"
          >
            {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
          </motion.h1>
          {source ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <MDXRemote 
                {...source}
                components={components as any}
              />
            </motion.div>
          ) : (
            <p className="text-xl text-muted-foreground">No content available</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}