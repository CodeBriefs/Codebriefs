'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Instagram, Send, Mail, Github, Loader2, MapPin, Laptop, Contact, User, Home, X, Code } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
// import { toast } from '@/components/ui/use-toast'

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    //@ts-ignore
    async function handleSubmit(e) {
        // e.preventDefault();
        // const response = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         access_key: "02887792-1570-421e-8304-5c3a4c416a2f",
        //         name: e.target.name.value,
        //         email: e.target.email.value,
        //         message: e.target.message.value,
        //     }),
        // });
        // const result = await response.json();
        // if (result.success) {
        //     console.log(result);
        // }
        console.log ("Form submitted!!")
    }
    

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/codebriefs", color: "hover:text-pink-500" },
        { name: "Gmail", icon: Mail, href: "mailto:contact.codebriefs@gmail.com", color: "hover:text-red-500" },
        { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-500" },
    ]

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
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-5">
                        <div className="md:col-span-3 p-8 md:p-12">
                            <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">Get in Touch</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">We'd love to hear from you. Send us a message!</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">Name</Label>
                                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required
                                        className="mt-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                        placeholder="Your name"/>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</Label>
                                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                        className="mt-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                        placeholder="your@email.com"/>
                                </div>
                                <div>
                                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">Message</Label>
                                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required
                                        className="mt-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 h-32"
                                        placeholder="Your message here..." />
                                </div>
                                <Button type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 transform hover:scale-105"
                                    disabled={isSubmitting} >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                        <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 text-white">
                                        <Mail className="h-6 w-6" />
                                        <span>contact.codebriefs@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-white">
                                        <MapPin className="h-6 w-6" />
                                        <span>Berhampur, Odisha, India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((link) => (
                                        <Link key={link.name} href={link.href}
                                            className={`transform transition-all duration-300 hover:scale-110 text-white ${link.color} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 rounded-full p-2`}
                                            aria-label={link.name} target='_blank' >
                                            <link.icon className="w-6 h-6" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>

    )
}