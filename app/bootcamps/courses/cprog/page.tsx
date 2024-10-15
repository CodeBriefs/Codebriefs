"use client";

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users, BookOpen, Code, GitBranch, Database, ChevronDown, ChevronUp, Star, LibraryBig} from "lucide-react"

export default function EnhancedCourseDetails() {
  const [openModule, setOpenModule] = useState<string | null>(null)

  const modules = [
    {
      id: "module1",
      title: "C Language Basics",
      icon: Code,
      content: [
        "Introduction to C programming",
        "Variables and data types",
        "Operators and expressions",
        "Control structures (if, else, switch)",
        "Loops (for, while, do-while)",
      ]
    },
    {
      id: "module2",
      title: "Functions and Pointers",
      icon: GitBranch,
      content: [
        "Function declaration and definition",
        "Function parameters and return types",
        "Recursion",
        "Introduction to pointers",
        "Pointer arithmetic and dereferencing",
      ]
    },
    {
      id: "module3",
      title: "Arrays and Strings",
      icon: Database,
      content: [
        "One-dimensional and multi-dimensional arrays",
        "Array manipulation and traversal",
        "String basics and string functions",
        "Character arrays vs. string literals",
        "String manipulation algorithms",
      ]
    },
    {
      id: "module4",
      title: "Structures and File Handling",
      icon: BookOpen,
      content: [
        "Defining and using structures",
        "Nested structures and arrays of structures",
        "File I/O operations",
        "Reading and writing text files"
      ]
    },
    {
      id: "module5",
      title: "Basic Data Structures",
      icon: GitBranch,
      content: [
        "Linked lists (singly and doubly linked)",
        "Stacks and Queues",
        "Trees and binary trees",
        "Binary search trees (BST)",
        "Graphs"
      ]
    },
    {
      id: "module6",
      title: "Advanced Data Structures",
      icon: Database,
      content: [
        "Threaded Binary Trees",
        "AVL trees and balancing",
        "B Tree and B+ Trees",
        "Hash tables and collision resolution",
      ]
    },
    {
      id: "module7",
      title: "Sorting and Searching",
      icon: Code,
      content: [
        "Bubble sort, selection sort, insertion sort",
        "Merge sort and quick sort",
        "Linear search and binary search",
        "Hashing and hash-based searching",
        "Comparative analysis of sorting and searching algorithms",
      ]
    },
    {
      id: "module8",
      title: "Design and Analysis of Algorithm",
      icon: BookOpen,
      content: [
        "Introduction to algorithm analysis",
        "Time and space complexity",
        "Famous Named Algorithms",
        "Dynamic programming",
        "Greedy algorithms",
      ]
    },
    {
      id: "module9",
      title: "Problem Solving approaches",
      icon: LibraryBig,
      content: [
        "Understading and analysing the problem",
        "Solving Top 50 leetcode questions",
      ]
    },
  ]

  const courseFeatures = [
    "Live online classes",
    "Hands-on coding exercises",
    "Real-world projects",
    "Recording and Notes Provided",
    "23 months access to the course",
    "Certificate of completetion",
  ]

  const faqItems = [
    {
      question: "What are the prerequisites for this course?",
      answer: "Basic computer skills and a passion for programming. No prior coding experience is required."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "You will have 23 months of access to all course materials, including future updates."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course. We will refund only 85% of the amount."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you will receive a certificate of completion after completing atleast 85% of the course and securing atleast 75% in two Tests."
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
            <Image src="/placeholder.svg?height=300&width=1200" alt="C Programming and DSA Course Banner" layout="fill" objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Complete C Language and DSA Course</h1>
            </div>
          </div>
          <p className="text-xl text-center text-indigo-700 dark:text-indigo-300">Master C programming and conquer Data Structures and Algorithms</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Course Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { icon: Clock, text: "200+ hours of content" },
                  { icon: Calendar, text: "6 months duration" },
                  { icon: Users, text: "Expert-led live coding sessions" },
                  { icon: BookOpen, text: "Comprehensive C and DSA curriculum" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <item.icon className="w-5 h-5 text-indigo-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">What You will Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "C language fundamentals and advanced concepts",
                  "Memory management and pointers",
                  "Basic data structures (Arrays, Linked Lists, Stacks, Queues)",
                  "Advanced data structures (Trees, Graphs, Hash Tables)",
                  "Sorting and searching algorithms",
                  "Algorithm analysis and Big O notation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Course Curriculum</CardTitle>
              <CardDescription>Your roadmap to C and DSA mastery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modules.map((module) => (
                  <div key={module.id} className="border border-indigo-200 dark:border-indigo-800 rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-between text-left"
                      onClick={() => setOpenModule(openModule === module.id ? null : module.id)}>
                      <div className="flex items-center space-x-3">
                        <module.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        <div>
                          <h3 className="font-semibold text-indigo-700 dark:text-indigo-300">{module.title}</h3>
                        </div>
                      </div>
                      {openModule === module.id ? (
                        <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openModule === module.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                          <div className="p-4 bg-white dark:bg-gray-800">
                            <ul className="list-disc list-inside space-y-2">
                              {module.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 dark:text-gray-300">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Course Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Meet Your Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <Image src="/instructor.svg?height=150&width=150" alt="Instructor" width={150} height={150} className="rounded-full"/>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Rounakk Raaj Sabat</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Student, Coder and Learner. Solved 100+ problems on LeetCode.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline">View Profile</Button>
                    <Button>Contact Instructor</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm inline-block">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">Enroll Now</CardTitle>
              <CardDescription>Become a C and DSA expert</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">₹2599</p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Start Your C Journey
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}