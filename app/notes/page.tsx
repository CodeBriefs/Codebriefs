"use client";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { X, Code, Home, User, Contact, Search, Tag, Laptop } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

export default function Notes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const programmingLanguages = [
    { name: "Git and GitHub", slug: "git", category: "Version Control System", description: "The system to manage, create and deploy codes to cloud through command line." },
    { name: "Java", slug: "java", category: "Enterprise", description: "Widely used for building large-scale applications" },
    { name: "Python", slug: "python", category: "General", description: "Known for its simplicity and readability" },
    { name: "C++", slug: "cpp", category: "System", description: "Powerful language for system/application development" },
  ];

  const filteredLanguages = programmingLanguages.filter(lang => (selectedCategory === "all" || lang.category === selectedCategory) &&
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Explore Programming Languages</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Dive into our comprehensive tutorials and master your coding skills</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-8 bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-700"
                placeholder="Search languages..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-700">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Web">Web</SelectItem>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
                <SelectItem value="System">System</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLanguages.map((lang) => (
              <Card key={lang.slug} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="bg-purple-500 dark:bg-purple-700 text-white p-4">
                  <CardTitle className="text-2xl">{lang.name}</CardTitle>
                  <CardDescription className="text-purple-100 flex items-center">
                    <Tag className="w-4 h-4 mr-1" /> {lang.category} </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{lang.description}</p>
                  <Link href={`/notes/tutorials/${lang.slug}`}>
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:text-gray-900 dark:hover:bg-purple-400">
                      View Tutorial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}