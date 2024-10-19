import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight, BookOpen, Github, Share2 } from "lucide-react"

export default function FeaturedArticles() {
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