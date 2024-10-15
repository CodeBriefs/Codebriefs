'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Instagram, Send, Mail, Github, Loader2, MapPin } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import { X, Code, BookOpen, Home, User, Contact } from "lucide-react";

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulating form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Form submitted:', { name, email, message })
        setIsSubmitting(false)
        setName('')
        setEmail('')
        setMessage('')
    }

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/codebriefs", color: "hover:text-pink-500"},
        //{ name: "Telegram", icon: Send, href: "https://telegram.org", color: "hover:text-blue-500" },
        { name: "Gmail", icon: Mail, href: "mailto:contact.codebriefs@gmail.com", color: "hover:text-red-500" },
        { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-500" },
    ]

    return (
        
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
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
                onClick={() => setMobileMenuOpen(false)}
              >
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
                <Contact className = "h-5 w-5"/>
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
            
            <div className="flex-grow container mx-auto px-4 py-8">
                <Card className="max-w-4xl mx-auto shadow-2xl transition-all duration-300 hover:shadow-3xl bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                            Get in Touch
                        </CardTitle>
                        <CardDescription className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                            We would love to hear from you. Send us a message!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="name" className="text-lg font-medium">Name</Label>
                                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required
                                        className="mt-1 bg-white dark:bg-gray-700 transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-lg font-medium">Email</Label>
                                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                        className="mt-1 bg-white dark:bg-gray-700 transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message" className="text-lg font-medium">Message</Label>
                                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required
                                        className="mt-1 h-32 bg-white dark:bg-gray-700 transition-colors duration-300"/>
                                </div>
                                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                                    disabled={isSubmitting}>{isSubmitting ? (<>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : ('Send Message')}
                                </Button>
                            </form>
                        </div>
                        <div className="space-y-6 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                                    <Mail size={24} />
                                    <span>contact.codebriefs@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                                    <MapPin size={24} />
                                    <span>Berhampur, Odisha, India</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((link) => (
                                        <Link key={link.name} href={link.href} className={`transform transition-all duration-300 hover:scale-110 ${link.color} focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-full p-2`}
                                            aria-label={link.name} target='_blank'>
                                            <link.icon className="w-8 h-8" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
               
            </div>
            <Footer />
        </div>
    )
}