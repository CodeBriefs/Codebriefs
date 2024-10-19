import { motion } from "framer-motion"

export default function TestimonialSection() {
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