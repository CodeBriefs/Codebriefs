"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Moon, Sun, Menu, X, Code, Home, BookOpen, User, Mail, LogOut } from "lucide-react"
import { signOut, useSession } from 'next-auth/react'

interface AppbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Appbar({ mobileMenuOpen, setMobileMenuOpen }: AppbarProps) {
  const { theme, setTheme } = useTheme()
  const session = useSession()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignIn = () => {
    router.push('/signin')
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/')
  }

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/bootcamps", label: "Bootcamp", icon: BookOpen },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact Us", icon: Mail },
  ]

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link className="flex items-center space-x-2 transition-transform hover:scale-105" href="/">
            {/* <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" /> */}
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 hidden sm:inline-block">
            Code&lt;<span className="text-white">Briefs/&gt;</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 ml-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} 
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {session.data?.user ? (
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8 transition-transform hover:scale-110">
                <AvatarImage src={session.data.user.image || ""} alt="User avatar" />
                <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                  {session.data.user.name?.[0] || "U"}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={handleSignOut}
                className="hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400 transition-colors">
                <LogOut className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" onClick={handleSignIn}
              className="hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900 dark:hover:text-purple-400 transition-colors"
            >
              Sign In
            </Button>
          )}
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={mobileMenuOpen ? "close" : "open"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}